$(function() {
  const convertToOffcanvas = () => {
    const menu = $("#menu");
    $(window).width() < 992 ? menu.addClass('offcanvas offcanvas-end') : menu.removeClass('offcanvas offcanvas-start');
  }

  $(window).resize(function() {
    convertToOffcanvas();
  }).trigger('resize');

  if (window.location.pathname === "/") { // Ensure this runs only on the homepage
    var options = {
      'resume': {
        'careerLevel': [
          'Early Career Level - 0 to 3 years',
          'Mid Career Level - 3 to 7 years',
          'Senior Career Level - 7+ years'
        ],
        'deadline': [
          '7 Days',
          '5 Days',
          '3 Days'
        ]
      },
      'cover-letter': {
        'careerLevel': [
          'Entry Level',
          'Experienced',
          'Managerial Level'
        ],
        'deadline': [
          '10 Days',
          '7 Days',
          '5 Days'
        ]
      },
      'linkedin': {
        'careerLevel': [
          'Internship',
          'Professional',
          'Executive'
        ],
        'deadline': [
          '14 Days',
          '10 Days',
          '7 Days'
        ]
      }
    };

    function updateOptions(service) {
      var careerLevels = options[service].careerLevel;
      var deadlines = options[service].deadline;

      $('#career-level').empty();
      careerLevels.forEach(function(level) {
        $('#career-level').append(new Option(level, level));
      });

      $('#deadline').empty();
      deadlines.forEach(function(time) {
        $('#deadline').append(new Option(time, time));
      });
    }

    $('#service').change(function() {
      var selectedService = $(this).val();
      updateOptions(selectedService);
    });

    updateOptions($('#service').val());
  }

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
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});