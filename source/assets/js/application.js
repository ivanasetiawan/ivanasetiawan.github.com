/* Runs when the DOM is loaded. */
$(function() {
  Grid.init();

	////////
	// Menu behaviour
	
	(function( $ ){
		var $window = $(window);
		 $.fn.menuBehaviour = function(event) {
				var menuUrl 				= $(this).find('.menu__main > li > a'),
						mainNavList 		= $(this).find('.menu__main > li'),
						hamburgerMenu 	= $(this).find('.menu__hamburger'),
						closeBtn 				= $(this).find('.menu__close'),
						searchBtn 			= $(this).find('.menu__search > .icon-search');

				menuUrl.click(function(event) {
					event.preventDefault();

					if(!$(this).parents('li').hasClass('show-sub')) {
						mainNavList.removeClass('show-sub');
						$(this).parents('li').addClass('show-sub');
						$('body').addClass('menu-active');
					} else {
						$(this).parents('li').removeClass('show-sub');
						$('body').removeClass('menu-active');
					}

				});

				hamburgerMenu.click(function(event) {
					
					event.preventDefault();

					$(this).parents('.menu').addClass('active');
					$('body').addClass('menu-active');
					$(this).parents('.menu').find('.menu__nav').addClass('show-menu');
				});

				closeBtn.click(function(event) {
					
					event.preventDefault();

					$(this).parents('.menu').removeClass('active');
					$('body').removeClass('menu-active');
					$(this).parents('.menu').find('.menu__nav').removeClass('show-menu');
					$(this).parents('.menu').find('.menu__search').removeClass('show-search');
				});

				searchBtn.click(function(event) {
					event.preventDefault();
					$(this).parents('.menu__search')
						.addClass('show-search')
						.find('input')
						.focus();
				});

				////////
				// Sticky behaviour

				var getScrollPosition = $(this).outerHeight(),
						getWidth = $(this).outerWidth(),
						getPositionleft = $(this).offset().left;

				$window.scroll(function(event) {
					if ($(this).scrollTop() >= getScrollPosition) {
						$('.js_menu').addClass('is-sticky');
						$('body').css({
							'padding-top': getScrollPosition
						});
						$('.js_menu').css({
							'width': getWidth,
							'left': getPositionleft
						});
					} else {
						$('.js_menu').removeClass('is-sticky');
						$('body').css({
							'padding-top': 0
						});
						$('.js_menu').css({
							'width': 'auto',
							'left': 0
						});
					}
				});

				$window.on('resize', function() {
					getWidth = $('.site-wrapper').outerWidth(),
					getPositionleft = $('.site-wrapper').offset().left;

					if ($(this).scrollTop() >= getScrollPosition) {
						$('.js_menu').css({
							'width': getWidth,
							'left': getPositionleft
						});
					} else {
						$('.js_menu').css({
							'width': 'auto',
							'left': 0
						});
					}
				});
				////////

				return this;
		 }; 
	})( jQuery );

	$('.js_menu').menuBehaviour();

	////////
});