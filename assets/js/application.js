/* Runs when the DOM is loaded. */
$(function() {
	if ($('body').hasClass('index')) {
		Grid.init();
	}
	
	////////
	// Menu behaviour
	(function( $ ){
		var $window = $(window);

		$.fn.menuBehaviour = function(event) {
			var hamburgerMenu = $(this).find('.menu__hamburger'),
					mainNavList = $(this).find('a');
			
			hamburgerMenu.click(function(event) {
				event.preventDefault();
				$(this).toggleClass('is-active');
				$(this).next('nav[role="navigation"]').toggleClass('active');
			});
			return this;
		}; 
	})( jQuery );

	$('.js_menu').menuBehaviour();
	////////
});