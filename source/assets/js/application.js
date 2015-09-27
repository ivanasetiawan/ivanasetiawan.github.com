/* Runs when the DOM is loaded. */
$(function() {
	Grid.init();

	////////
	// Menu behaviour
	
	(function( $ ){
		var $window = $(window);

		$.fn.menuBehaviour = function(event) {
			
			return this;
		}; 
	})( jQuery );

	$('.js_menu').menuBehaviour();
		var hamburgerMenu = $(this).find('.menu__hamburger'),
				mainNavList = $(this).find('a');
		
		hamburgerMenu.click(function(event) {
			event.preventDefault();
			$(this).toggleClass('is-active');
			$(this).next('nav[role="navigation"]').toggleClass('active');
		});

	////////
});