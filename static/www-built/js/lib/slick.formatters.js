(function(d,e){"function"===typeof define&&define.amd?define(["jquery","./slick.core"],e):d.Slick.Formatters=e(d.jQuery,d.Slick)})(this,function(d,e){d.extend(!0,e,{Formatters:{PercentComplete:function(a,c,b,d,e){return null==b||""===b?"-":50>b?"\x3cspan style\x3d'color:red;font-weight:bold;'\x3e"+b+"%\x3c/span\x3e":"\x3cspan style\x3d'color:green'\x3e"+b+"%\x3c/span\x3e"},PercentCompleteBar:function(a,c,b,d,e){return null==b||""===b?"":"\x3cspan class\x3d'percent-complete-bar' style\x3d'background:"+
(30>b?"red":70>b?"silver":"green")+";width:"+b+"%'\x3e\x3c/span\x3e"},YesNo:function(a,c,b,d,e){return b?"Yes":"No"},Checkmark:function(a,c,b,d,e){return b?"\x3cimg src\x3d'../images/tick.png'\x3e":""},FileSizeFormatter:function(a,c,b,d,e){if(0===b||"0"===b||null===b)return null;a=Number(b);c=["KB","MB","GB","TB","PB"];b=0;if(0==a)return"0 KB";if(1024>a)return a=Number(a)+" "+c[b];for(;1024<=a;)b++,a/=1024;return a=Number(a)+" "+c[b]},FileSizeParser:function(a){var c;if(null==a||""===a||"0"===a)return"0";
if(c=a.match(new RegExp(/(^\d+(\.\d+)?)(\s+)?(KB|MB|GB|TB|PB)/i))){switch(c[4].toUpperCase()){case "KB":a=Number(1024*c[1]);break;case "MB":a=Number(c[1]*Math.pow(1024,2));break;case "GB":a=Number(c[1]*Math.pow(1024,3));break;case "TB":a=Number(c[1]*Math.pow(1024,4));break;case "PB":a=Number(c[1]*Math.pow(1024,5))}a=Math.floor(a/1024)}return a}}});return e.Formatters});