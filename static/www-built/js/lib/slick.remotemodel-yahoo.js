(function(n){n.extend(!0,window,{Slick:{Data:{RemoteModel:function(){function k(e,d){if(h){h.abort();for(var a=h.fromPage;a<=h.toPage;a++)c[10*a]=void 0}0>e&&(e=0);0<c.length&&(d=Math.min(d,c.length-1));for(var b=Math.floor(e/10),f=Math.floor(d/10);void 0!==c[10*b]&&b<f;)b++;for(;void 0!==c[10*f]&&b<f;)f--;if(b>f||b==f&&void 0!==c[10*b])l.notify({from:e,to:d});else{var g=10*b,k="https://query.yahooapis.com/v1/public/yql?q\x3dselect%20*%20from%20rss("+g+"%2C"+(10*(f-b)+10)+")%20where%20url%3D%22http%3A%2F%2Frss.news.yahoo.com%2Frss%2Ftopstories%22\x26format\x3djson";
null!=m&&clearTimeout(m);m=setTimeout(function(){for(var a=b;a<=f;a++)c[10*a]=null;p.notify({from:e,to:d});h=n.jsonp({url:k,callbackParameter:"callback",cache:!0,success:function(a,e,b){e=g;if(0<a.query.count)for(a=a.query.results.item,e=g+a.length,c.length=100,b=0;b<a.length;b++){var d=a[b];d.pubDate=new Date(d.pubDate);c[g+b]={index:g+b};c[g+b].pubDate=d.pubDate;c[g+b].title=d.title;c[g+b].url=d.link;c[g+b].text=d.description}h=null;l.notify({from:g,to:e})},error:function(){alert("error loading pages "+
b+" to "+f)}});h.fromPage=b;h.toPage=f},50)}}var c={length:0},m=null,h=null,p=new Slick.Event,l=new Slick.Event;return{data:c,clear:function(){for(var e in c)delete c[e];c.length=0},isDataLoaded:function(e,d){for(var a=e;a<=d;a++)if(void 0==c[a]||null==c[a])return!1;return!0},ensureData:k,reloadData:function(e,d){for(var a=e;a<=d;a++)delete c[a];k(e,d)},onDataLoading:p,onDataLoaded:l}}}}})})(jQuery);