(function(){var a,b,c,d,e,f,g=[].slice,h={version:1,apiEndpoint:"https://api.trello.com",authEndpoint:"https://trello.com",key:"d8c65fac278e6cfc05f5ef3a88aea5c3"};f=function(a,d,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F;for(r=f.key,C=f.token,i=f.apiEndpoint,j=f.authEndpoint,E=f.version,l=i+"/"+E+"/",v=a.location,h={version:function(){return E},key:function(){return r},setKey:function(a){r=a},token:function(){return C},setToken:function(a){C=a},rest:function(){var a,b,c,e,h,i,j;return c=arguments[0],a=2<=arguments.length?g.call(arguments,1):[],i=w(a),h=i[0],e=i[1],j=i[2],b=i[3],f={url:""+l+h,type:c,data:{},dataType:"json",success:j,error:b},d.support.cors||(f.dataType="jsonp","GET"!==c&&(f.type="GET",d.extend(f.data,{_method:c}))),r&&(f.data.key=r),C&&(f.data.token=C),null!=e&&d.extend(f.data,e),d.ajax(f)},authorized:function(){return null!=C},deauthorize:function(){C=null,F("token",C)},authorize:function(b){var c,g,h,i,j,l;if(f=d.extend(!0,{type:"redirect",persist:!0,interactive:!0,scope:{read:!0,write:!1,account:!1},expiration:"30days"},b),i=/[&#]?token=([0-9a-f]{64})/,g=function(){if(f.persist&&null!=C)return F("token",C)},f.persist&&null==C&&(C=x("token")),null==C&&(C=null!=(h=i.exec(v.hash))?h[1]:void 0),this.authorized())return g(),v.hash=v.hash.replace(i,""),"function"==typeof f.success?f.success():void 0;if(!f.interactive)return"function"==typeof f.error?f.error():void 0;switch(j=function(){var a,b;a=f.scope,b=[];for(c in a)l=a[c],l&&b.push(c);return b}().join(","),f.type){case"popup":!function(){var b,c,d,h,i,l;return e("authorized",function(a){return function(a){return a?(g(),"function"==typeof f.success?f.success():void 0):"function"==typeof f.error?f.error():void 0}}(this)),l=420,b=470,c=a.screenX+(a.innerWidth-l)/2,i=a.screenY+(a.innerHeight-b)/2,d=null!=(h=/^[a-z]+:\/\/[^\/]*/.exec(v))?h[0]:void 0,a.open(k({return_url:d,callback_method:"postMessage",scope:j,expiration:f.expiration,name:f.name}),"trello","width="+l+",height="+b+",left="+c+",top="+i)}();break;default:a.location=k({redirect_uri:f.redirectUri||v.href,callback_method:"fragment",scope:j,expiration:f.expiration,name:f.name})}}},z=["GET","PUT","POST","DELETE"],n=function(a){return h[a.toLowerCase()]=function(){return this.rest.apply(this,[a].concat(g.call(arguments)))}},p=0,s=z.length;p<s;p++)D=z[p],n(D);for(h.del=h["delete"],A=["actions","cards","checklists","boards","lists","members","organizations","lists"],o=function(a){return h[a]={get:function(b,c,d,e){return h.get(a+"/"+b,c,d,e)}}},q=0,t=A.length;q<t;q++)m=A[q],o(m);a.Trello=h,k=function(a){var b;return b={response_type:"token",key:r},j+"/"+E+"/authorize?"+d.param(d.extend(b,a))},w=function(a){var c,d,e,f;return e=a[0],d=a[1],f=a[2],c=a[3],b(d)&&(c=f,f=d,d={}),e=e.replace(/^\/*/,""),[e,d,f,c]},y=function(a){var b;a.origin===j&&(null!=(b=a.source)&&b.close(),C=null!=a.data&&a.data.length>4?a.data:null,c("authorized",h.authorized()))},u=a.localStorage,null!=u?(B="trello_",x=function(a){return u[B+a]},F=function(a,b){return null===b?delete u[B+a]:u[B+a]=b}):x=F=function(){},"function"==typeof a.addEventListener&&a.addEventListener("message",y,!1)},a={},d={},e=function(b,c){return null!=d[b]?c(d[b]):(null!=a[b]?a[b]:a[b]=[]).push(c)},c=function(b,c){var e,f,g,h;if(d[b]=c,a[b])for(f=a[b],delete a[b],g=0,h=f.length;g<h;g++)(e=f[g])(c)},b=function(a){return"function"==typeof a},f(window,$,h)}).call(this);