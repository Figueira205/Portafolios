"use strict";

// Project narratives describe scope, without inventing dates, employers or metrics.
const projects = {
  creditaria: {
    category: "LEGAL · WEB & CMS A MEDIDA",
    title: "Creditaria Estudio Legal",
    intro:
      "Desarrollo de la web corporativa de un despacho de abogados en Madrid, acompañado de un sistema de blogs a medida para dar autonomía al equipo editorial.",
    details: [
      [
        "El contexto",
        "Presentar distintas áreas jurídicas —Segunda Oportunidad, dación en pago, concurso de acreedores y ejecución hipotecaria, entre otras— con una estructura que ayude a encontrar el servicio y solicitar una consulta.",
      ],
      [
        "La experiencia web",
        "Organización de servicios, contenido del equipo y vías de contacto en un recorrido claro. La presencia digital combina la presentación del despacho con la información que necesita quien busca ayuda legal.",
      ],
      [
        "El sistema editorial",
        "Un gestor de blogs desarrollado a medida que permite editar artículos de forma profesional y planificar sus publicaciones. El trabajo editorial forma parte del proyecto, más allá de la página pública.",
      ],
      [
        "Mi aportación",
        "Desarrollo de la web y del sistema de gestión de contenidos, conectando presentación, organización de información y necesidades de publicación del despacho.",
      ],
    ],
    tags: [
      "Web corporativa",
      "CMS a medida",
      "Edición profesional",
      "Planificación editorial",
    ],
    link: "https://www.creditaria.es",
  },
  melkart: {
    category: "NÁUTICA · PLATAFORMA DE RESERVAS",
    title: "Melkart Náutica",
    intro:
      "Web para el alquiler de catamaranes en las Islas Baleares, con sistema de agendado, reservas y pagos online.",
    details: [
      [
        "El contexto",
        "Traducir la propuesta de una experiencia náutica al entorno digital: conocer el servicio, situarse en el destino y avanzar hacia la contratación.",
      ],
      [
        "El recorrido de reserva",
        "El proyecto incluye agendado y reserva, organizando los pasos que el usuario necesita para contratar el alquiler.",
      ],
      [
        "Pagos online",
        "La posibilidad de pagar online se integra en la propuesta del sitio, conectando la selección del servicio con la contratación.",
      ],
      [
        "Mi aportación",
        "Desarrollo de la web y del sistema de agendado, reserva y pago online, con atención a la organización de la información y a la experiencia de uso.",
      ],
    ],
    tags: [
      "Turismo náutico",
      "Catamaranes",
      "Agenda",
      "Reservas",
      "Pagos online",
    ],
  },
  odoo: {
    category: "LEGAL · SISTEMAS EMPRESARIALES",
    title: "Odoo para Creditaria",
    intro:
      "CRM a medida con módulos personalizados para la gestión de expedientes de Creditaria Estudio Legal.",
    details: [
      [
        "El contexto",
        "Un despacho necesita que su sistema de gestión refleje los procesos con los que trabaja. La personalización permite ajustar Odoo a las necesidades de la operativa.",
      ],
      [
        "El trabajo",
        "Personalización del CRM y desarrollo de módulos orientados a la gestión de expedientes, con Odoo y Python.",
      ],
      [
        "El enfoque",
        "Dar una estructura comprensible al trabajo interno y conectar la tecnología con las necesidades del equipo, manteniendo la gestión de información en el centro de la experiencia.",
      ],
    ],
    tags: ["Odoo", "Python", "CRM", "Gestión de expedientes"],
  },
  exoneris: {
    category: "LEGAL · WEB CORPORATIVA",
    title: "Exoneris Abogados",
    intro:
      "Plataforma corporativa para un despacho especializado en Ley de Segunda Oportunidad, con diseño orientado a la captación de consultas y la gestión de casos.",
    details: [
      [
        "El contexto",
        "Presentar un servicio jurídico especializado exige claridad en la información y un recorrido comprensible para quien está valorando solicitar ayuda.",
      ],
      [
        "La experiencia",
        "Diseño UX/UI con atención a la jerarquía de contenido, la orientación del usuario y las vías de contacto.",
      ],
      [
        "El enfoque",
        "Integrar diseño, captación de consultas y SEO dentro de la propuesta digital, sin perder de vista la especialización del despacho.",
      ],
    ],
    tags: ["UX/UI", "Captación de consultas", "SEO", "Segunda Oportunidad"],
  },
  ramirez: {
    category: "COMERCIO · CATÁLOGO DIGITAL",
    title: "Ramírez de Losada",
    intro:
      "Catálogo digital de vinos, con una web accesible y adaptada a distintos dispositivos.",
    details: [
      [
        "El contexto",
        "Organizar la oferta de vinos en un catálogo que facilite su consulta y acompañe el recorrido hacia la compra.",
      ],
      [
        "La experiencia",
        "Desarrollo web con atención a la presentación del producto, la legibilidad y la navegación entre dispositivos.",
      ],
      [
        "El enfoque",
        "Una presencia digital coherente con el catálogo y una estructura que permite explorar la oferta con claridad.",
      ],
    ],
    tags: ["Catálogo digital", "Diseño web", "Responsive"],
    link: "https://www.ramirezdelosada.com",
  },
  payments: {
    category: "LEGAL TECH · VUE.JS",
    title: "Planes de Pago",
    intro:
      "Calculadora legal para la Ley de Segunda Oportunidad, desarrollada con Vue.js.",
    details: [
      [
        "El contexto",
        "Trasladar una herramienta de cálculo al navegador requiere organizar la entrada de datos y presentar la información de forma comprensible.",
      ],
      [
        "La experiencia",
        "Una aplicación web que sitúa la interacción con los datos y los cálculos en el centro del diseño.",
      ],
      [
        "El enfoque técnico",
        "Uso de Vue.js para construir la interfaz de la herramienta y estructurar la experiencia de consulta.",
      ],
    ],
    tags: ["Vue.js", "Aplicación web", "Cálculo", "Legal tech"],
    link: "https://github.com/Figueira205/Planes-de-Pago",
  },
  cointhrive: {
    category: "FINANZAS · MOBILE",
    title: "Cointhrive",
    intro:
      "Aplicación móvil de finanzas personales: una experiencia pensada para consultar información desde el teléfono.",
    details: [
      [
        "El contexto",
        "En una pantalla pequeña, la organización y la legibilidad de la información son parte esencial de la experiencia.",
      ],
      [
        "La experiencia",
        "Trabajo sobre una aplicación de finanzas personales con foco en el entorno móvil y en una navegación comprensible.",
      ],
      [
        "El enfoque",
        "Jerarquía visual y presentación de información adaptadas al contexto de consulta desde el teléfono.",
      ],
    ],
    tags: ["Mobile", "Finanzas personales", "Interfaz"],
    link: "https://github.com/Figueira205/Cointhrive-Mobile",
  },
  automation: {
    category: "INTEGRACIONES · AUTOMATIZACIÓN & IA",
    title: "Procesos que se conectan",
    intro:
      "Implementación de flujos de trabajo con n8n y Make, con integración de inteligencia artificial.",
    details: [
      [
        "La especialización",
        "Conectar herramientas y ordenar tareas repetitivas mediante flujos automatizados que respondan a necesidades del negocio.",
      ],
      [
        "Las herramientas",
        "n8n y Make para construir flujos de trabajo e integración de IA como parte de los procesos.",
      ],
      [
        "El enfoque",
        "Entender primero la tarea y sus puntos de fricción para decidir qué automatizar y cómo organizar el recorrido de la información.",
      ],
    ],
    tags: ["n8n", "Make", "IA", "Integraciones"],
  },
};

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
const closeMenu = () => {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú");
};
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  navigation.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-wrap")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia("(min-width: 601px)").addEventListener("change", closeMenu);

