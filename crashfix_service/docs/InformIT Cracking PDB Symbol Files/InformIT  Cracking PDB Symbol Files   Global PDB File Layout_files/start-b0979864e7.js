// 5955 mako_start.js -a b0979864e7 st 20110316161528
if(!window.CrowdScience)var CrowdScience=new function(){function m(){if(e.body)if(l)c.delay();else l=g.setTimeout(c.start,typeof CrowdScienceAdCamp==n?3030:770);else g.setTimeout(m,100)}var c=this;c.newt=1;var o=navigator,i=o.userAgent.toLowerCase(),g=window,e=g.document||null;c.doc=e;c.locn=function(){for(var a=window,d="";;){var b;b="";try{b=a.location;if(typeof b.pathname==n)b=""}catch(h){b=""}if(b=b)d=b;if(a==window.top)break;else a=a.parent}return d}();c.host=c.locn.host;var p=c.locn.protocol, n="undefined";c.is_secure=p=="https:";var l=null,j=[],q=null;c.mobile=/ip(hone|od)|android|webos|blackberry|iemobile/.test(i);var t=c.mobile?"m.":"";c.c_srv=p+"//"+(c.is_secure?"secure-":"")+"static.crowdscience.com";c.p_srv=p+"//"+t+(c.is_secure?"secure-":"")+"ping.crowdscience.com";var s=0;c.getTag=function(){return q.s};c.getHref=function(){return c.locn.href};c.isLive=function(){return c.getHref().indexOf("__cs_test=")==-1};c.load=function(a){var d=e.createElement("script");d.type="text/javascript"; d.async=true;d.src=a;a=e.getElementsByTagName("script")[0];a.parentNode.insertBefore(d,a)};c.getCk=function(a){if(e.cookie.length>0){var d=e.cookie.indexOf(a+"=");if(d!=-1){d+=a.length+1;a=e.cookie.indexOf(";",d);if(a==-1)a=e.cookie.length;return unescape(e.cookie.substring(d,a))}}return null};c._getPageWidth=function(){var a=e.documentElement;if(typeof g.innerWidth=="number")return g.innerWidth;if(a&&(a.clientWidth||a.clientHeight))return a.clientWidth;if(e.body&&(e.body.clientWidth||e.body.clientHeight))return e.body.clientWidth; return 0};c._getPageHeight=function(){var a=e.documentElement;if(typeof g.innerWidth=="number")return g.innerHeight;if(a&&(a.clientWidth||a.clientHeight))return a.clientHeight;if(e.body&&(e.body.clientWidth||e.body.clientHeight))return e.body.clientHeight;return 0};c.encode=function(a,d){if(typeof d==n)d=false;var b;b=encodeURIComponent?encodeURIComponent(a):escape(a).replace(/\+/g,"%2B");if(d)b=b.replace(/\%20/g,"+");return b};c.start=function(){if(!s){s=1;g.clearTimeout(l);if(g!=top)if(c._getPageHeight()< 300||c._getPageWidth()<360)return;if(!c.getCk("__csref"))e.cookie="__csref="+c.encode(e.referrer,0)+";path=/;";var a=o.appName.toLowerCase(),d=parseInt(o.appVersion,10),b=false;if(a=="netscape"&&d>4)b=true;if(a=="opera")b=true;if(a=="microsoft internet explorer"&&d>3&&i.indexOf("msie 5.0")==-1)b=true;if(c.isLive()&&(new Date).getTime()%1!=0||!j.length)b=false;if(b){a=Math;a=j.length>1?a.floor(a.random()*j.length):0;q=j[a];a=q.c;d=c.getCk("__cst");var h=(b=c.getCk("__csv"))?b.split("|"):[null],f=h[0]; b=null;if(h.length>1)b=h[1];h=e.cookie.indexOf("__csh=1")!=-1;d=c.p_srv+"/ping.js?url="+c.encode(c.getHref(),0)+"&id="+a+"&u="+c.encode(i,0)+"&x="+(new Date).getTime()+"&c="+(h?1:0)+"&t="+(d?d:0)+"&v="+(f?f:0)+"&m="+(c.mobile?1:0);if(b=="1"){traits="";b=screen.width+"x"+screen.height;f={"1024x768":1,"1280x800":2,"1280x1024":3,"1440x900":4,"800x600":5,"1680x1050":6,"1152x864":7,"1400x1050":8,"1920x1200":9,"1600x1200":10};traits+="51="+(b in f?f[b]:98)+";";b=98;if(navigator.appVersion.indexOf("Win")!= -1)b=1;if(navigator.appVersion.indexOf("Mac")!=-1)b=2;if(navigator.appVersion.indexOf("X11")!=-1)b=3;if(navigator.appVersion.indexOf("Linux")!=-1)b=3;traits+="50="+b+";";b=[7,1,2,3,4,5,6][(new Date).getDay()];traits+="53="+b+";";b=(new Date).getHours();f=1;if(b<6||b>=22)f=5;else if(b<11)f=1;else if(b<13)f=2;else if(b<17)f=3;else if(b<22)f=4;traits+="54="+f;if(b=traits)d=d+"&r=1&pt="+c.encode(b)}codes="";for(b=0;b<j.length;b++){f=j[b];if(f.c!=a)codes=codes?codes+"."+f.c:f.c}if(codes)d=d+"&cd="+codes; c.load(d)}}};c.delay=function(){g.clearTimeout(l);l=g.setTimeout(c.start,530)};c.reg=function(a){for(var d=null,b=/start-\w+.js/,h=document.getElementsByTagName("script"),f=h.length-1;f>=0;f--){var k=h[f];if(k.src&&b.test(k.src)&&typeof k._cs_reg!="number"){k._cs_reg=1;if(!a){var r=k.src.match("id=([^&]*)");if(r&&r[1])a=r[1]}if(a){j.push({c:a,s:k});d=k;break}}}d&&m()};(function(a){if(/webkit/.test(i))g.setTimeout(function(){e.readyState=="loaded"||e.readyState=="complete"?a():g.setTimeout(arguments.callee, 10)},10);else if(/mozilla/.test(i)&&!/(compatible)/.test(i)||/opera/.test(i))e.addEventListener("DOMContentLoaded",a,false);else if(/msie/.test(i))(function(){var d=e.createElement("document:ready");try{d.doScroll("left");a()}catch(b){g.setTimeout(arguments.callee,10)}})();else g.onload=a})(m)};CrowdScience.reg("b0979864e7");
