$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
      },
      700: {
        items: 2,
        nav: true,
      },
      900: {
        items: 3,
        nav: true,
        
      },
      1200: {
        items: 4,
      },
    },
  });
});
  