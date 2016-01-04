/**
 * svgLoader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
!function(t){"use strict";function i(t,i){for(var s in i)i.hasOwnProperty(s)&&(t[s]=i[s]);return t}function s(t,s){this.el=t,this.options=i({},this.options),i(this.options,s),this._init()}s.prototype.options={speedIn:500,easingIn:mina.linear},s.prototype._init=function(){var t=Snap(this.el.querySelector("svg"));this.path=t.select("path"),this.initialPath=this.path.attr("d");var i=this.el.getAttribute("data-opening");if(this.openingSteps=i?i.split(";"):"",this.openingStepsTotal=i?this.openingSteps.length:0,0!==this.openingStepsTotal){var s=this.el.getAttribute("data-closing")?this.el.getAttribute("data-closing"):this.initialPath;this.closingSteps=s?s.split(";"):"",this.closingStepsTotal=s?this.closingSteps.length:0,this.isAnimating=!1,this.options.speedOut||(this.options.speedOut=this.options.speedIn),this.options.easingOut||(this.options.easingOut=this.options.easingIn)}},s.prototype.show=function(){if(this.isAnimating)return!1;this.isAnimating=!0;var t=this,i=function(){classie.addClass(t.el,"pageload-loading")};this._animateSVG("in",i),classie.add(this.el,"show")},s.prototype.hide=function(){var t=this;classie.removeClass(this.el,"pageload-loading"),this._animateSVG("out",function(){t.path.attr("d",t.initialPath),classie.removeClass(t.el,"show"),t.isAnimating=!1})},s.prototype._animateSVG=function(t,i){var s=this,n=0,o="out"===t?this.closingSteps:this.openingSteps,e="out"===t?this.closingStepsTotal:this.openingStepsTotal,a="out"===t?s.options.speedOut:s.options.speedIn,p="out"===t?s.options.easingOut:s.options.easingIn,h=function(t){return t>e-1?void(i&&"function"==typeof i&&i()):(s.path.animate({path:o[t]},a,p,function(){h(t)}),void t++)};h(n)},t.SVGLoader=s}(window);