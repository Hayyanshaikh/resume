$(function() {
  const convertToOffcanvas = () => {
    const menu = $("#menu");
    $(window).width() < 992 ? menu.addClass('offcanvas offcanvas-end') : menu.removeClass('offcanvas offcanvas-start');
  }

  $(window).resize(function() {
    convertToOffcanvas();
  }).trigger('resize');


  const testimonialSwiper = new Swiper('.testimonial-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: '.testimonial-nav .testimonial-button-next',
      prevEl: '.testimonial-nav .testimonial-button-prev',
    },
  });

  var resumesSwiper = new Swiper('.resumes-slider', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

  var clientSwiper = new Swiper('.client-swiper', {
    slidesPerView: "auto",
    spaceBetween: 40,
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});