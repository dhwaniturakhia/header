jQuery(document).ready(function ($) {
    jQuery(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            jQuery('body').addClass("header-fixed");
            jQuery('.header-fixed').slideDown(1000);
        }
        else {
            jQuery('body').removeClass("header-fixed");
            jQuery('.header-fixed').slideUp(1000);
        }
    });

    jQuery('.mobile-toggle').click(function () {
        jQuery('body').toggleClass("mobile-open");
        jQuery('.main-menu').slideToggle();
    });

    jQuery('.slider').slick({
        slidesToShow: 1, // Show 4 items
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: false,
        infinite: false, // Disable infinite loop
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
    });

    jQuery('.wrapper').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
    });

    jQuery('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: false,
    });

    jQuery('.thumbnail-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.main-slider',
        dots: false,
        arrows: false,
        autoplay: true,
        focusOnSelect: true,
        variableWidth: true
    });


    jQuery('.year-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        draggable: true,
        infinite: false,
        focusOnSelect: true,
    });

    jQuery('.year').click(function () {
        jQuery('.year').removeClass('is-active');
        jQuery(this).addClass('is-active');
        var index = jQuery(this).index();
        jQuery('.year-wrapper').slick('slickGoTo', index);
    });

    jQuery('.inner-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // Add click event handlers to navigate through child items
    jQuery('.prev').click(function() {
        jQuery(this).siblings('.slick-slider').slick('slickPrev');
    });

    jQuery('.next').click(function() {
        jQuery(this).siblings('.slick-slider').slick('slickNext');
    });
});



