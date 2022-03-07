/***************************************************
 ==================== JS INDEX ======================
 ****************************************************
 01. PreLoader Js
 02. Mobile Menu Js
 03. Sidebar Js
 04. Sticky Header Js
 05. Data-Background Js
 06. Testimonial Slider 3 Js
 07. WoW Js
 08. InHover Active Js
 ****************************************************/

(function ($) {
    $('a[href^="#"]').on('click', function (e) {
        // e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 70
        }, 100, 'swing', function () {
            window.location.hash = target;
        });
    });
    "use strict";

    var windowOn = $(window);
    ////////////////////////////////////////////////////
    // 01. PreLoader Js
    windowOn.on('load', function () {
        $("#loading").fadeOut(500);
    });


    ////////////////////////////////////////////////////
    // 02. Mobile Menu Js
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanExpand: ['<i class="fal fa-plus"></i>'],
    });


    ////////////////////////////////////////////////////
    // 03. Sidebar Js
    $("#sidebar-toggle").on("click", function () {
        $(".sidebar__area").addClass("sidebar-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".sidebar__close-btn").on("click", function () {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });


    ////////////////////////////////////////////////////
    // 04. Sticky Header Js
    windowOn.on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header-sticky").removeClass("sticky");
        } else {
            $("#header-sticky").addClass("sticky");
        }
    });

    ////////////////////////////////////////////////////
    // 05. Data-Background Js
    $("[data-background").each(function () {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });


    ////////////////////////////////////////////////////
    // 06. Testimonial Slider 3 Js
    $('.testimonial__slider-3').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        items: 3,
        navText: ['<button><i class="fa fa-angle-left"></i>PREV</button>', '<button>NEXT<i class="fa fa-angle-right"></i></button>'],
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                autoplay: true
            },
            576: {
                items: 1,
                autoplay: true
            },
            767: {
                items: 2,
                autoplay: true
            },
            992: {
                items: 2,
                autoplay: true
            },
            1200: {
                items: 3,
                autoplay: false
            },
            1600: {
                items: 3,
                autoplay: false
            }
        }
    });


    ////////////////////////////////////////////////////
    // 07. WoW Js
    new WOW().init();

    ////////////////////////////////////////////////////
    // 08. InHover Active Js
    $('.hover__active').on('mouseenter', function () {
        $(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
    });

})(jQuery);