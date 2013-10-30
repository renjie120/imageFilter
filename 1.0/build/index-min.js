/*!build time : 2013-10-30 11:11:55 AM*/
KISSY.add("gallery/imageFilter/1.0/index",function(a,b,c,d){function e(a){function c(a,b,c){this.data=a.data,this.width=b,this.height=c}function d(){p=o.getImageData(0,0,k._width,k._height),q=new c(p,k._width,k._height)}function f(){o.clearRect(0,0,k._width,k._height),o.putImageData(p,0,0)}function g(a){for(var b=1;b<=k._width;b++)for(var c=1;c<=k._height;c++)a&&a(q.getData(b,c,"rgb"),b,c)}function h(a,b,c,d){d=d/100+1;var e=i(a),f=j([e[0],e[1],e[2]*d]);q.setData(b,c,"rgb",f)}function i(a){var b,c,d;b=a[0]/255,c=a[1]/255,d=a[2]/255;var e,f,g=Math.max(b,c,d),h=Math.min(b,c,d),i=(g+h)/2;if(g==h)e=f=0;else{var j=g-h;switch(f=i>.5?j/(2-g-h):j/(g+h),g){case b:e=(c-d)/j+(d>c?6:0);break;case c:e=(d-b)/j+2;break;case d:e=(b-c)/j+4}e/=6}return[e,f,i]}function j(a){function b(a,b,c){return 0>c&&(c+=1),c>1&&(c-=1),1/6>c?a+6*(b-a)*c:.5>c?b:2/3>c?a+6*(b-a)*(2/3-c):a}var c,d,e,f,g,h;if(c=a[0],d=a[1],e=a[2],0==d)f=g=h=e;else{var i=.5>e?e*(1+d):e+d-e*d,j=2*e-i;f=b(j,i,c+1/3),g=b(j,i,c),h=b(j,i,c-1/3)}return[255*f,255*g,255*h]}var k=this;e.superclass.constructor.call(k,a);var l={r:1,g:2,b:3,a:4,rgb:-1,rgba:-2},m=a.imgNode;k._width=m.width,k._height=m.height;var n,o,p,q;c.prototype.getImageData=function(){return this.data},c.prototype.getData=function(a,b,c){var d=l[c]||1,e=4*((b-1)*this.width+a-1)-1;if(d>0){var f=e+d;return this.data[f]}if(-1==d){for(var g=[],h=e+1;e+3>=h;h++)g.push(this.data[h]);return g}for(var g=[],h=e+1;e+4>=h;h++)g.push(this.data[h]);return g},c.prototype.setData=function(a,b,c,d){var e=l[c]||1,f=4*((b-1)*this.width+a-1)-1;if(e>0){var g=f+e;this.data[g]=d}else if(-1==e&&3==d.length)for(var h=0;2>=h;h++)this.data[f+h+1]=d[h];else if(-2==e&&4==d.length)for(var h=0;3>=h;h++)this.data[f+h+1]=d[h]},n=b.create("<canvas>",{css:{display:"none"}}),n.height=k._height,n.width=k._width,b.append(n,"body"),o=n.getContext("2d"),o.drawImage(m,0,0,k._width,k._height),d(),k.gray=function(a){return g(function(b,c,d){var e;e="average"==a?Math.round((b[0]+b[1]+b[2])/3):"max"==a?Math.max(b[0],b[1],b[2]):Math.round(.3*b[0]+.59*b[1]+.11*b[2]),q.setData(c,d,"rgb",[e,e,e])}),f(),k},k.setBrightness=function(a){return g(function(b,c,d){h(b,c,d,a)}),f(),k},k.setContrast=function(a,b){var c=128;if(a/=100,b){var d=0,e=0;g(function(a){d+=.3*a[0]+.59*a[1]+.11*a[2],++e}),c=d/e}return g(function(b,d,e){var f=[];f[0]=c+(b[0]-c)*(1+a),f[1]=c+(b[1]-c)*(1+a),f[2]=c+(b[2]-c)*(1+a),q.setData(d,e,"rgb",f)}),f(),k},k.reverse=function(){return g(function(a,b,c){var d=[];d[0]=255-a[0],d[1]=255-a[1],d[2]=255-a[2],q.setData(b,c,"rgb",d)}),f(),k},k.vignetting=function(a,b){b=b||.3*Math.max(k._width,k._height),a=a||-40;var c=k._width/2,d=k._height/2,e=Math.sqrt(c*c+d*d)-b;return g(function(f,g,i){var j=(g-c)*(g-c)+(i-d)*(i-d);if(!(b*b>=j)){var k=Math.sqrt(j)-b,l=k/e*(k/e)*a;h(f,g,i,l)}}),f(),k},k.setOpacity=function(a){var b=255*a;return g(function(a,c,d){a[3],q.setData(c,d,"a",b)}),f(),k},k.blur=function(a,b){b=1.5;var c=function(a,b,c){return a=Math.abs(a),b=Math.abs(b),1/(2*Math.PI*c*c)*Math.exp(-(a*a+b*b)/(2*c*c))};gaussinaCache=[];for(var d=0;a>=d;d++)for(var e=0;d>=e;e++)gaussinaCache[d*d+e*e]=c(d,e,b);sum=0;for(var d=-a;a>=d;d++)for(var e=-a;a>=e;e++)sum+=gaussinaCache[d*d+e*e];for(var h=0;h<gaussinaCache.length;h++)gaussinaCache[h]&&(gaussinaCache[h]/=sum);return g(function(b,c,d){var e=[0,0,0];for(pointX=c-a;c+a>=pointX;++pointX)for(pointY=d-a;d+a>=pointY;++pointY){var f,g;f=pointX>0?pointX:c+c-pointX,f=pointX<=k._width?f:c-(pointX-c),g=pointY>0?pointY:d+d-pointY,g=pointY<=k._height?g:d-(pointY-d);for(var h=Math.abs(c-f),i=Math.abs(d-g),j=q.getData(f,g,"rgb"),l=0;2>=l;l++)e[l]+=j[l]*gaussinaCache[h*h+i*i]}q.setData(c,d,"rgb",e)}),f(),k},k.mixBrown=function(a){return g(function(b,c,d){var e=a||[208,163,79],f=[];f[0]=b[0]<e[0]?b[0]:e[0],f[1]=b[1]<e[1]?b[1]:e[1],f[2]=b[2]<e[2]?b[2]:e[2],q.setData(c,d,"rgb",f)}),f(),k},k.mixColor=function(a){return a?(g(function(b,c,d){var e=[];e[0]=b[0]<a[0]?b[0]:a[0],e[1]=b[1]<a[1]?b[1]:a[1],e[2]=b[2]<a[2]?b[2]:a[2],q.setData(c,d,"rgb",e)}),f(),k):void 0},k.light=function(){return g(function(a,b,c){var d=[24,65,41],e=[];e[0]=Math.min(255,Math.max(0,d[0]+2*a[0]-1)),e[1]=Math.min(255,Math.max(1,d[1]+2*a[1]-1)),e[2]=Math.min(255,Math.max(2,d[2]+2*a[2]-1)),q.setData(b,c,"rgb",e)}),f(),k},k.crop=function(a,b,d,e){return a=a||0,b=b||0,k._width=Math.min(d||k._width,k._width-a),k._height=Math.min(e||k._height,k._height-b),p=o.getImageData(a,b,k._width,k._height),n.width=k._width,n.height=k._height,q=new c(p,k._width,k._height),f(),k},k.rotate=function(a){var c=b.create("<canvas>");c.height=k._height,c.width=k._width,c.getContext("2d").drawImage(n,0,0);var e=a*Math.PI/180,f=Math.cos(e)*k._width+Math.sin(e)*k._height,g=Math.sin(Math.atan(k._height/k._width)+e)*Math.sqrt(k._width*k._width+k._height*k._height),h=Math.sin(e)*k._height;return k._width=n.width=f,k._height=n.height=g,o.clearRect(0,0,k._width,k._height),o.translate(h,0),o.rotate(e),o.drawImage(c,0,0),d(),k},k.getImageSrc=function(){return n.toDataURL("image/png")},k.render=function(a){return a=a||m,a.src=k.getImageSrc(),k},k.destroy=function(){b.remove(n)}}return a.extend(e,d,{},{ATTRS:{}}),e},{requires:["dom","node","base"]});