var $event=$.event,$special,resizeTimeout;$special=$event.special.debouncedresize={setup:function(){$(this).on("resize",$special.handler)},teardown:function(){$(this).off("resize",$special.handler)},handler:function(i,e){var t=this,s=arguments,n=function(){i.type="debouncedresize",$event.dispatch.apply(t,s)};resizeTimeout&&clearTimeout(resizeTimeout),e?n():resizeTimeout=setTimeout(n,$special.threshold)},threshold:250};var BLANK="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";$.fn.imagesLoaded=function(i){function e(){var e=$(o),t=$(d);n&&(d.length?n.reject(h,e,t):n.resolve(h)),$.isFunction(i)&&i.call(s,h,e,t)}function t(i,t){i.src!==BLANK&&-1===$.inArray(i,r)&&(r.push(i),t?d.push(i):o.push(i),$.data(i,"imagesLoaded",{isBroken:t,src:i.src}),a&&n.notifyWith($(i),[t,h,$(o),$(d)]),h.length===r.length&&(setTimeout(e),h.unbind(".imagesLoaded")))}var s=this,n=$.isFunction($.Deferred)?$.Deferred():0,a=$.isFunction(n.notify),h=s.find("img").add(s.filter("img")),r=[],o=[],d=[];return $.isPlainObject(i)&&$.each(i,function(e,t){"callback"===e?i=t:n&&n[e](t)}),h.length?h.bind("load.imagesLoaded error.imagesLoaded",function(i){t(i.target,"error"===i.type)}).each(function(i,e){var s=e.src,n=$.data(e,"imagesLoaded");return n&&n.src===s?void t(e,n.isBroken):e.complete&&void 0!==e.naturalWidth?void t(e,0===e.naturalWidth||0===e.naturalHeight):void((e.readyState||e.complete)&&(e.src=BLANK,e.src=s))}):e(),n?n.promise(s):s};var Grid=function(){function i(i){b=$.extend(!0,{},b,i),l.imagesLoaded(function(){t(!0),a(),s()})}function e(i){c=c.add(i),i.each(function(){var i=$(this);i.data({offsetTop:i.offset().top,height:i.height()})}),n(i)}function t(i){c.each(function(){var e=$(this);e.data("offsetTop",e.offset().top),i&&e.data("height",e.height())})}function s(){n(c),m.on("debouncedresize",function(){p=0,f=-1,t(),a();var i=$.data(this,"preview");"undefined"!=typeof i&&r()})}function n(i){i.on("click","span.og-close",function(){return r(),!1}).children("a").on("click",function(){var i=$(this).parent();return g===i.index()?r():h(i),!1})}function a(){d={width:m.width(),height:m.height()}}function h(i){var e=$.data(this,"preview"),t=i.data("offsetTop");if(p=0,"undefined"!=typeof e){if(f===t)return e.update(i),!1;t>f&&(p=e.height),r()}f=t,e=$.data(this,"preview",new o(i)),e.open()}function r(){g=-1;var i=$.data(this,"preview");i.close(),$.removeData(this,"preview")}function o(i){this.$item=i,this.expandedIdx=this.$item.index(),this.create(),this.update()}var d,l=$("#og-grid"),c=l.children("li"),g=-1,f=-1,p=0,u=10,m=$(window),v=$("html, body"),w={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},A=w[Modernizr.prefixed("transition")],T=Modernizr.csstransitions,b={minHeight:500,speed:350,easing:"ease"};return o.prototype={create:function(){this.$title=$("<h3></h3>"),this.$description=$("<p></p>"),this.$href=$('<a href="#">Visit website</a>'),this.$details=$('<div class="og-details"></div>').append(this.$title,this.$description,this.$href),this.$loading=$('<div class="og-loading"></div>'),this.$fullimage=$('<div class="og-fullimg"></div>').append(this.$loading),this.$closePreview=$('<span class="og-close"></span>'),this.$previewInner=$('<div class="og-expander-inner"></div>').append(this.$closePreview,this.$fullimage,this.$details),this.$previewEl=$('<div class="og-expander"></div>').append(this.$previewInner),this.$item.append(this.getEl()),T&&this.setTransition()},update:function(i){if(i&&(this.$item=i),-1!==g){var e=c.eq(g);e.removeClass("og-expanded"),e.siblings("li").removeClass("is-sibling"),this.$item.addClass("og-expanded"),this.$item.siblings("li").addClass("is-sibling"),this.positionPreview()}g=this.$item.index();var t=this.$item.children("a"),s={href:t.attr("href"),largesrc:t.data("largesrc"),title:t.data("title"),description:t.data("description")};this.$title.html(s.title),this.$description.html(s.description),this.$href.attr("href",s.href);var n=this;"undefined"!=typeof n.$largeImg&&n.$largeImg.remove(),n.$fullimage.is(":visible")&&(this.$loading.show(),$("<img/>").load(function(){var i=$(this);i.attr("src")===n.$item.children("a").data("largesrc")&&(n.$loading.hide(),n.$fullimage.find("img").remove(),n.$largeImg=i.fadeIn(350),n.$fullimage.append(n.$largeImg))}).attr("src",s.largesrc))},open:function(){setTimeout($.proxy(function(){this.setHeights(),this.positionPreview()},this),25)},close:function(){var i=this,e=function(){T&&$(this).off(A),i.$item.removeClass("og-expanded"),i.$item.siblings("li").removeClass("is-sibling"),i.$previewEl.remove()};return setTimeout($.proxy(function(){"undefined"!=typeof this.$largeImg&&this.$largeImg.fadeOut("fast"),this.$previewEl.css("height",0);var i=c.eq(this.expandedIdx);i.css("height",i.data("height")).on(A,e),T||e.call()},this),25),!1},calcHeight:function(){var i=d.height-this.$item.data("height")-u,e=d.height;i<b.minHeight&&(i=b.minHeight,e=b.minHeight+this.$item.data("height")+u),this.height=i,this.itemHeight=e},setHeights:function(){var i=this,e=function(){T&&i.$item.off(A),i.$item.addClass("og-expanded"),i.$item.siblings("li").addClass("is-sibling")};this.calcHeight(),this.$previewEl.css("height",this.height),this.$item.css("height",this.itemHeight).on(A,e),T||e.call()},positionPreview:function(){var i=this.$item.data("offsetTop"),e=this.$previewEl.offset().top-p,t=this.height+this.$item.data("height")+u<=d.height?i:this.height<d.height?e-(d.height-this.height):e;v.animate({scrollTop:t},b.speed)},setTransition:function(){this.$previewEl.css("transition","height "+b.speed+"ms "+b.easing),this.$item.css("transition","height "+b.speed+"ms "+b.easing)},getEl:function(){return this.$previewEl}},{init:i,addItems:e}}();
