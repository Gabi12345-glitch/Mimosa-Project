document.querySelector(".header_burger-inner").onclick = function () {
  document
    .querySelector(".header_burger")
    .classList.toggle("header_burger-active");
  document
    .querySelector(".header_burger-menu")
    .classList.toggle("header_burger-menu-active");
   document
     .querySelector(".li_sub-dropdown")
     .classList.toggle("ul_sub-dropdown-active");
};



jQuery(function ($) {
  $(".li_burger_menu").click(function () {
    $(this).find(".ul_subdown_menu").toggleClass("ul_subdown_menu-active");
  });
});