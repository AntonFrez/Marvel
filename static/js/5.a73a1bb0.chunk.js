(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{38:function(e,t,n){"use strict";var r=n.p+"static/media/error.42292aa1.gif",c=n(2);t.a=function(){return Object(c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})}},39:function(e,t,n){"use strict";var r=n(4),c=n.n(r),a=n(6),i=n(5),s=n(0);t.a=function(){var e=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(s.useState)(null),u=Object(i.a)(o,2),l=u[0],p=u[1];return{loading:n,request:Object(s.useCallback)(function(){var e=Object(a.a)(c.a.mark((function e(t){var n,a,i,s,o,u=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,i=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},r(!0),e.prev=4,e.next=7,fetch(t,{method:n,body:a,headers:i});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return o=e.sent,r(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),r(!1),p(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:l,clearError:Object(s.useCallback)((function(){return p(null)}),[])}}(),t=e.loading,n=e.request,r=e.error,o=e.clearError,u="https://gateway.marvel.com:443/v1/public/",l="apikey=b683494e1d6b469406ebff7c4af69cfb",p=function(){var e=Object(a.a)(c.a.mark((function e(){var t,r,a=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:210,e.next=3,n("".concat(u,"characters?limit=9&offset=").concat(t,"&").concat(l));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(h));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(u,"characters/").concat(t,"?&").concat(l));case 2:return r=e.sent,e.abrupt("return",h(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(c.a.mark((function e(){var t,r,a=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.next=3,n("".concat(u,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(l));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(d));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(u,"comics/").concat(t,"?").concat(l));case 2:return r=e.sent,e.abrupt("return",d(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},d=function(e){var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:r,getAllCharacters:p,getCharacter:m,clearError:o,getAllComics:b,getComic:f}}},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n(3),a=n(11),i=n(0),s=n(22),o=n(38),u=n(39),l=(n(49),n(2)),p=function(e){var t=e.comic,n=t.title,r=t.description,c=t.pageCount,i=t.thumbnail,s=t.language,o=t.price;return Object(l.jsxs)("div",{className:"single-comic",children:[Object(l.jsx)("img",{src:i,alt:n,className:"single-comic__img"}),Object(l.jsxs)("div",{className:"single-comic__info",children:[Object(l.jsx)("h2",{className:"single-comic__name",children:n}),Object(l.jsx)("p",{className:"single-comic__descr",children:r}),Object(l.jsx)("p",{className:"single-comic__descr",children:c}),Object(l.jsxs)("p",{className:"single-comic__descr",children:["Language: ",s]}),Object(l.jsx)("div",{className:"single-comic__price",children:o})]}),Object(l.jsx)(a.b,{to:"/Marvel/comics",className:"single-comic__back",children:"Back to all"})]})};t.default=function(){var e=Object(c.o)().comicId,t=Object(i.useState)(null),n=Object(r.a)(t,2),a=n[0],m=n[1],b=Object(u.a)(),f=b.loading,h=b.error,d=b.getComic,j=b.clearError;Object(i.useEffect)((function(){g()}),[e]);var g=function(){j(),d(e).then(v)},v=function(e){m(e)},x=h?Object(l.jsx)(o.a,{}):null,O=f?Object(l.jsx)(s.a,{}):null,w=f||h||!a?null:Object(l.jsx)(p,{comic:a});return Object(l.jsxs)(l.Fragment,{children:[x,O,w]})}}}]);
//# sourceMappingURL=5.a73a1bb0.chunk.js.map