const cards = [...document.querySelectorAll(".project-card")];
const filters = [...document.querySelectorAll("[data-filter]")];
filters.forEach((button) =>
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    filters.forEach((filter) =>
      filter.setAttribute("aria-pressed", String(filter === button)),
    );
    let visible = 0;
    cards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
      if (!card.hidden) visible++;
    });
    document.querySelector(".project-count").textContent =
      `${visible} ${visible === 1 ? "proyecto" : "proyectos"}`;
  }),
);

const dialog = document.querySelector("#project-dialog");
const details = document.querySelector("#dialog-details");
const tags = document.querySelector("#dialog-tags");
const projectLink = document.querySelector("#dialog-link");
let dialogOpener = null;
document.querySelectorAll("[data-project]").forEach((button) =>
  button.addEventListener("click", () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    dialogOpener = button;
    document.querySelector("#dialog-title").textContent = project.title;
    document.querySelector("#dialog-category").textContent = project.category;
    document.querySelector("#dialog-intro").textContent = project.intro;
    details.replaceChildren();
    project.details.forEach(([title, text]) => {
      const section = document.createElement("section");
      section.className = "dialog-detail";
      const heading = document.createElement("h3");
      heading.textContent = title;
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      section.append(heading, paragraph);
      details.append(section);
    });
    tags.replaceChildren();
    project.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      tags.append(span);
    });
    projectLink.hidden = !project.link;
    if (project.link) {
      projectLink.href = project.link;
      projectLink.textContent = project.link.includes("github.com")
        ? "Ver código en GitHub ↗"
        : "Visitar web ↗";
    } else {
      projectLink.removeAttribute("href");
    }
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add("modal-open");
  }),
);
document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (
    event.target === dialog &&
    (event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom)
  )
    dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  dialogOpener?.focus();
});
document.querySelector("#year").textContent = String(new Date().getFullYear());

