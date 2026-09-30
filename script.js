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
