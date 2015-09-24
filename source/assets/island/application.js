$(document).ready(function(){
	fullScreen();

	smoothScroll();

	$('#accordion').collapse();
});


var fullScreen = function() {

  $(window).on('resize',resizeThrottler);

  var resizeTimeout;
  function resizeThrottler() {
      window.clearTimeout(resizeTimeout);
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      resizeTimeout = setTimeout(function() {
          actualResizeHandler();
          // The actualResizeHandler will execute at a rate of    3,5fps
      }, 244);
  }

  function actualResizeHandler() {
    // handle the resize event
    $(window).trigger({
        type: "Mangrove:resized",
        wHeight: $(window).height(),
        wWidth: $(window).width()
    });
  }

  $(window).on('Mangrove:resized',function(e) {
      $("header").height(e.wHeight); //.width(e.wWidth);
  });
  
  $(window).trigger('resize');
};

var smoothScroll = function() {
  // Smooth scroll
  $(".js_scrollto").on('click', function(e) {
    e.preventDefault();
    var position = $($(this).attr('href')).offset().top;
    $('html, body').animate({scrollTop: position-20}, 400, 'swing');
  });
}