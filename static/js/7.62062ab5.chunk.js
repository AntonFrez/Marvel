(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{37:function(t,e,r){"use strict";var n=r.p+"static/media/error.42292aa1.gif",a=r(2);e.a=function(){return Object(a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"Error"})}},39:function(t,e,r){"use strict";var n=r(6),a=r(4),c=r.n(a),s=r(7),o=r(5),i=r(0);e.a=function(){var t,e=function(){var t=Object(i.useState)(!1),e=Object(o.a)(t,2),r=e[0],n=e[1],a=Object(i.useState)(null),u=Object(o.a)(a,2),l=u[0],p=u[1],b=Object(i.useState)("waiting"),f=Object(o.a)(b,2),h=f[0],d=f[1];return{loading:r,request:Object(i.useCallback)(function(){var t=Object(s.a)(c.a.mark((function t(e){var r,a,s,o,i,u=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},n(!0),d("loading"),t.prev=5,t.next=8,fetch(e,{method:r,body:a,headers:s});case 8:if((o=t.sent).ok){t.next=11;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(o.status));case 11:return t.next=13,o.json();case 13:return i=t.sent,n(!1),t.abrupt("return",i);case 18:throw t.prev=18,t.t0=t.catch(5),n(!1),p(t.t0.message),d("error"),t.t0;case 24:case"end":return t.stop()}}),t,null,[[5,18]])})));return function(e){return t.apply(this,arguments)}}(),[]),error:l,clearError:Object(i.useCallback)((function(){p(null),d("loading")}),[]),process:h,setProcess:d}}(),r=e.loading,a=e.request,u=e.error,l=e.clearError,p=e.process,b=e.setProcess,f="https://gateway.marvel.com:443/v1/public/",h="apikey=b683494e1d6b469406ebff7c4af69cfb",d=function(){var t=Object(s.a)(c.a.mark((function t(){var e,r,n=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:210,t.next=3,a("".concat(f,"characters?limit=9&offset=").concat(e,"&").concat(h));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(O));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(s.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a("".concat(f,"characters?name=").concat(e,"&").concat(h));case 2:return r=t.sent,t.abrupt("return",r.data.results.map(O));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(s.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a("".concat(f,"characters/").concat(e,"?&").concat(h));case 2:return r=t.sent,t.abrupt("return",O(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(s.a)(c.a.mark((function t(){var e,r,n=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:0,t.next=3,a("".concat(f,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(h));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(x));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(s.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a("".concat(f,"comics/").concat(e,"?").concat(h));case 2:return r=t.sent,t.abrupt("return",x(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},x=function(t){var e;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return t={loading:r,error:u,clearError:l,process:p,setProcess:b,getAllCharacters:d,getCharacterByName:m,getCharacter:j},Object(n.a)(t,"clearError",l),Object(n.a)(t,"getAllComics",v),Object(n.a)(t,"getComic",g),t}},45:function(t,e,r){},46:function(t,e,r){"use strict";r(45);var n=r.p+"static/media/Avengers.4065c8f9.png",a=r.p+"static/media/Avengers_logo.9eaf2193.png",c=r(2);e.a=function(){return Object(c.jsxs)("div",{className:"app__banner",children:[Object(c.jsx)("img",{src:n,alt:"Avengers"}),Object(c.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(c.jsx)("br",{}),"Stay tuned!"]}),Object(c.jsx)("img",{src:a,alt:"Avengers logo"})]})}},83:function(t,e,r){"use strict";r.r(e);var n=r(5),a=r(3),c=r(0),s=r(39),o=r(24),i=r(37),u=r(46),l=r(2);e.default=function(t){var e=t.Component,r=t.dataType,p=Object(a.o)().id,b=Object(c.useState)(null),f=Object(n.a)(b,2),h=f[0],d=f[1],m=Object(s.a)(),j=m.loading,v=m.error,g=m.getComic,O=m.getCharacter,x=m.clearError;Object(c.useEffect)((function(){w()}),[p]);var w=function(){switch(x(),r){case"comic":g(p).then(k);break;case"character":O(p).then(k)}},k=function(t){d(t)},y=v?Object(l.jsx)(i.a,{}):null,C=j?Object(l.jsx)(o.a,{}):null,E=j||v||!h?null:Object(l.jsx)(e,{data:h});return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u.a,{}),y,C,E]})}}}]);
//# sourceMappingURL=7.62062ab5.chunk.js.map