/*
jed.js
v0.5.0beta

https://github.com/SlexAxton/Jed
-----------
A gettext compatible i18n library for modern JavaScript Applications

by Alex Sexton - AlexSexton [at] gmail - @SlexAxton
WTFPL license for use
Dojo CLA for contributions

Jed offers the entire applicable GNU gettext spec'd set of
functions, but also offers some nicer wrappers around them.
The api for gettext was written for a language with no function
overloading, so Jed allows a little more of that.

Many thanks to Joshua I. Miller - unrtst@cpan.org - who wrote
gettext.js back in 2008. I was able to vet a lot of my ideas
against his. I also made sure Jed passed against his tests
in order to offer easy upgrades -- jsgettext.berlios.de
*/

// Underscore 1.3.0 was used to port and is licensed

/**
   sprintf() for JavaScript 0.7-beta1
   http://www.diveintojavascript.com/projects/javascript-sprintf

   Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions are met:
       * Redistributions of source code must retain the above copyright
         notice, this list of conditions and the following disclaimer.
       * Redistributions in binary form must reproduce the above copyright
         notice, this list of conditions and the following disclaimer in the
         documentation and/or other materials provided with the distribution.
       * Neither the name of sprintf() for JavaScript nor the
         names of its contributors may be used to endorse or promote products
         derived from this software without specific prior written permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
   ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
   WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   DISCLAIMED. IN NO EVENT SHALL Alexandru Marasteanu BE LIABLE FOR ANY
   DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
   (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
   LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
   ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
   (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */

