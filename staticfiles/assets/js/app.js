(function ($) {
  "use strict";

  $(document).ready(function () {
    // Mobile Menu Dropdown
    const mobileNavToggler = document.querySelector(".nav--toggle");
    const body = document.querySelector("body");
    if (mobileNavToggler) {
      mobileNavToggler.addEventListener("click", function () {
        body.classList.toggle("nav-toggler");
      });
    }
    // Mobile Menu Dropdown End

    // Mobile Submenu
    $(".primary-menu__list.has-sub .primary-menu__link").on(
      "click",
      function (e) {
        e.preventDefault();
        body.classList.add("primary-submenu-toggler");
      }
    );
    $(".primary-menu__list.has-sub.active .primary-menu__link").on(
      "click",
      function (e) {
        e.preventDefault();
        body.classList.remove("primary-submenu-toggler");
      }
    );
    $(".primary-menu__list.has-sub").on("click", function () {
      $(this).toggleClass("active").siblings().removeClass("active");
    });
    // Mobile Submenu End

    //   Nice Select Inititate
    $("select").niceSelect();
    //   Nice Select End

    // Client Slider
    const clientSlider = $(".client-slider");
    if (clientSlider) {
      clientSlider.slick({
        mobileFirst: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 2000,
        responsive: [
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 5,
            },
          },
        ],
      });
    }
    // Client Slider End

    // Trainer Slider
    const trainerSlider = $(".trainer-slider");
    if (trainerSlider) {
      trainerSlider.slick({
        mobileFirst: true,
        prevArrow:
          '<button type="button" class="trainer-slider__btn trainer-slider__btn-prev"><i class="bx bx-left-arrow-alt"></i></button>',
        nextArrow:
          '<button type="button" class="trainer-slider__btn trainer-slider__btn-next"><i class="bx bx-right-arrow-alt" ></i></button>',
        responsive: [
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
      });
    }
    // Trainer Slider End

    // Feedback Slider
    $(".feedback-slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".feedback-slider-nav",
    });
    $(".feedback-slider-nav").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".feedback-slider-for",
      mobileFirst: true,
      prevArrow:
        '<button type="button" class="feedback-slider-nav__btn feedback-slider-nav__btn-prev"><i class="bx bx-left-arrow-alt"></i></button>',
      nextArrow:
        '<button type="button" class="feedback-slider-nav__btn feedback-slider-nav__btn-next"><i class="bx bx-right-arrow-alt" ></i></button>',
    });
    // Feedback Slider End

    // Feedback Slider Home 2
    $(".feedback-slider").slick({
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 2000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
    });
    // Feedback Slider Home 2 End

    // Search Popup
    var bodyOvrelay = $("#body-overlay");
    var searchPopup = $("#search-popup");

    $(document).on("click", "#body-overlay", function (e) {
      e.preventDefault();
      bodyOvrelay.removeClass("active");
      searchPopup.removeClass("active");
    });
    $(document).on("click", ".search--toggler", function (e) {
      e.preventDefault();
      searchPopup.addClass("active");
      bodyOvrelay.addClass("active");
    });
    // Search Popup End

    // Password Show Hide Toggle
    $(".auth-form__toggle-pass").each(function () {
      $(this).on("click", function () {
        $(this).children().toggleClass("bx bx-show").toggleClass("bx bxs-hide");
        var input = $(this).parent().find("input");
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });
    });
    // Password Show Hide Toggle End

    // Gallery Image Magnific Popup
    var magPhoto = $(".gallery-photo-magnify");
    if (magPhoto.length) {
      magPhoto.magnificPopup({
        type: "image",
      });
    }

    // Gallery Image Magnific Popup End

    // Filterizer
    var filterizd = $(".filter-container");
    if (filterizd.length) {
      filterizd.filterizr({
        //options object
        layout: "sameWidth",
        gutterPixels: 15,
      });
    }
    // Filterizer End

    // Back to Top
    $(document).on("click", ".back-to-top", function () {
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        1200
      );
    });
    // Back to Top End
  });
})(jQuery);

$(window).on("scroll", function () {
  var ScrollTop = $(".back-to-top");
  if ($(window).scrollTop() > 1200) {
    ScrollTop.fadeIn(1000);
  } else {
    ScrollTop.fadeOut(1000);
  }
});

$(window).on("load", function () {
  // Preloader
  var preLoder = $(".preloader");
  preLoder.fadeOut(1000);
});
