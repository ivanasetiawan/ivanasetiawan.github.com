$(document).ready(function(){fullScreen(),smoothScroll(),$("#accordion").collapse()});var fullScreen=function(){function o(){window.clearTimeout(n),n=setTimeout(function(){e()},244)}function e(){$(window).trigger({type:"Mangrove:resized",wHeight:$(window).height(),wWidth:$(window).width()})}$(window).on("resize",o);var n;$(window).on("Mangrove:resized",function(o){$("header").height(o.wHeight)}),$(window).trigger("resize")},smoothScroll=function(){$(".js_scrollto").on("click",function(o){o.preventDefault();var e=$($(this).attr("href")).offset().top;$("html, body").animate({scrollTop:e-20},400,"swing")})};