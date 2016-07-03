/*
Copyright 2012 Igor Vaynberg

Version: @@ver@@ Timestamp: @@timestamp@@

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

    http://www.apache.org/licenses/LICENSE-2.0
    http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the
Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
the specific language governing permissions and limitations under the Apache License and the GPL License.
*/

(function(e){"function"===typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e,g){function p(a,b){var c=0,d=b.length,k;if("undefined"===typeof a)return-1;if(a.constructor===String)for(;c<d;c+=1){if(0===a.localeCompare(b[c]))return c}else for(;c<d;c+=1)if(k=b[c],k.constructor===String){if(0===k.localeCompare(a))return c}else if(k===a)return c;return-1}function w(a,b){return a===b?!0:a===g||b===g||null===a||null===b?!1:a.constructor===String?0===a.localeCompare(b):b.constructor===String?
0===b.localeCompare(a):!1}function E(a,b){var c,d,k;if(null===a||1>a.length)return[];c=a.split(b);d=0;for(k=c.length;d<k;d+=1)c[d]=e.trim(c[d]);return c}function N(a){a.bind("keydown",function(){e.data(a,"keyup-change-value")===g&&e.data(a,"keyup-change-value",a.val())});a.bind("keyup",function(){var b=e.data(a,"keyup-change-value");b!==g&&a.val()!==b&&(e.removeData(a,"keyup-change-value"),a.trigger("keyup-change"))})}function O(a){a.bind("mousemove",function(a){var c=F;c!==g&&c.x===a.pageX&&c.y===
a.pageY||e(a.target).trigger("mousemove-filtered",a)})}function G(a,b,c){c=c||g;var d;return function(){var k=arguments;window.clearTimeout(d);d=window.setTimeout(function(){b.apply(c,k)},a)}}function P(a){var b=!1,c;return function(){!1===b&&(c=a(),b=!0);return c}}function Q(a,b){var c=G(a,function(a){b.trigger("scroll-debounced",a)});b.bind("scroll",function(a){0<=p(a.target,b.get())&&c(a)})}function h(a){a.preventDefault();a.stopPropagation()}function H(a,b,c){var d=a.toUpperCase().indexOf(b.toUpperCase());
b=b.length;0>d?c.push(a):(c.push(a.substring(0,d)),c.push("\x3cspan class\x3d'select2-match'\x3e"),c.push(a.substring(d,d+b)),c.push("\x3c/span\x3e"),c.push(a.substring(d+b,a.length)))}function I(a){var b,c=0,d=null,k=a.quietMillis||100;return function(m){window.clearTimeout(b);b=window.setTimeout(function(){var b=c+=1,k=a.data,g=a.transport||e.ajax,f=a.traditional||!1,R=a.type||"GET",k=k.call(this,m.term,m.page,m.context);null!==d&&d.abort();d=g.call(null,{url:a.url,dataType:a.dataType,data:k,type:R,
traditional:f,success:function(d){b<c||(d=a.results(d,m.page),m.callback(d))}})},k)}}function J(a){var b=a,c,d=function(a){return""+a.text};e.isArray(b)||(d=b.text,e.isFunction(d)||(c=b.text,d=function(a){return a[c]}),b=b.results);return function(a){var c=a.term,l={results:[]},g;""===c?a.callback({results:b}):(g=function(b,l){var f,h;b=b[0];if(b.children){f={};for(h in b)b.hasOwnProperty(h)&&(f[h]=b[h]);f.children=[];e(b.children).each2(function(a,b){g(b,f.children)});(f.children.length||a.matcher(c,
d(f)))&&l.push(f)}else a.matcher(c,d(b))&&l.push(b)},e(b).each2(function(a,b){g(b,l.results)}),a.callback(l))}}function K(a){return e.isFunction(a)?a:function(b){var c=b.term,d={results:[]};e(a).each(function(){var a=this.text!==g,e=a?this.text:this;(""===c||b.matcher(c,e))&&d.results.push(a?this:{id:this,text:this})});b.callback(d)}}function y(a,b){if(e.isFunction(a))return!0;if(!a)return!1;throw Error("formatterName must be a function or a falsy value");}function z(a){return e.isFunction(a)?a():
a}function L(a){var b=0;e.each(a,function(a,d){d.children?b+=L(d.children):b++});return b}function S(a,b,c,d){var k=a,e,l,f,q,n;if(!d.createSearchChoice||!d.tokenSeparators||1>d.tokenSeparators.length)return g;for(;;){e=-1;f=0;for(q=d.tokenSeparators.length;f<q&&!(n=d.tokenSeparators[f],e=a.indexOf(n),0<=e);f++);if(0>e)break;l=a.substring(0,e);a=a.substring(e+n.length);if(0<l.length&&(l=d.createSearchChoice(l,b),l!==g&&null!==l&&d.id(l)!==g&&null!==d.id(l))){e=!1;f=0;for(q=b.length;f<q;f++)if(w(d.id(l),
d.id(b[f]))){e=!0;break}e||c(l)}}if(0!=k.localeCompare(a))return a}function B(a,b){var c=function(){};c.prototype=new a;c.prototype.constructor=c;c.prototype.parent=a.prototype;c.prototype=e.extend(c.prototype,b);return c}"undefined"==typeof e.fn.each2&&e.fn.extend({each2:function(a){for(var b=e([0]),c=-1,d=this.length;++c<d&&(b.context=b[0]=this[c])&&!1!==a.call(b[0],c,b););return this}});"use strict";if(window.Select2===g){var f,A,C,D,M,x,F,r;f={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,
DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(a){a=a.which?a.which:a;switch(a){case f.LEFT:case f.RIGHT:case f.UP:case f.DOWN:return!0}return!1},isControl:function(a){switch(a.which){case f.SHIFT:case f.CTRL:case f.ALT:return!0}return a.metaKey?!0:!1},isFunctionKey:function(a){a=a.which?a.which:a;return 112<=a&&123>=a}};r=e(document);M=function(){var a=1;return function(){return a++}}();r.bind("mousemove",function(a){F={x:a.pageX,y:a.pageY}});
r.ready(function(){r.bind("mousedown touchend",function(a){var b=e(a.target).closest("div.select2-container").get(0),c;b?r.find("div.select2-container-active").each(function(){this!==b&&e(this).data("select2").blur()}):(b=e(a.target).closest("div.select2-drop").get(0),r.find("div.select2-drop-active").each(function(){this!==b&&e(this).data("select2").blur()}));b=e(a.target);c=b.attr("for");"LABEL"===a.target.tagName&&c&&0<c.length&&(c=c.replace(/([\[\].])/g,"\\$1"),b=e("#"+c),b=b.data("select2"),
b!==g&&(b.focus(),a.preventDefault()))})});A=B(Object,{bind:function(a){var b=this;return function(){a.apply(b,arguments)}},init:function(a){var b,c;this.opts=a=this.prepareOpts(a);this.id=a.id;a.element.data("select2")!==g&&null!==a.element.data("select2")&&this.destroy();this.enabled=!0;this.container=this.createContainer();this.containerId="s2id_"+(a.element.attr("id")||"autogen"+M());this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1");this.container.attr("id",
this.containerId);this.body=P(function(){return a.element.closest("body")});a.element.attr("class")!==g&&this.container.addClass(a.element.attr("class").replace(/validate\[[\S ]+] ?/,""));this.container.css(z(a.containerCss));this.container.addClass(z(a.containerCssClass));this.opts.element.data("select2",this).hide().before(this.container);this.container.data("select2",this);this.dropdown=this.container.find(".select2-drop");this.dropdown.addClass(z(a.dropdownCssClass));this.dropdown.data("select2",
this);this.results=b=this.container.find(".select2-results");this.search=c=this.container.find("input.select2-input");c.attr("tabIndex",this.opts.element.attr("tabIndex"));this.resultsPage=0;this.context=null;this.initContainer();this.initContainerWidth();O(this.results);this.dropdown.delegate(".select2-results","mousemove-filtered",this.bind(this.highlightUnderEvent));Q(80,this.results);this.dropdown.delegate(".select2-results","scroll-debounced",this.bind(this.loadMoreIfNeeded));e.fn.mousewheel&&
b.mousewheel(function(a,c,e,f){c=b.scrollTop();0<f&&0>=c-f?(b.scrollTop(0),h(a)):0>f&&b.get(0).scrollHeight-b.scrollTop()+f<=b.height()&&(b.scrollTop(b.get(0).scrollHeight-b.height()),h(a))});N(c);c.bind("keyup-change",this.bind(this.updateResults));c.bind("focus",function(){c.addClass("select2-focused");" "===c.val()&&c.val("")});c.bind("blur",function(){c.removeClass("select2-focused")});this.dropdown.delegate(".select2-results","mouseup",this.bind(function(a){0<e(a.target).closest(".select2-result-selectable:not(.select2-disabled)").length?
(this.highlightUnderEvent(a),this.selectHighlighted(a)):this.focusSearch();h(a)}));this.dropdown.bind("click mouseup mousedown",function(a){a.stopPropagation()});e.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource());(a.element.is(":disabled")||a.element.is("[readonly\x3d'readonly']"))&&this.disable()},destroy:function(){var a=this.opts.element.data("select2");a!==g&&(a.container.remove(),a.dropdown.remove(),a.opts.element.removeData("select2").unbind(".select2").show())},
prepareOpts:function(a){var b,c,d;b=a.element;"select"===b.get(0).tagName.toLowerCase()&&(this.select=c=a.element);c&&e.each("id multiple ajax query createSearchChoice initSelection data tags".split(" "),function(){if(this in a)throw Error("Option '"+this+"' is not allowed for Select2 when attached to a \x3cselect\x3e element.");});a=e.extend({},{populateResults:function(b,c,d){var f,q=this.opts.id,n=this;f=function(b,c,k){var m,h,u,p,v,t,r;m=0;for(h=b.length;m<h;m+=1)u=b[m],p=q(u)!==g,v=u.children&&
0<u.children.length,t=e("\x3cli\x3e\x3c/li\x3e"),t.addClass("select2-results-dept-"+k),t.addClass("select2-result"),t.addClass(p?"select2-result-selectable":"select2-result-unselectable"),v&&t.addClass("select2-result-with-children"),t.addClass(n.opts.formatResultCssClass(u)),p=e("\x3cdiv\x3e\x3c/div\x3e"),p.addClass("select2-result-label"),r=a.formatResult(u,p,d),r!==g&&p.html(n.opts.escapeMarkup(r)),t.append(p),v&&(v=e("\x3cul\x3e\x3c/ul\x3e"),v.addClass("select2-result-sub"),f(u.children,v,k+1),
t.append(v)),t.data("select2-data",u),c.append(t)};f(c,b,0)}},e.fn.select2.defaults,a);"function"!==typeof a.id&&(d=a.id,a.id=function(a){return a[d]});c?(a.query=this.bind(function(a){var c={results:[],more:!1},d=a.term,f,q,n;n=function(b,c){var e;b.is("option")?a.matcher(d,b.text(),b)&&c.push({id:b.attr("value"),text:b.text(),element:b.get(),css:b.attr("class")}):b.is("optgroup")&&(e={text:b.attr("label"),children:[],element:b.get(),css:b.attr("class")},b.children().each2(function(a,b){n(b,e.children)}),
0<e.children.length&&c.push(e))};f=b.children();this.getPlaceholder()!==g&&0<f.length&&(q=f[0],""===e(q).text()&&(f=f.not(q)));f.each2(function(a,b){n(b,c.results)});a.callback(c)}),a.id=function(a){return a.id},a.formatResultCssClass=function(a){return a.css}):"query"in a||("ajax"in a?((c=a.element.data("ajax-url"))&&0<c.length&&(a.ajax.url=c),a.query=I(a.ajax)):"data"in a?a.query=J(a.data):"tags"in a&&(a.query=K(a.tags),a.createSearchChoice===g&&(a.createSearchChoice=function(a){return{id:a,text:a}}),
a.initSelection=function(b,c){var d=[];e(E(b.val(),a.separator)).each(function(){var b=this,c=this,k=a.tags;e.isFunction(k)&&(k=k());e(k).each(function(){if(w(this.id,b))return c=this.text,!1});d.push({id:b,text:c})});c(d)}));if("function"!==typeof a.query)throw"query function not defined for Select2 "+a.element.attr("id");return a},monitorSource:function(){this.opts.element.bind("change.select2",this.bind(function(a){!0!==this.opts.element.data("select2-change-triggered")&&this.initSelection()}))},
triggerChange:function(a){a=a||{};a=e.extend({},a,{type:"change",val:this.val()});this.opts.element.data("select2-change-triggered",!0);this.opts.element.trigger(a);this.opts.element.data("select2-change-triggered",!1);this.opts.element.click();this.opts.blurOnChange&&this.opts.element.blur()},enable:function(){this.enabled||(this.enabled=!0,this.container.removeClass("select2-container-disabled"),this.opts.element.removeAttr("disabled"))},disable:function(){this.enabled&&(this.close(),this.enabled=
!1,this.container.addClass("select2-container-disabled"),this.opts.element.attr("disabled","disabled"))},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var a=this.container.offset(),b=this.container.outerHeight(!1),c=this.container.outerWidth(!1),d=this.dropdown.outerHeight(!1),k=e(window).scrollLeft()+document.documentElement.clientWidth,f=e(window).scrollTop()+document.documentElement.clientHeight,b=a.top+b,g=a.left,f=b+d<=f,h=a.top-d>=this.body().scrollTop(),
q=this.dropdown.outerWidth(!1),k=g+q<=k,n=this.dropdown.hasClass("select2-drop-above"),p;"static"!==this.body().css("position")&&(p=this.body().offset(),b-=p.top,g-=p.left);n?(n=!0,!h&&f&&(n=!1)):(n=!1,!f&&h&&(n=!0));k||(g=a.left+c-q);n?(b=a.top-d,this.container.addClass("select2-drop-above"),this.dropdown.addClass("select2-drop-above")):(this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above"));a=e.extend({top:b,left:g,width:c},z(this.opts.dropdownCss));this.dropdown.css(a)},
shouldOpen:function(){var a;if(this.opened())return!1;a=e.Event("open");this.opts.element.trigger(a);return!a.isDefaultPrevented()},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above");this.dropdown.removeClass("select2-drop-above")},open:function(){if(!this.shouldOpen())return!1;window.setTimeout(this.bind(this.opening),1);return!0},opening:function(){var a=this.containerId,b=this.containerSelector,c="scroll."+a,d="resize."+a;this.container.parents().each(function(){e(this).bind(c,
function(){var a=e(b);0==a.length&&e(this).unbind(c);a.select2("close")})});window.setTimeout(function(){e(window).bind(d,function(){var a=e(b);0==a.length&&e(window).unbind(d);a.select2("close")})},10);this.clearDropdownAlignmentPreference();" "===this.search.val()&&this.search.val("");this.container.addClass("select2-dropdown-open").addClass("select2-container-active");this.updateResults(!0);this.dropdown[0]!==this.body().children().last()[0]&&this.dropdown.detach().appendTo(this.body());this.dropdown.show();
this.positionDropdown();this.dropdown.addClass("select2-drop-active");this.ensureHighlightVisible();this.focusSearch()},close:function(){if(this.opened()){var a=this;this.container.parents().each(function(){e(this).unbind("scroll."+a.containerId)});e(window).unbind("resize."+this.containerId);this.clearDropdownAlignmentPreference();this.dropdown.hide();this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");this.results.empty();this.clearSearch();this.opts.element.trigger(e.Event("close"))}},
clearSearch:function(){},ensureHighlightVisible:function(){var a=this.results,b,c,d,k;c=this.highlight();0>c||(0==c?a.scrollTop(0):(b=a.find(".select2-result-selectable"),d=e(b[c]),k=d.offset().top+d.outerHeight(!0),c===b.length-1&&(b=a.find("li.select2-more-results"),0<b.length&&(k=b.offset().top+b.outerHeight(!0))),b=a.offset().top+a.outerHeight(!0),k>b&&a.scrollTop(a.scrollTop()+(k-b)),k=d.offset().top-a.offset().top,0>k&&"none"!=d.css("display")&&a.scrollTop(a.scrollTop()+k)))},moveHighlight:function(a){for(var b=
this.results.find(".select2-result-selectable"),c=this.highlight();-1<c&&c<b.length;){var c=c+a,d=e(b[c]);if(d.hasClass("select2-result-selectable")&&!d.hasClass("select2-disabled")){this.highlight(c);break}}},highlight:function(a){var b=this.results.find(".select2-result-selectable").not(".select2-disabled");if(0===arguments.length)return p(b.filter(".select2-highlighted")[0],b.get());a>=b.length&&(a=b.length-1);0>a&&(a=0);b.removeClass("select2-highlighted");e(b[a]).addClass("select2-highlighted");
this.ensureHighlightVisible()},countSelectableResults:function(){return this.results.find(".select2-result-selectable").not(".select2-disabled").length},highlightUnderEvent:function(a){a=e(a.target).closest(".select2-result-selectable");if(0<a.length&&!a.is(".select2-highlighted")){var b=this.results.find(".select2-result-selectable");this.highlight(b.index(a))}else 0==a.length&&this.results.find(".select2-highlighted").removeClass("select2-highlighted")},loadMoreIfNeeded:function(){var a=this.results,
b=a.find("li.select2-more-results"),c,d=this.resultsPage+1,e=this,f=this.search.val(),g=this.context;0!==b.length&&(c=b.offset().top-a.offset().top-a.height(),0>=c&&(b.addClass("select2-active"),this.opts.query({term:f,page:d,context:g,matcher:this.opts.matcher,callback:this.bind(function(c){e.opened()&&(e.opts.populateResults.call(this,a,c.results,{term:f,page:d,context:g}),!0===c.more?(b.detach().appendTo(a).text(e.opts.formatLoadMore(d+1)),window.setTimeout(function(){e.loadMoreIfNeeded()},10)):
b.remove(),e.positionDropdown(),e.resultsPage=d)})})))},tokenize:function(){},updateResults:function(a){function b(){f.scrollTop(0);d.removeClass("select2-active");h.positionDropdown()}function c(a){f.html(h.opts.escapeMarkup(a));b()}var d=this.search,f=this.results,m=this.opts,l,h=this;if(!0===a||!1!==this.showSearchInput&&this.opened()){d.addClass("select2-active");if(1<=m.maximumSelectionSize&&(l=this.data(),e.isArray(l)&&l.length>=m.maximumSelectionSize&&y(m.formatSelectionTooBig,"formatSelectionTooBig"))){c("\x3cli class\x3d'select2-selection-limit'\x3e"+
m.formatSelectionTooBig(m.maximumSelectionSize)+"\x3c/li\x3e");return}d.val().length<m.minimumInputLength?y(m.formatInputTooShort,"formatInputTooShort")?c("\x3cli class\x3d'select2-no-results'\x3e"+m.formatInputTooShort(d.val(),m.minimumInputLength)+"\x3c/li\x3e"):c(""):(m.formatSearching()&&c("\x3cli class\x3d'select2-searching'\x3e"+m.formatSearching()+"\x3c/li\x3e"),l=this.tokenize(),l!=g&&null!=l&&d.val(l),this.resultsPage=1,m.query({term:d.val(),page:this.resultsPage,context:null,matcher:m.matcher,
callback:this.bind(function(l){var n;this.opened()&&(this.context=l.context===g?null:l.context,this.opts.createSearchChoice&&""!==d.val()&&(n=this.opts.createSearchChoice.call(null,d.val(),l.results),n!==g&&null!==n&&h.id(n)!==g&&null!==h.id(n)&&0===e(l.results).filter(function(){return w(h.id(this),h.id(n))}).length&&l.results.unshift(n)),0===l.results.length&&y(m.formatNoMatches,"formatNoMatches")?c("\x3cli class\x3d'select2-no-results'\x3e"+m.formatNoMatches(d.val())+"\x3c/li\x3e"):(f.empty(),
h.opts.populateResults.call(this,f,l.results,{term:d.val(),page:this.resultsPage,context:null}),!0===l.more&&y(m.formatLoadMore,"formatLoadMore")&&(f.append("\x3cli class\x3d'select2-more-results'\x3e"+h.opts.escapeMarkup(m.formatLoadMore(this.resultsPage))+"\x3c/li\x3e"),window.setTimeout(function(){h.loadMoreIfNeeded()},10)),this.postprocessResults(l,a),b()))})}))}},cancel:function(){this.close()},blur:function(){this.close();this.container.removeClass("select2-container-active");this.dropdown.removeClass("select2-drop-active");
this.search[0]===document.activeElement&&this.search.blur();this.clearSearch();this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");this.opts.element.triggerHandler("blur")},focusSearch:function(){this.search.show();this.search.focus();window.setTimeout(this.bind(function(){this.search.show();this.search.focus();this.search.val(this.search.val())}),10)},selectHighlighted:function(){var a=this.highlight(),b=this.results.find(".select2-highlighted").not(".select2-disabled"),
c=b.closest(".select2-result-selectable").data("select2-data");c&&(b.addClass("select2-disabled"),this.highlight(a),this.onSelect(c))},getPlaceholder:function(){return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder},initContainerWidth:function(){var a=function(){var a,c,d,f;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+
"px";if("copy"===this.opts.width||"resolve"===this.opts.width){a=this.opts.element.attr("style");if(a!==g)for(a=a.split(";"),d=0,f=a.length;d<f;d+=1)if(c=a[d].replace(/\s/g,"").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/),null!==c&&1<=c.length)return c[1];return"resolve"===this.opts.width?(a=this.opts.element.css("width"),0<a.indexOf("%")?a:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null}return e.isFunction(this.opts.width)?this.opts.width():
this.opts.width}.call(this);null!==a&&this.container.attr("style","width: "+a)}});C=B(A,{createContainer:function(){return e("\x3cdiv\x3e\x3c/div\x3e",{"class":"select2-container"}).html("    \x3ca href\x3d'javascript:void(0)' onclick\x3d'return false;' class\x3d'select2-choice'\x3e   \x3cspan\x3e\x3c/span\x3e\x3cabbr class\x3d'select2-search-choice-close' style\x3d'display:none;'\x3e\x3c/abbr\x3e   \x3cdiv\x3e\x3cb\x3e\x3c/b\x3e\x3c/div\x3e\x3c/a\x3e    \x3cdiv class\x3d'select2-drop select2-offscreen'\x3e   \x3cdiv class\x3d'select2-search'\x3e       \x3cinput type\x3d'text' autocomplete\x3d'off' class\x3d'select2-input'/\x3e   \x3c/div\x3e   \x3cul class\x3d'select2-results'\x3e   \x3c/ul\x3e\x3c/div\x3e")},
opening:function(){this.search.show();this.parent.opening.apply(this,arguments);this.dropdown.removeClass("select2-offscreen")},close:function(){this.opened()&&(this.parent.close.apply(this,arguments),this.dropdown.removeAttr("style").addClass("select2-offscreen").insertAfter(this.selection).show())},focus:function(){this.close();this.selection.focus()},isFocused:function(){return this.selection[0]===document.activeElement},cancel:function(){this.parent.cancel.apply(this,arguments);this.selection.focus()},
initContainer:function(){var a,b=this.dropdown;this.selection=a=this.container.find(".select2-choice");this.search.bind("keydown",this.bind(function(a){if(this.enabled)if(a.which===f.PAGE_UP||a.which===f.PAGE_DOWN)h(a);else if(this.opened())switch(a.which){case f.UP:case f.DOWN:this.moveHighlight(a.which===f.UP?-1:1);h(a);break;case f.TAB:case f.ENTER:this.selectHighlighted();h(a);break;case f.ESC:this.cancel(a),h(a)}else a.which===f.TAB||f.isControl(a)||f.isFunctionKey(a)||a.which===f.ESC||!1===
this.opts.openOnEnter&&a.which===f.ENTER||this.open()}));this.search.bind("focus",this.bind(function(){this.selection.attr("tabIndex","-1")}));this.search.bind("blur",this.bind(function(){this.opened()||this.container.removeClass("select2-container-active");window.setTimeout(this.bind(function(){var a=this.opts.element.attr("tabIndex");a?this.selection.attr("tabIndex",a):this.selection.removeAttr("tabIndex")}),10)}));a.delegate("abbr","mousedown",this.bind(function(a){this.enabled&&(this.clear(),
a.preventDefault(),a.stopImmediatePropagation(),this.close(),this.triggerChange(),this.selection.focus())}));a.bind("mousedown",this.bind(function(a){this.opened()?(this.close(),this.selection.focus()):this.enabled&&this.open()}));b.bind("mousedown",this.bind(function(){this.search.focus()}));a.bind("focus",this.bind(function(){this.container.addClass("select2-container-active");this.search.attr("tabIndex","-1")}));a.bind("blur",this.bind(function(){this.opened()||this.container.removeClass("select2-container-active");
window.setTimeout(this.bind(function(){this.search.attr("tabIndex",this.opts.element.attr("tabIndex"))}),10)}));a.bind("keydown",this.bind(function(a){if(this.enabled)if(a.which==f.DOWN||a.which==f.UP||a.which==f.ENTER&&this.opts.openOnEnter)this.open(),h(a);else if(a.which==f.DELETE||a.which==f.BACKSPACE)this.opts.allowClear&&this.clear(),h(a)}));a.bind("keypress",this.bind(function(a){a=String.fromCharCode(a.which);this.search.val(a);this.open()}));this.setPlaceholder();this.search.bind("focus",
this.bind(function(){this.container.addClass("select2-container-active")}))},clear:function(){this.opts.element.val("");this.selection.find("span").empty();this.selection.removeData("select2-data");this.setPlaceholder()},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text())this.close(),this.setPlaceholder();else{var a=this;this.opts.initSelection.call(null,this.opts.element,function(b){b!==g&&null!==b&&(a.updateSelection(b),a.close(),a.setPlaceholder())})}},prepareOpts:function(){var a=
this.parent.prepareOpts.apply(this,arguments);"select"===a.element.get(0).tagName.toLowerCase()&&(a.initSelection=function(a,c){var d=a.find(":selected");e.isFunction(c)&&c({id:d.attr("value"),text:d.text(),element:d})});return a},setPlaceholder:function(){var a=this.getPlaceholder();""!==this.opts.element.val()||a===g||this.select&&""!==this.select.find("option:first").text()||(this.selection.find("span").html(this.opts.escapeMarkup(a)),this.selection.addClass("select2-default"),this.selection.find("abbr").hide())},
postprocessResults:function(a,b){var c=0,d=this,f=!0;this.results.find(".select2-result-selectable").each2(function(a,b){if(w(d.id(b.data("select2-data")),d.opts.element.val()))return c=a,!1});this.highlight(c);!0===b&&(f=this.showSearchInput=L(a.results)>=this.opts.minimumResultsForSearch,this.dropdown.find(".select2-search")[f?"removeClass":"addClass"]("select2-search-hidden"),e(this.dropdown,this.container)[f?"addClass":"removeClass"]("select2-with-searchbox"))},onSelect:function(a){var b=this.opts.element.val();
this.opts.element.val(this.id(a));this.updateSelection(a);this.close();this.selection.focus();w(b,this.id(a))||this.triggerChange()},updateSelection:function(a){var b=this.selection.find("span");this.selection.data("select2-data",a);b.empty();a=this.opts.formatSelection(a,b);a!==g&&b.append(this.opts.escapeMarkup(a));this.selection.removeClass("select2-default");this.opts.allowClear&&this.getPlaceholder()!==g&&this.selection.find("abbr").show()},val:function(){var a,b=null,c=this;if(0===arguments.length)return this.opts.element.val();
a=arguments[0];if(this.select)this.select.val(a).find(":selected").each2(function(a,c){b={id:c.attr("value"),text:c.text()};return!1}),this.updateSelection(b),this.setPlaceholder();else{if(this.opts.initSelection===g)throw Error("cannot call val() if initSelection() is not defined");a?(this.opts.element.val(a),this.opts.initSelection(this.opts.element,function(a){c.opts.element.val(a?c.id(a):"");c.updateSelection(a);c.setPlaceholder()})):this.clear()}},clearSearch:function(){this.search.val("")},
data:function(a){var b;if(0===arguments.length)return b=this.selection.data("select2-data"),b==g&&(b=null),b;a&&""!==a?(this.opts.element.val(a?this.id(a):""),this.updateSelection(a)):this.clear()}});D=B(A,{createContainer:function(){return e("\x3cdiv\x3e\x3c/div\x3e",{"class":"select2-container select2-container-multi"}).html("    \x3cul class\x3d'select2-choices'\x3e  \x3cli class\x3d'select2-search-field'\x3e    \x3cinput type\x3d'text' autocomplete\x3d'off' class\x3d'select2-input'\x3e  \x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'select2-drop select2-drop-multi' style\x3d'display:none;'\x3e   \x3cul class\x3d'select2-results'\x3e   \x3c/ul\x3e\x3c/div\x3e")},
prepareOpts:function(){var a=this.parent.prepareOpts.apply(this,arguments);"select"===a.element.get(0).tagName.toLowerCase()&&(a.initSelection=function(a,c){var d=[];a.find(":selected").each2(function(a,b){d.push({id:b.attr("value"),text:b.text(),element:b})});e.isFunction(c)&&c(d)});return a},initContainer:function(){var a;this.searchContainer=this.container.find(".select2-search-field");this.selection=a=this.container.find(".select2-choices");this.search.bind("keydown",this.bind(function(b){if(this.enabled){if(b.which===
f.BACKSPACE&&""===this.search.val()){this.close();var c;c=a.find(".select2-search-choice-focus");if(0<c.length){this.unselect(c.first());this.search.width(10);h(b);return}c=a.find(".select2-search-choice:not(.select2-locked)");0<c.length&&c.last().addClass("select2-search-choice-focus")}else a.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");if(this.opened())switch(b.which){case f.UP:case f.DOWN:this.moveHighlight(b.which===f.UP?-1:1);h(b);return;case f.ENTER:case f.TAB:this.selectHighlighted();
h(b);return;case f.ESC:this.cancel(b);h(b);return}b.which===f.TAB||f.isControl(b)||f.isFunctionKey(b)||b.which===f.BACKSPACE||b.which===f.ESC||!1===this.opts.openOnEnter&&b.which===f.ENTER||(this.open(),b.which!==f.PAGE_UP&&b.which!==f.PAGE_DOWN||h(b))}}));this.search.bind("keyup",this.bind(this.resizeSearch));this.search.bind("blur",this.bind(function(a){this.container.removeClass("select2-container-active");this.search.removeClass("select2-focused");this.clearSearch();a.stopImmediatePropagation()}));
this.container.delegate(".select2-choices","mousedown",this.bind(function(a){!this.enabled||0<e(a.target).closest(".select2-search-choice").length||(this.clearPlaceholder(),this.open(),this.focusSearch(),a.preventDefault())}));this.container.delegate(".select2-choices","focus",this.bind(function(){this.enabled&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())}));this.clearSearch()},enable:function(){this.enabled||(this.parent.enable.apply(this,
arguments),this.search.removeAttr("disabled"))},disable:function(){this.enabled&&(this.parent.disable.apply(this,arguments),this.search.attr("disabled",!0))},initSelection:function(){""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch());if(this.select||""!==this.opts.element.val()){var a=this;this.opts.initSelection.call(null,this.opts.element,function(b){b!==g&&null!==b&&(a.updateSelection(b),a.close(),a.clearSearch())})}},clearSearch:function(){var a=
this.getPlaceholder();a!==g&&0===this.getVal().length&&!1===this.search.hasClass("select2-focused")?(this.search.val(a).addClass("select2-default"),this.resizeSearch()):this.search.val(" ").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")?this.search.val("").removeClass("select2-default"):" "===this.search.val()&&this.search.val("")},opening:function(){this.parent.opening.apply(this,arguments);this.clearPlaceholder();this.resizeSearch();this.focusSearch()},close:function(){this.opened()&&
this.parent.close.apply(this,arguments)},focus:function(){this.close();this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(a){var b=[],c=[],d=this;e(a).each(function(){0>p(d.id(this),b)&&(b.push(d.id(this)),c.push(this))});a=c;this.selection.find(".select2-search-choice").remove();e(a).each(function(){d.addSelectedChoice(this)});d.postprocessResults()},tokenize:function(){var a=this.search.val(),a=this.opts.tokenizer(a,this.data(),this.bind(this.onSelect),
this.opts);null!=a&&a!=g&&(this.search.val(a),0<a.length&&this.open())},onSelect:function(a){this.addSelectedChoice(a);!this.select&&this.opts.closeOnSelect||this.postprocessResults();this.opts.closeOnSelect?(this.close(),this.search.width(10)):0<this.countSelectableResults()?(this.search.width(10),this.resizeSearch(),this.positionDropdown()):this.close();this.triggerChange({added:a});this.focusSearch()},cancel:function(){this.close();this.focusSearch()},addSelectedChoice:function(a){var b=!a.locked,
c=e("\x3cli class\x3d'select2-search-choice'\x3e    \x3cdiv\x3e\x3c/div\x3e    \x3ca href\x3d'#' onclick\x3d'return false;' class\x3d'select2-search-choice-close' tabindex\x3d'-1'\x3e\x3c/a\x3e\x3c/li\x3e"),d=e("\x3cli class\x3d'select2-search-choice select2-locked'\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/li\x3e"),c=b?c:d,d=this.id(a),f=this.getVal(),m;m=this.opts.formatSelection(a,c.find("div"));m!=g&&c.find("div").replaceWith("\x3cdiv\x3e"+this.opts.escapeMarkup(m)+"\x3c/div\x3e");b&&c.find(".select2-search-choice-close").bind("mousedown",
h).bind("click dblclick",this.bind(function(a){this.enabled&&(e(a.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){this.unselect(e(a.target));this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");this.close();this.focusSearch()})).dequeue(),h(a))})).bind("focus",this.bind(function(){this.enabled&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))}));c.data("select2-data",a);c.insertBefore(this.searchContainer);
f.push(d);this.setVal(f)},unselect:function(a){var b=this.getVal(),c,d;a=a.closest(".select2-search-choice");if(0===a.length)throw"Invalid argument: "+a+". Must be .select2-search-choice";c=a.data("select2-data");d=p(this.id(c),b);0<=d&&(b.splice(d,1),this.setVal(b),this.select&&this.postprocessResults());a.remove();this.triggerChange({removed:c})},postprocessResults:function(){var a=this.getVal(),b=this.results.find(".select2-result-selectable"),c=this.results.find(".select2-result-with-children"),
d=this;b.each2(function(b,c){var e=d.id(c.data("select2-data"));0<=p(e,a)?c.addClass("select2-disabled").removeClass("select2-result-selectable"):c.removeClass("select2-disabled").addClass("select2-result-selectable")});c.each2(function(a,b){b.is(".select2-result-selectable")||0!=b.find(".select2-result-selectable").length?b.removeClass("select2-disabled"):b.addClass("select2-disabled")});-1==this.highlight()&&b.each2(function(a,b){if(!b.hasClass("select2-disabled")&&b.hasClass("select2-result-selectable"))return d.highlight(0),
!1})},resizeSearch:function(){var a,b,c,d,f;f=this.search;f=f.outerWidth(!1)-f.width();a=this.search;x||(c=a[0].currentStyle||window.getComputedStyle(a[0],null),x=e("\x3cdiv\x3e\x3c/div\x3e").css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:c.fontSize,fontFamily:c.fontFamily,fontStyle:c.fontStyle,fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,textTransform:c.textTransform,whiteSpace:"nowrap"}),e("body").append(x));x.text(a.val());a=x.width()+10;b=this.search.offset().left;
c=this.selection.width();d=this.selection.offset().left;b=c-(b-d)-f;b<a&&(b=c-f);40>b&&(b=c-f);this.search.width(b)},getVal:function(){var a;if(this.select)return a=this.select.val(),null===a?[]:a;a=this.opts.element.val();return E(a,this.opts.separator)},setVal:function(a){var b;this.select?this.select.val(a):(b=[],e(a).each(function(){0>p(this,b)&&b.push(this)}),this.opts.element.val(0===b.length?"":b.join(this.opts.separator)))},val:function(){var a,b=[],c=this;if(0===arguments.length)return this.getVal();
if(a=arguments[0])if(this.setVal(a),this.select)this.select.find(":selected").each(function(){b.push({id:e(this).attr("value"),text:e(this).text()})}),this.updateSelection(b);else{if(this.opts.initSelection===g)throw Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(a){var b=e(a).map(c.id);c.setVal(b);c.updateSelection(a);c.clearSearch()})}else this.opts.element.val(""),this.updateSelection([]);this.clearSearch()},onSortStart:function(){if(this.select)throw Error("Sorting of elements is not supported when attached to \x3cselect\x3e. Attach to \x3cinput type\x3d'hidden'/\x3e instead.");
this.search.width(0);this.searchContainer.hide()},onSortEnd:function(){var a=[],b=this;this.searchContainer.show();this.searchContainer.appendTo(this.searchContainer.parent());this.resizeSearch();this.selection.find(".select2-search-choice").each(function(){a.push(b.opts.id(e(this).data("select2-data")))});this.setVal(a);this.triggerChange()},data:function(a){var b=this,c;if(0===arguments.length)return this.selection.find(".select2-search-choice").map(function(){return e(this).data("select2-data")}).get();
a||(a=[]);c=e.map(a,function(a){return b.opts.id(a)});this.setVal(c);this.updateSelection(a);this.clearSearch()}});e.fn.select2=function(){var a=Array.prototype.slice.call(arguments,0),b,c,d,f,h="val destroy opened open close focus isFocused container onSortStart onSortEnd enable disable positionDropdown data".split(" ");this.each(function(){if(0===a.length||"object"===typeof a[0])b=0===a.length?{}:e.extend({},a[0]),b.element=e(this),"select"===b.element.get(0).tagName.toLowerCase()?f=b.element.attr("multiple"):
(f=b.multiple||!1,"tags"in b&&(b.multiple=f=!0)),c=f?new D:new C,c.init(b);else if("string"===typeof a[0]){if(0>p(a[0],h))throw"Unknown method: "+a[0];d=g;c=e(this).data("select2");if(c!==g&&(d="container"===a[0]?c.container:c[a[0]].apply(c,a.slice(1)),d!==g))return!1}else throw"Invalid arguments to select2 plugin: "+a;});return d===g?this:d};e.fn.select2.defaults={width:"copy",closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(a,
b,c){b=[];H(a.text,c.term,b);return b.join("")},formatSelection:function(a,b){return a?a.text:g},formatResultCssClass:function(a){return g},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(a,b){var c=b-a.length;return"Please enter "+c+" more character"+(1==c?"":"s")},formatSelectionTooBig:function(a){return"You can only select "+a+" item"+(1==a?"":"s")},formatLoadMore:function(a){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,
minimumInputLength:0,maximumSelectionSize:0,id:function(a){return a.id},matcher:function(a,b){return 0<=b.toUpperCase().indexOf(a.toUpperCase())},separator:",",tokenSeparators:[],tokenizer:S,escapeMarkup:function(a){return a&&"string"===typeof a?a.replace(/&/g,"\x26amp;"):a},blurOnChange:!1};window.Select2={query:{ajax:I,local:J,tags:K},util:{debounce:G,markMatch:H},"class":{"abstract":A,single:C,multi:D}}}});