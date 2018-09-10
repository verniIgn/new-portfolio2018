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