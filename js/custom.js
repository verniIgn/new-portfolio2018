// SERVICES SECTION

// ACTIVATING WOW.JS PLUGIN
//below we have the short form of $(document).ready(function (){});
$(function() {
    //animate on scroll
    new WOW().init();
});

// TEAM SECTION
$(function() {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0   : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        }
    });
});

// TESTIMONIALS SECTION
$(function() {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

// STATS COUNTER
$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});


// CLIENTS SECTION
$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0   : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 3
            },
            // breakpoint from 768 up
            768 : {
                items: 5
            },
            // breakpoint from 992 up
            992 : {
                items: 6
            }
        }
    });
});

// NAVBAR
// this will hide or show navbar according to where we are in the site
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() < 50) {
            // hide background color of navbar
            $("nav").removeClass("top-nav");
            $("#back-to-top").fadeOut(); 
        } else {
            // show background color of navbar
            $("nav").addClass("top-nav");
            $("#back-to-top").fadeIn(); 
        }
    });
});

//smooth scrolling
$(function() {
    $("a.smooth-scroll").click(function(event) {
        event.preventDefault();
        // this will get/return the value of any anchor elem that is clicked
        var section = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

// Close mobile menu on click
$(function() {
    $(".navbar-collapse ul li a").on("click touch", function() {
        $(".navbar-toggle").click();
    });
});