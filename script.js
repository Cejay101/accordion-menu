const accordion = function(multiple = false) {
  const accordion = document.querySelector(".accordion-menu");
  const dropdownHeader = accordion.querySelectorAll(".dropdownHeader");
  dropdownHeader.forEach((header) => {
    header.addEventListener("click", (e) => {
      const submenuItem = header.nextElementSibling;
      submenuItem.style.display = submenuItem.style.display === "block" ? "none" : "block";
      header.parentElement.classList.toggle("active");
      if (!multiple) {
        accordion.querySelectorAll(".submenuItems").forEach((submenu) => {
          if (submenu !== submenuItem) {
            submenu.style.display = "none";
            submenu.parentElement.classList.remove("active");
          }
        });
      }
    });
  });
};
accordion();

