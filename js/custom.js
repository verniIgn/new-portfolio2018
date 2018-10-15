// SERVICES SECTION

			// ACTIVATING WOW.JS PLUGIN
//below we have the short form of $(document).ready(function (){});
$(function() {
	//animate on scroll
	new WOW().init();
});

			// WORK SECTION

//Activating magnific-popup pluggin
$(function() {
  $("#work").magnificPopup({
  	delegate: 'a', // child items selector, by clicking on it popup will open
  	type: 'image',
  	gallery: {
  		enabled: true
  	}
  });
});

			// TEAM SECTION
$(function() {
	$("#team-members").owlCarousel({
		items: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
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
		autoplayHoverPause: true
	});
});

						// NAVBAR
// this will hide or show navbar according to where we are in the site
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() < 50 ) {
			// hide background color of navbar
			$("nav").removeClass("top-nav");
		} else {
			// show background color of navbar
			$("nav").addClass("top-nav");
		}
	});
});

//smooth scrolling
$(function() {
	$("a.smooth-scrool").click(function(event) {
		event.preventDefault();
		// this will get/return the value of any anchor elem that is clicked
		var section = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(section).offset().top
		}, 1250);

	});
});






































