function accordion(multiple = false) {
  const accordion = document.querySelector(".accordion-menu");
  const dropdownlink = accordion.querySelectorAll(".dropdownlink");
  dropdownlink.forEach((link) => {
    link.addEventListener("click", (e) => {
      const next = link.nextElementSibling;
      next.style.display = next.style.display === "block" ? "none" : "block";
      link.parentElement.classList.toggle("open");
      if (!multiple) {
        accordion.querySelectorAll(".submenuItems").forEach((submenu) => {
          if (submenu !== next) {
            submenu.style.display = "none";
            submenu.parentElement.classList.remove("open");
          }
        });
      }
    });
  });
}
accordion();
