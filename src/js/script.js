var menuItens = document.querySelectorAll(".sidebar-menu-item");
var sidebar = document.querySelector(".sidebar");
var btnExpand = document.querySelector(".sidebar-header");

btnExpand.addEventListener("click", () => {
  sidebar.classList.toggle("expanded");
});

menuItens.forEach((item) => {
  item.addEventListener("click", () => {
    menuItens.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