(function(G,m){function A(a){return c.PF.compile(a||"nplurals\x3d2; plural\x3d(n !\x3d 1);")}function C(a,b){this._key=a;this._i18n=b}var D=Array.prototype,H=D.slice,I=Object.prototype.hasOwnProperty,E=D.forEach,F={},B={forEach:function(a,b,g){var k,c;if(null!==a)if(E&&a.forEach===E)a.forEach(b,g);else if(a.length===+a.length)for(k=0,c=a.length;k<c&&!(k in a&&b.call(g,a[k],k,a)===F);k++);else for(k in a)if(I.call(a,k)&&b.call(g,a[k],k,a)===F)break},extend:function(a){this.forEach(H.call(arguments,
1),function(b){for(var g in b)a[g]=b[g]});return a}},c=function(a){this.defaults={locale_data:{messages:{"":{domain:"messages",lang:"en",plural_forms:"nplurals\x3d2; plural\x3d(n !\x3d 1);"}}},domain:"messages"};this.options=B.extend({},this.defaults,a);this.textdomain(this.options.domain);if(a.domain&&!this.options.locale_data[this.options.domain])throw Error("Text domain set to non-existent domain: `"+a.domain+"`");};c.context_delimiter=String.fromCharCode(4);B.extend(C.prototype,{onDomain:function(a){this._domain=
a;return this},withContext:function(a){this._context=a;return this},ifPlural:function(a,b){this._val=a;this._pkey=b;return this},fetch:function(a){"[object Array]"!={}.toString.call(a)&&(a=[].slice.call(arguments));return(a&&a.length?c.sprintf:function(a){return a})(this._i18n.dcnpgettext(this._domain,this._context,this._key,this._pkey,this._val),a)}});B.extend(c.prototype,{translate:function(a){return new C(a,this)},textdomain:function(a){if(!a)return this._textdomain;this._textdomain=a},gettext:function(a){return this.dcnpgettext.call(this,
m,m,a)},dgettext:function(a,b){return this.dcnpgettext.call(this,a,m,b)},dcgettext:function(a,b){return this.dcnpgettext.call(this,a,m,b)},ngettext:function(a,b,g){return this.dcnpgettext.call(this,m,m,a,b,g)},dngettext:function(a,b,g,k){return this.dcnpgettext.call(this,a,m,b,g,k)},dcngettext:function(a,b,g,k){return this.dcnpgettext.call(this,a,m,b,g,k)},pgettext:function(a,b){return this.dcnpgettext.call(this,m,a,b)},dpgettext:function(a,b,g){return this.dcnpgettext.call(this,a,b,g)},dcpgettext:function(a,
b,g){return this.dcnpgettext.call(this,a,b,g)},npgettext:function(a,b,g,k){return this.dcnpgettext.call(this,m,a,b,g,k)},dnpgettext:function(a,b,g,k,c){return this.dcnpgettext.call(this,a,b,g,k,c)},dcnpgettext:function(a,b,g,k,t){k=k||g;a=a||this._textdomain;t="undefined"==typeof t?1:t;if(!this.options)return a=new c,a.dcnpgettext.call(a,void 0,void 0,g,k,t);if(!this.options.locale_data)throw Error("No locale data provided.");if(!this.options.locale_data[a])throw Error("Domain `"+a+"` was not found.");
if(!this.options.locale_data[a][""])throw Error("No locale meta information provided.");if(!g)throw Error("No translation key found.");if("number"!=typeof t&&(t=parseInt(t,10),isNaN(t)))throw Error("The number that was passed in is not a number.");b=b?b+c.context_delimiter+g:g;var f=this.options.locale_data,d=f[a],f=d[""].plural_forms||(f.messages||this.defaults.locale_data.messages)[""].plural_forms,e=A(f)(t)+1;if(!d)throw Error("No domain named `"+a+"` could be found.");a=d[b];if(!a||e>=a.length)return this.options.missing_key_callback&&
this.options.missing_key_callback(b),a=[null,g,k],a[A(f)(t)+1];a=a[e];return a?a:(a=[null,g,k],a[A(f)(t)+1])}});var u=function(){function a(a){return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()}var b=function(){b.cache.hasOwnProperty(arguments[0])||(b.cache[arguments[0]]=b.parse(arguments[0]));return b.format.call(null,b.cache[arguments[0]],arguments)};b.format=function(g,b){var c=1,f=g.length,d,e=[],l,p,h,m;for(l=0;l<f;l++)if(d=a(g[l]),"string"===d)e.push(g[l]);else if("array"===
d){h=g[l];if(h[2])for(d=b[c],p=0;p<h[2].length;p++){if(!d.hasOwnProperty(h[2][p]))throw u('[sprintf] property "%s" does not exist',h[2][p]);d=d[h[2][p]]}else d=h[1]?b[h[1]]:b[c++];if(/[^s]/.test(h[8])&&"number"!=a(d))throw u("[sprintf] expecting number but found %s",a(d));if("undefined"==typeof d||null===d)d="";switch(h[8]){case "b":d=d.toString(2);break;case "c":d=String.fromCharCode(d);break;case "d":d=parseInt(d,10);break;case "e":d=h[7]?d.toExponential(h[7]):d.toExponential();break;case "f":d=
h[7]?parseFloat(d).toFixed(h[7]):parseFloat(d);break;case "o":d=d.toString(8);break;case "s":d=(d=String(d))&&h[7]?d.substring(0,h[7]):d;break;case "u":d=Math.abs(d);break;case "x":d=d.toString(16);break;case "X":d=d.toString(16).toUpperCase()}d=/[def]/.test(h[8])&&h[3]&&0<=d?"+"+d:d;p=h[4]?"0"==h[4]?"0":h[4].charAt(1):" ";m=h[6]-String(d).length;if(h[6]){for(var v=[];0<m;v[--m]=p);p=v.join("")}else p="";e.push(h[5]?d+p:p+d)}return e.join("")};b.cache={};b.parse=function(a){for(var b,c=[],f=0;a;){if(null!==
(b=/^[^\x25]+/.exec(a)))c.push(b[0]);else if(null!==(b=/^\x25{2}/.exec(a)))c.push("%");else if(null!==(b=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(a))){if(b[2]){var f=f|1,d=[],e=b[2],l;if(null!==(l=/^([a-z_][a-z_\d]*)/i.exec(e)))for(d.push(l[1]);""!==(e=e.substring(l[0].length));)if(null!==(l=/^\.([a-z_][a-z_\d]*)/i.exec(e)))d.push(l[1]);else if(null!==(l=/^\[(\d+)\]/.exec(e)))d.push(l[1]);else throw"[sprintf] huh?";else throw"[sprintf] huh?";b[2]=
d}else f|=2;if(3===f)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";c.push(b)}else throw"[sprintf] huh?";a=a.substring(b[0].length)}return c};return b}();c.parse_plural=function(a,b){a=a.replace(/n/g,b);return c.parse_expression(a)};c.sprintf=function(a,b){if("[object Array]"=={}.toString.call(b)){var g=[].slice.call(b);g.unshift(a);return u.apply(null,g)}return u.apply(this,[].slice.call(arguments))};c.prototype.sprintf=function(){return c.sprintf.apply(this,arguments)};
c.PF={};c.PF.parse=function(a){a=c.PF.extractPluralExpr(a);return c.PF.parser.parse.call(c.PF.parser,a)};c.PF.compile=function(a){var b=c.PF.parse(a);return function(a){a=c.PF.interpreter(b)(a);return!0===a?1:a?a:0}};c.PF.interpreter=function(a){return function(b){switch(a.type){case "GROUP":return c.PF.interpreter(a.expr)(b);case "TERNARY":return c.PF.interpreter(a.expr)(b)?c.PF.interpreter(a.truthy)(b):c.PF.interpreter(a.falsey)(b);case "OR":return c.PF.interpreter(a.left)(b)||c.PF.interpreter(a.right)(b);
case "AND":return c.PF.interpreter(a.left)(b)&&c.PF.interpreter(a.right)(b);case "LT":return c.PF.interpreter(a.left)(b)<c.PF.interpreter(a.right)(b);case "GT":return c.PF.interpreter(a.left)(b)>c.PF.interpreter(a.right)(b);case "LTE":return c.PF.interpreter(a.left)(b)<=c.PF.interpreter(a.right)(b);case "GTE":return c.PF.interpreter(a.left)(b)>=c.PF.interpreter(a.right)(b);case "EQ":return c.PF.interpreter(a.left)(b)==c.PF.interpreter(a.right)(b);case "NEQ":return c.PF.interpreter(a.left)(b)!=c.PF.interpreter(a.right)(b);
case "MOD":return c.PF.interpreter(a.left)(b)%c.PF.interpreter(a.right)(b);case "VAR":return b;case "NUM":return a.val;default:throw Error("Invalid Token found.");}}};c.PF.extractPluralExpr=function(a){a=a.replace(/^\s\s*/,"").replace(/\s\s*$/,"");/;\s*$/.test(a)||(a=a.concat(";"));var b=/nplurals\=(\d+);/;if(!(1<a.match(b).length))throw Error("nplurals not found in plural_forms string: "+a);a=a.replace(b,"");b=a.match(/plural\=(.*);/);if(!(b&&1<b.length))throw Error("`plural` expression not found: "+
a);return b[1]};c.PF.parser=function(){var a={trace:function(){},yy:{},symbols_:{error:2,expressions:3,e:4,EOF:5,"?":6,":":7,"||":8,"\x26\x26":9,"\x3c":10,"\x3c\x3d":11,"\x3e":12,"\x3e\x3d":13,"!\x3d":14,"\x3d\x3d":15,"%":16,"(":17,")":18,n:19,NUMBER:20,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",6:"?",7:":",8:"||",9:"\x26\x26",10:"\x3c",11:"\x3c\x3d",12:"\x3e",13:"\x3e\x3d",14:"!\x3d",15:"\x3d\x3d",16:"%",17:"(",18:")",19:"n",20:"NUMBER"},productions_:[0,[3,2],[4,5],[4,3],[4,3],[4,3],[4,3],[4,
3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,1],[4,1]],performAction:function(a,b,c,f,d,e,l){b=e.length-1;switch(d){case 1:return{type:"GROUP",expr:e[b-1]};case 2:this.$={type:"TERNARY",expr:e[b-4],truthy:e[b-2],falsey:e[b]};break;case 3:this.$={type:"OR",left:e[b-2],right:e[b]};break;case 4:this.$={type:"AND",left:e[b-2],right:e[b]};break;case 5:this.$={type:"LT",left:e[b-2],right:e[b]};break;case 6:this.$={type:"LTE",left:e[b-2],right:e[b]};break;case 7:this.$={type:"GT",left:e[b-2],right:e[b]};break;case 8:this.$=
{type:"GTE",left:e[b-2],right:e[b]};break;case 9:this.$={type:"NEQ",left:e[b-2],right:e[b]};break;case 10:this.$={type:"EQ",left:e[b-2],right:e[b]};break;case 11:this.$={type:"MOD",left:e[b-2],right:e[b]};break;case 12:this.$={type:"GROUP",expr:e[b-1]};break;case 13:this.$={type:"VAR"};break;case 14:this.$={type:"NUM",val:Number(a)}}},table:[{3:1,4:2,17:[1,3],19:[1,4],20:[1,5]},{1:[3]},{5:[1,6],6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{4:17,17:[1,
3],19:[1,4],20:[1,5]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],18:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],18:[2,14]},{1:[2,1]},{4:18,17:[1,3],19:[1,4],20:[1,5]},{4:19,17:[1,3],19:[1,4],20:[1,5]},{4:20,17:[1,3],19:[1,4],20:[1,5]},{4:21,17:[1,3],19:[1,4],20:[1,5]},{4:22,17:[1,3],19:[1,4],20:[1,5]},{4:23,17:[1,3],19:[1,4],20:[1,5]},{4:24,17:[1,
3],19:[1,4],20:[1,5]},{4:25,17:[1,3],19:[1,4],20:[1,5]},{4:26,17:[1,3],19:[1,4],20:[1,5]},{4:27,17:[1,3],19:[1,4],20:[1,5]},{6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[1,28]},{6:[1,7],7:[1,29],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{5:[2,3],6:[2,3],7:[2,3],8:[2,3],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,
10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[1,16],18:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[1,16],18:[2,6]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[2,7],16:[1,16],18:[2,7]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,
8],15:[2,8],16:[1,16],18:[2,8]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[1,16],18:[2,9]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[1,16],18:[2,10]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],18:[2,11]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,
12],16:[2,12],18:[2,12]},{4:30,17:[1,3],19:[1,4],20:[1,5]},{5:[2,2],6:[1,7],7:[2,2],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,2]}],defaultActions:{6:[2,1]},parseError:function(a,b){throw Error(a);},parse:function(a){function b(){var a;a=c.lexer.lex()||1;"number"!==typeof a&&(a=c.symbols_[a]||a);return a}var c=this,f=[0],d=[null],e=[],l=this.table,p="",h=0,m=0,v=0;this.lexer.setInput(a);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;"undefined"==typeof this.lexer.yylloc&&
(this.lexer.yylloc={});a=this.lexer.yylloc;e.push(a);"function"===typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var n,w,q,r,y={},u,x;;){q=f[f.length-1];this.defaultActions[q]?r=this.defaultActions[q]:(null==n&&(n=b()),r=l[q]&&l[q][n]);if("undefined"===typeof r||!r.length||!r[0]){if(!v){w=[];for(u in l[q])this.terminals_[u]&&2<u&&w.push("'"+this.terminals_[u]+"'");var z="",z=this.lexer.showPosition?"Parse error on line "+(h+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+w.join(", ")+
", got '"+this.terminals_[n]+"'":"Parse error on line "+(h+1)+": Unexpected "+(1==n?"end of input":"'"+(this.terminals_[n]||n)+"'");this.parseError(z,{text:this.lexer.match,token:this.terminals_[n]||n,line:this.lexer.yylineno,loc:a,expected:w})}if(3==v){if(1==n)throw Error(z||"Parsing halted.");m=this.lexer.yyleng;p=this.lexer.yytext;h=this.lexer.yylineno;a=this.lexer.yylloc;n=b()}for(;!((2).toString()in l[q]);){if(0==q)throw Error(z||"Parsing halted.");f.length-=2;--d.length;--e.length;q=f[f.length-
1]}w=n;n=2;q=f[f.length-1];r=l[q]&&l[q][2];v=3}if(r[0]instanceof Array&&1<r.length)throw Error("Parse Error: multiple actions possible at state: "+q+", token: "+n);switch(r[0]){case 1:f.push(n);d.push(this.lexer.yytext);e.push(this.lexer.yylloc);f.push(r[1]);n=null;w?(n=w,w=null):(m=this.lexer.yyleng,p=this.lexer.yytext,h=this.lexer.yylineno,a=this.lexer.yylloc,0<v&&v--);break;case 2:x=this.productions_[r[1]][1];y.$=d[d.length-x];y._$={first_line:e[e.length-(x||1)].first_line,last_line:e[e.length-
1].last_line,first_column:e[e.length-(x||1)].first_column,last_column:e[e.length-1].last_column};q=this.performAction.call(y,p,m,h,this.yy,r[1],d,e);if("undefined"!==typeof q)return q;x&&(f=f.slice(0,-2*x),d=d.slice(0,-1*x),e=e.slice(0,-1*x));f.push(this.productions_[r[1]][0]);d.push(y.$);e.push(y._$);r=l[f[f.length-2]][f[f.length-1]];f.push(r);break;case 3:return!0}}}},b=function(){return{EOF:1,parseError:function(a,b){if(this.yy.parseError)this.yy.parseError(a,b);else throw Error(a);},setInput:function(a){this._input=
a;this._more=this._less=this.done=!1;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};return this},input:function(){var a=this._input[0];this.yytext+=a;this.yyleng++;this.match+=a;this.matched+=a;a.match(/\n/)&&this.yylineno++;this._input=this._input.slice(1);return a},unput:function(a){this._input=a+this._input;return this},more:function(){this._more=!0;return this},pastInput:function(){var a=
this.matched.substr(0,this.matched.length-this.match.length);return(20<a.length?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;20>a.length&&(a+=this._input.substr(0,20-a.length));return(a.substr(0,20)+(20<a.length?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b;this._more||(this.match=
this.yytext="");for(var c=this._currentRules(),f=0;f<c.length;f++)if(a=this._input.match(this.rules[c[f]])){if(b=a[0].match(/\n.*/g))this.yylineno+=b.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:b?b[b.length-1].length-1:this.yylloc.last_column+a[0].length};this.yytext+=a[0];this.match+=a[0];this.matches=a;this.yyleng=this.yytext.length;this._more=!1;this._input=this._input.slice(a[0].length);this.matched+=a[0];if(a=
this.performAction.call(this,this.yy,this,c[f],this.conditionStack[this.conditionStack.length-1]))return a;return}if(""===this._input)return this.EOF;this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!==typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-
1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)},performAction:function(a,b,c,f){switch(c){case 1:return 20;case 2:return 19;case 3:return 8;case 4:return 9;case 5:return 6;case 6:return 7;case 7:return 11;case 8:return 13;case 9:return 10;case 10:return 12;case 11:return 14;case 12:return 15;case 13:return 16;case 14:return 17;case 15:return 18;case 16:return 5;case 17:return"INVALID"}},rules:[/^\s+/,/^[0-9]+(\.[0-9]+)?\b/,
/^n\b/,/^\|\|/,/^&&/,/^\?/,/^:/,/^<=/,/^>=/,/^</,/^>/,/^!=/,/^==/,/^%/,/^\(/,/^\)/,/^$/,/^./],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],inclusive:!0}}}}();a.lexer=b;return a}();"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=c),exports.Jed=c):("function"===typeof define&&define.amd&&define("jed",[],function(){return c}),G.Jed=c)})(this);