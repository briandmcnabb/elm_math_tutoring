/* Author: Brian McNabb */
jQuery(function ($){

	// Scroll To Internal Links
	$('#masthead nav').localScroll({
		offset: { top: -100 }
	});
	
	// Freeze Nav Bar at Top
	$(document).ready(function () {
	  
		var msie6 = $.browser == 'msie' && $.browser.version < 7;
		
		if (!msie6) {
			var top = $('#masthead nav').offset().top - parseFloat($('#masthead nav').css('marginTop').replace(/auto/,0));
			$(window).scroll(function (event) {
				// what the y position of the scroll is
				var y = $(this).scrollTop();
				console.log(y);
				// whether that's below the form
				if (y >= top) {
					// if so, ad the fixed class
					$('#masthead nav').addClass('fixed');
				} else {
					// otherwise remove it
					$('#masthead nav').removeClass('fixed');
				}
			});
		}  
	});
});


















