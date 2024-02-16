$(document).ready(function () {
    $('#carouselExample').on('slid.bs.carousel', function (event) {
        var slideIndex = $(this).find('.active').index();
        $('.navbar-nav a').removeClass('active');
        $('.navbar-nav a[data-bs-slide-to="' + slideIndex + '"]').addClass('active');
      });
      $('#carouselExample').carousel({
        interval: 3000
      });
  });