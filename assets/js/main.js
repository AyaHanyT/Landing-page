!(function ($) {
    "use strict";

    const text = document.querySelector(".floating-hand");
    window.addEventListener('scroll', showHand);

    showHand();

    function showHand() {
        const triggerBottom = window.innerHeight / 5 * 4;
        const textTop = text.getBoundingClientRect().top;
        if (textTop < triggerBottom) {
            text.classList.add("show");
        }
        else {
            text.classList.remove("show");
        }
    }

    const Floatingpaper = document.querySelector(".paper");
    window.addEventListener('scroll', showPaper);

    showPaper();

    function showPaper() {
        const triggerBottom = window.innerHeight / 5 * 4;
        const textTop = Floatingpaper.getBoundingClientRect().top;
        if (textTop < triggerBottom) {
            Floatingpaper.classList.add("show");
        }
        else {
            Floatingpaper.classList.remove("show");
        }
    }

    const FloatingMan = document.querySelector(".man");
    window.addEventListener('scroll', showMan);

    showMan();

    function showMan() {
        const triggerBottom = window.innerHeight / 5 * 4;
        const textTop = FloatingMan.getBoundingClientRect().top;
        if (textTop < triggerBottom) {
            FloatingMan.classList.add("show");
        }
        else {
            FloatingMan.classList.remove("show");
        }
    }

})(jQuery);


$(document).ready(function () {
    $(".work-samples-theme").owlCarousel({
        rtl: true,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        nav: true,
        navText: ["<i class='fas fa-play'></i>", "<i class='fas fa-play'></i>"],
    });
});

// Mobile Navigation
if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
        class: 'mobile-nav d-lg-none'
    });
    $('nav').append($mobile_nav);
    $('nav').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('fa-times');
        $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('active');
    });

    $(document).click(function (e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-toggle i').toggleClass('fal fa-times');
                $('.mobile-nav-overly').fadeOut();
            }
        }
    });
} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
}


// Smooth scroll for the navigation menu and links with .scrollto classes
var scrolltoOffset = $('header').outerHeight() - 21;
$(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            var scrollto = target.offset().top - scrolltoOffset;
            if ($(this).attr("href") == 'header') {
                scrollto = 0;
            }

            $('html, body').animate({
                scrollTop: scrollto
            }, 100, 'easeInOutExpo');

            if ($(this).parents('.nav-menu, .mobile-nav').length) {
                $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                $(this).closest('li').addClass('active');
            }

            if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-toggle i').toggleClass('fa-times');
                $('.mobile-nav-overly').fadeOut();
            }
            return false;
        }
    }
});

// Activate smooth scroll on page load with hash links in the url
$(document).ready(function () {
    if (window.location.hash) {
        var initial_nav = window.location.hash;
        if ($(initial_nav).length) {
            var scrollto = $(initial_nav).offset().top - scrolltoOffset;
            $('html, body').animate({
                scrollTop: scrollto
            }, 100, 'easeInOutExpo');
        }
    }
});



// Navigation active state on scroll
var nav_sections = $('section');
var main_nav = $('.nav-menu, .mobile-nav');

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function () {
        var top = $(this).offset().top,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            if (cur_pos <= bottom) {
                main_nav.find('li').removeClass('active');
            }
            main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }

    });
});



// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

$('.back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 100, 'easeInOutExpo');
    return false;
});





