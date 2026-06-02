const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#primary-navigation");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("is-open");
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("is-open");
    }
  });
}

const accordionTriggers = document.querySelectorAll(".accordion-trigger");

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const panelId = trigger.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";

    trigger.setAttribute("aria-expanded", String(!isExpanded));

    if (panel) {
      panel.hidden = isExpanded;
    }
  });
});

const tabTriggers = document.querySelectorAll(".tab-trigger");

tabTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const tabs = trigger.closest("[data-tabs]");
    if (!tabs) return;

    const targetId = trigger.getAttribute("aria-controls");
    const panels = tabs.querySelectorAll(".tab-panel");
    const buttons = tabs.querySelectorAll(".tab-trigger");

    buttons.forEach((button) => button.setAttribute("aria-selected", "false"));
    panels.forEach((panel) => (panel.hidden = true));

    trigger.setAttribute("aria-selected", "true");
    const targetPanel = tabs.querySelector(`#${targetId}`);
    if (targetPanel) targetPanel.hidden = false;
  });
});

// Close mobile navigation with Escape or outside click for better usability.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navToggle && navMenu) {
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
  }
});

document.addEventListener("click", (event) => {
  if (!navToggle || !navMenu || !navMenu.classList.contains("is-open")) return;

  const clickedInsideNav =
    navMenu.contains(event.target) || navToggle.contains(event.target);
  if (!clickedInsideNav) {
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
  }
});

// Static portfolio contact form demo: validates input and shows a visible success state.
const portfolioForms = document.querySelectorAll("[data-portfolio-form]");

portfolioForms.forEach((form) => {
  const status = form.querySelector("[data-form-status]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      if (status) {
        status.textContent =
          "Please complete the required fields with a valid email address.";
        status.classList.remove("is-success");
        status.classList.add("is-error");
      }
      form.reportValidity();
      return;
    }

    if (status) {
      status.textContent =
        "Thank you for reaching out. Your message has been received, and I look forward to connecting with you soon.";
      status.classList.remove("is-error");
      status.classList.add("is-success");
    }

    form.reset();
  });
});
