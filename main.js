(function () {
  var doc = document, root = doc.documentElement;
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };

  $("#year").textContent = new Date().getFullYear();

  /* Tema: sistema por defecto; el botón alterna y recuerda la elección */
  function currentTheme() {
    var t = root.getAttribute("data-theme");
    return t || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  $("#theme").addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("jf-theme", next); } catch (e) {}
    var m = doc.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", next === "dark" ? "#0b0e13" : "#eef0f3");
  });

  /* Barra de navegación: cristal al salir de lo más alto */
  var nav = $("#nav");
  var sentinel = doc.createElement("div");
  sentinel.style.cssText = "position:absolute;top:0;left:0;height:60px;width:1px;pointer-events:none";
  doc.body.prepend(sentinel);
  new IntersectionObserver(function (e) { nav.classList.toggle("is-solid", !e[0].isIntersecting); }).observe(sentinel);

  /* Menú móvil */
  var burger = $("#burger"), menu = $("#menu");
  function setMenu(open) {
    menu.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  }
  burger.addEventListener("click", function () { setMenu(burger.getAttribute("aria-expanded") !== "true"); });
  $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  doc.addEventListener("click", function (e) { if (!e.target.closest(".nav")) setMenu(false); });
  doc.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* Filtros de proyectos */
  var works = $$(".work"), count = $("#count");
  $$("[data-filter]").forEach(function (b) {
    b.addEventListener("click", function () {
      var f = b.dataset.filter, n = 0;
      $$("[data-filter]").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      works.forEach(function (w) {
        var show = f === "all" || w.dataset.cat.split(" ").indexOf(f) !== -1;
        w.hidden = !show; if (show) n++;
      });
      count.textContent = n + (n === 1 ? " proyecto" : " proyectos");
    });
  });

  /* Detalle del proyecto en un diálogo nativo */
  var dlg = $("#dlg"), opener = null;
  function openProject(id, trigger) {
    var t = $("#t-" + id); if (!t) return;
    $("#dlg-meta").textContent = t.dataset.meta;
    $("#dlg-title").textContent = t.dataset.title;
    $("#dlg-desc").textContent = t.dataset.desc;
    var rows = $("#dlg-rows"); rows.replaceChildren(t.content.cloneNode(true));
    opener = trigger;
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
  }
  $$("[data-open]").forEach(function (b) { b.addEventListener("click", function () { openProject(b.dataset.open, b); }); });
  $("#dlg-close").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", function () { if (opener) opener.focus(); });

  /* Copiar el correo */
  var copy = $("#copy");
  copy.addEventListener("click", function () {
    var text = $("#mail").textContent;
    var done = function () { copy.textContent = "Copiado"; setTimeout(function () { copy.textContent = "Copiar"; }, 1800); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () { selectMail(); });
    else selectMail();
    function selectMail() {
      var r = doc.createRange(); r.selectNodeContents($("#mail"));
      var s = getSelection(); s.removeAllRanges(); s.addRange(r);
      copy.textContent = "Seleccionado";
    }
  });

  if (reduce || !fine) return;

  /* Botones magnéticos */
  $$("[data-magnetic]").forEach(function (btn) {
    var raf = 0;
    btn.addEventListener("pointermove", function (e) {
      var r = btn.getBoundingClientRect();
      var x = (e.clientX - r.left - r.width / 2) * 0.25, y = (e.clientY - r.top - r.height / 2) * 0.35;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () { btn.style.setProperty("--bx", x + "px"); btn.style.setProperty("--by", y + "px"); });
    });
    btn.addEventListener("pointerleave", function () { cancelAnimationFrame(raf); btn.style.setProperty("--bx", "0px"); btn.style.setProperty("--by", "0px"); });
  });

  /* Inclinación suave del retrato */
  var photo = $("#tilt");
  if (photo) {
    var raf2 = 0;
    photo.addEventListener("pointermove", function (e) {
      var r = photo.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf2);
      raf2 = requestAnimationFrame(function () { photo.style.setProperty("--ry", px * 8 + "deg"); photo.style.setProperty("--rx", -py * 8 + "deg"); });
    });
    photo.addEventListener("pointerleave", function () { photo.style.setProperty("--ry", "0deg"); photo.style.setProperty("--rx", "0deg"); });
  }
})();