// Atmosphere and motion are optional; core navigation never depends on them.
(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const motionButton = document.querySelector(".motion-toggle");
  const canvas = document.querySelector("#ambient-canvas");
  const context = canvas.getContext("2d");
  let paused = false;
  try {
    paused = localStorage.getItem("portfolio-motion-paused") === "true";
  } catch {
    /* Storage can be unavailable in private contexts. */
  }
  let frame = 0;
  let previousTime = 0;
  let width = 0;
  let height = 0;
  let stars = [];
  let pageVisible = !document.hidden;
  const canAnimate = () => !paused && !reducedMotion.matches && pageVisible;

  const revealElements = [
    ...document.querySelectorAll(
      ".section-heading, .project-card, .experience-row, .portrait-card, .about-copy, .capability-card, .contact-card",
    ),
  ];
  revealElements.forEach((element) => {
    element.classList.add("scroll-reveal");
    if (
      element.classList.contains("project-card") ||
      element.classList.contains("capability-card")
    ) {
      const index = [...element.parentElement.children].indexOf(element);
      element.style.setProperty(
        "--reveal-delay",
        `${(index % (innerWidth > 600 ? 2 : 1)) * 90}ms`,
      );
    }
  });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -22px 0px" },
    );
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  const resize = () => {
    width = innerWidth;
    height = innerHeight;
    const pixelRatio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context?.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    const count = width < 600 ? 20 : 42;
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.06,
      vy: (Math.random() - 0.5) * 0.06,
      radius: 0.5 + Math.random() * 0.7,
      phase: Math.random() * Math.PI * 2,
    }));
  };
  const draw = (time) => {
    if (!context || !canAnimate()) {
      frame = 0;
      return;
    }
    const step = previousTime ? Math.min((time - previousTime) / 16.67, 2) : 1;
    previousTime = time;
    context.clearRect(0, 0, width, height);
    stars.forEach((star, index) => {
      star.x = (star.x + star.vx * step + width) % width;
      star.y = (star.y + star.vy * step + height) % height;
      const opacity = 0.18 + (Math.sin(time / 3000 + star.phase) + 1) * 0.13;
      context.beginPath();
      context.fillStyle = `rgba(174,196,241,${opacity})`;
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      context.fill();
      // Sparse connections create depth without an overwhelming particle field.
      for (let j = index + 1; j < stars.length; j++) {
        const other = stars[j];
        const distance = Math.hypot(star.x - other.x, star.y - other.y);
        if (distance > 110) continue;
        context.beginPath();
        context.strokeStyle = `rgba(147,175,230,${(1 - distance / 110) * 0.08})`;
        context.lineWidth = 0.5;
        context.moveTo(star.x, star.y);
        context.lineTo(other.x, other.y);
        context.stroke();
      }
    });
    frame = requestAnimationFrame(draw);
  };
  const syncMotion = () => {
    document.body.classList.toggle(
      "motion-enabled",
      !reducedMotion.matches && !paused,
    );
    document.body.classList.toggle(
      "motion-paused",
      paused || reducedMotion.matches || !pageVisible,
    );
    motionButton.setAttribute("aria-pressed", String(paused));
    motionButton.setAttribute(
      "aria-label",
      paused ? "Activar animaciones de fondo" : "Pausar animaciones de fondo",
    );
    motionButton.querySelector(".motion-icon").textContent = paused ? "▷" : "Ⅱ";
    motionButton.querySelector(".motion-label").textContent = paused
      ? "Activar movimiento"
      : "Pausar movimiento";
    if (!canAnimate()) {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
      context?.clearRect(0, 0, width, height);
    } else if (!frame && context) {
      frame = requestAnimationFrame(draw);
    }
  };
  motionButton.addEventListener("click", () => {
    paused = !paused;
    try {
      localStorage.setItem("portfolio-motion-paused", String(paused));
    } catch {
      /* Keep the control functional without storage. */
    }
    syncMotion();
  });
  reducedMotion.addEventListener("change", syncMotion);
  document.addEventListener("visibilitychange", () => {
    pageVisible = !document.hidden;
    syncMotion();
  });
  let resizeFrame = 0;
  window.addEventListener(
    "resize",
    () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(resize);
    },
    { passive: true },
  );
  resize();
  syncMotion();

  let scrollFrame = 0;
  const onScroll = () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      const range = document.documentElement.scrollHeight - innerHeight;
      const progress =
        range > 0 ? Math.min(Math.max(scrollY / range, 0), 1) : 0;
      document.querySelector(".scroll-progress").style.transform =
        `scaleX(${progress})`;
      document
        .querySelector(".site-header")
        .classList.toggle("is-scrolled", scrollY > 40);
      scrollFrame = 0;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  document
    .querySelectorAll(".project-card, .capability-card, [data-tilt]")
    .forEach((element) => {
      let hoverFrame = 0;
      element.addEventListener(
        "pointermove",
        (event) => {
          if (!finePointer.matches || reducedMotion.matches || paused) return;
          cancelAnimationFrame(hoverFrame);
          hoverFrame = requestAnimationFrame(() => {
            const bounds = element.getBoundingClientRect();
            const x = Math.min(
              Math.max((event.clientX - bounds.left) / bounds.width, 0),
              1,
            );
            const y = Math.min(
              Math.max((event.clientY - bounds.top) / bounds.height, 0),
              1,
            );
            element.style.setProperty("--spot-x", `${x * 100}%`);
            element.style.setProperty("--spot-y", `${y * 100}%`);
            if (element.hasAttribute("data-tilt")) {
              element.style.setProperty("--tilt-x", `${(0.5 - y) * 6}deg`);
              element.style.setProperty("--tilt-y", `${(x - 0.5) * 6}deg`);
            }
          });
        },
        { passive: true },
      );
      element.addEventListener("pointerleave", () => {
        cancelAnimationFrame(hoverFrame);
        element.style.setProperty("--tilt-x", "0deg");
        element.style.setProperty("--tilt-y", "0deg");
      });
    });
})();
