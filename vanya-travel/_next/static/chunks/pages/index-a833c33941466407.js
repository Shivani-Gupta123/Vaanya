(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{8312:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7485)}])},3841:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),function(e,l){for(var a in l)Object.defineProperty(e,a,{enumerable:!0,get:l[a]})}(l,{noSSR:function(){return o},default:function(){return c}});let s=a(8754);a(5893),a(7294);let t=s._(a(8354));function i(e){return{default:(null==e?void 0:e.default)||e}}function o(e,l){return delete l.webpack,delete l.modules,e(l)}function c(e,l){let a=t.default,s={loading:e=>{let{error:l,isLoading:a,pastDelay:s}=e;return null}};e instanceof Promise?s.loader=()=>e:"function"==typeof e?s.loader=e:"object"==typeof e&&(s={...s,...e});let c=(s={...s,...l}).loader;return(s.loadableGenerated&&(s={...s,...s.loadableGenerated},delete s.loadableGenerated),"boolean"!=typeof s.ssr||s.ssr)?a({...s,loader:()=>null!=c?c().then(i):Promise.resolve(i(()=>null))}):(delete s.webpack,delete s.modules,o(a,s))}("function"==typeof l.default||"object"==typeof l.default&&null!==l.default)&&void 0===l.default.__esModule&&(Object.defineProperty(l.default,"__esModule",{value:!0}),Object.assign(l.default,l),e.exports=l.default)},7309:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"LoadableContext",{enumerable:!0,get:function(){return s}});let s=a(8754)._(a(7294)).default.createContext(null)},8354:function(e,l,a){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return h}});let s=a(8754)._(a(7294)),t=a(7309),i=[],o=[],c=!1;function n(e){let l=e(),a={loading:!0,loaded:null,error:null};return a.promise=l.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class r{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:l}=this;e.loading&&("number"==typeof l.delay&&(0===l.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},l.delay)),"number"==typeof l.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},l.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,l){this._loadFn=e,this._opts=l,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,l){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},l),i=null;function n(){if(!i){let l=new r(e,a);i={getCurrentValue:l.getCurrentValue.bind(l),subscribe:l.subscribe.bind(l),retry:l.retry.bind(l),promise:l.promise.bind(l)}}return i.promise()}if(!c){let e=a.webpack?a.webpack():a.modules;e&&o.push(l=>{for(let a of e)if(l.includes(a))return n()})}function d(e,l){!function(){n();let e=s.default.useContext(t.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(l=>{e(l)})}();let o=s.default.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return s.default.useImperativeHandle(l,()=>({retry:i.retry}),[]),s.default.useMemo(()=>{var l;return o.loading||o.error?s.default.createElement(a.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:i.retry}):o.loaded?s.default.createElement((l=o.loaded)&&l.default?l.default:l,e):null},[e,o])}return d.preload=()=>n(),d.displayName="LoadableComponent",s.default.forwardRef(d)}(n,e)}function p(e,l){let a=[];for(;e.length;){let s=e.pop();a.push(s(l))}return Promise.all(a).then(()=>{if(e.length)return p(e,l)})}d.preloadAll=()=>new Promise((e,l)=>{p(i).then(e,l)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(l=>{let a=()=>(c=!0,l());p(o,e).then(a,a)})),window.__NEXT_PRELOADREADY=d.preloadReady;let h=d},7485:function(e,l,a){"use strict";a.r(l),a.d(l,{__N_SSG:function(){return M},default:function(){return C}});var s=a(5893),t=a(7294),i=a(4173),o=a(5675),c=a.n(o),n=a(1664),r=a.n(n),d=a(5007),p=a(2134),h=a(5152),m=a.n(h),u=a(2261),x=a(4135);a(4276),a(3207);let v=m()(()=>a.e(3765).then(a.bind(a,3765)),{loadableGenerated:{webpack:()=>[3765]},ssr:!0}),g=m()(()=>a.e(3927).then(a.bind(a,3927)),{loadableGenerated:{webpack:()=>[3927]},ssr:!0}),j=m()(()=>a.e(967).then(a.bind(a,967)),{loadableGenerated:{webpack:()=>[967]},ssr:!0}),w=m()(()=>a.e(9219).then(a.bind(a,9219)),{loadableGenerated:{webpack:()=>[9219]},ssr:!0}),N=m()(()=>a.e(8957).then(a.bind(a,4820)),{loadableGenerated:{webpack:()=>[4820]},ssr:!1});m()(()=>a.e(3850).then(a.bind(a,3850)),{loadableGenerated:{webpack:()=>[3850]},ssr:!1});let b=m()(()=>a.e(4587).then(a.bind(a,4587)),{loadableGenerated:{webpack:()=>[4587]}}),f=m()(()=>a.e(1993).then(a.bind(a,1993)),{loadableGenerated:{webpack:()=>[1993]},ssr:!1}),y=m()(()=>a.e(54).then(a.bind(a,54)),{loadableGenerated:{webpack:()=>[54]},ssr:!1}),_=m()(()=>a.e(1111).then(a.bind(a,1111)),{loadableGenerated:{webpack:()=>[1111]},ssr:!1}),k={"@context":"https://schema.org","@type":"WebSite",name:"Trip To Temples",alternateName:"TripToTemples",url:"https://www.triptotemples.com"},T={"@context":"http://schema.org/","@type":"LocalBusiness",url:"https://www.triptotemples.com",name:"Trip To Temples",email:"info@triptotemples.com",telephone:"+91-8510007751",image:"https://www.triptotemples.com/images/logo.png",sameAs:["https://www.facebook.com/triptotemples","https://www.instagram.com/triptotemples/","https://www.youtube.com/c/TripToTemples","https://twitter.com/triptotemples","https://in.linkedin.com/company/trip-to-temples"],address:{"@type":"PostalAddress",addressCountry:{"@type":"Country",name:"India"},streetAddress:"201, JOP Plaza, Sector 18,",addressLocality:"Noida",addressRegion:"Uttar Pradesh",postalCode:"201301"},priceRange:"Rs.15000-Rs.500000"},P={"@context":"https://schema.org","@graph":[{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Home",url:"https://www.triptotemples.com/"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Kailash Mansarovar",url:"https://www.triptotemples.com/package/kailash-mansarovar"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Adi Kailash",url:"https://www.triptotemples.com/package/adi-kailash"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Kailash Mansarovar",url:"https://www.triptotemples.com/package/kailash-mansarovar"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Uttarakhand Kailash",url:"https://www.triptotemples.com/package/uttarakhand-kailash"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Char Dham",url:"https://www.triptotemples.com/package/char-dham"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Blogs",url:"https://www.triptotemples.com/blogs"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"News",url:"https://www.triptotemples.com/news"}]},S={"@context":"http://schema.org","@type":"Organization",url:"https://www.triptotemples.com",name:"Trip To Temples",logo:"https://www.triptotemples.com/images/logo.png",sameAs:["https://www.facebook.com/triptotemples","https://www.instagram.com/triptotemples/","https://www.youtube.com/c/TripToTemples","https://twitter.com/triptotemples","https://in.linkedin.com/company/trip-to-temples"],contactPoint:[{"@type":"ContactPoint",email:"info@triptotemples.com",telephone:"+91-8510007751",contactType:"Customer Service",ContactOption:"Customer Service"}]};var M=!0;function C(e){var l,a,o,n,h,m,M,C,E,O,A,R,D,F;let I=(0,d.I0)();return(0,t.useEffect)(()=>{I((0,p.If)(!1))},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{title:"Kailash Mansarovar Yatra, Adi Kailash and Om Parvat Yatra,Pilgrimage with Pleasure, Temple Trip || Kailash Mansarovar Yatra | Free Registration",description:"Kailash Yatra 2024: India No 1 Kailash Yatra Agency, Early Booking Discount, By Helicopter, By Bus, Complete details &amp; Guidance, Booking Open 2024 at Trip To Temples - Kailash Yatra 2024 | Kailash Mansarovar Yatra Agency, Booking Open 2024, कैलाश मानसरोवर यात्रा हेलिकॉटर | Trip To Temples",keywords:"Kailash Yatra Booking 2024, Kilash Yatra, Mount Kailash, Mansarovar Yatra 2024, KMY, India's No 1 kailash yatra agency, kailash yatra packages 2024, best tour operator for kailash manasarovar yatra, trip to temples, triptotemples, kailash mansarovar, kailash mansarovar yatra, kailash mansarovar tour operator, kailash tour agents, kailash mansarovar yatra agency, hindu pilgrimage tour",metadataBase:"https://cdn.triptotemples.com/assets/img/hp-banner-2024-new.png",urlslug:"",schemaid:"home-schema",datepublished:null!==(R=null==e?void 0:null===(a=e.packagedetail)||void 0===a?void 0:null===(l=a.response)||void 0===l?void 0:l.publishedAt)&&void 0!==R?R:"",dateupdated:null!==(D=null==e?void 0:null===(n=e.packagedetail)||void 0===n?void 0:null===(o=n.response)||void 0===o?void 0:o.updatedAt)&&void 0!==D?D:"",datecreated:null!==(F=null==e?void 0:null===(m=e.packagedetail)||void 0===m?void 0:null===(h=m.response)||void 0===h?void 0:h.createdAt)&&void 0!==F?F:"",WebPage:k,LocalBusiness:T,NavigationElement:P,Organization:S}),(0,s.jsx)(v,{BannerList:null==e?void 0:null===(C=e.HomePageData)||void 0===C?void 0:null===(M=C.bannerData)||void 0===M?void 0:M.response}),(null==e?void 0:null===(O=e.HomePageData)||void 0===O?void 0:null===(E=O.response)||void 0===E?void 0:E.length)>0?(0,s.jsxs)(s.Fragment,{children:[null==e?void 0:null===(A=e.HomePageData)||void 0===A?void 0:A.response.map((e,l)=>{var a,t,i,o,n,d,h,m,v,g,b,y,k,T,P,S,M,C,E,O,A;return(0,s.jsxs)("div",{className:"",children:[(null==e?void 0:e.listType)=="package"?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"popular-packages pt-md-5 pt-1",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"text-center popular-packages-desc",children:[(0,s.jsxs)("div",{className:"new_bg_title",children:[(0,s.jsx)("h2",{children:null!==(i=null==e?void 0:e.title)&&void 0!==i?i:""}),(0,s.jsx)("span",{})]}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:null!==(o=null==e?void 0:e.description)&&void 0!==o?o:""}})]})})}),(0,s.jsx)(j,{packagelist:null!==(n=null==e?void 0:e.packages)&&void 0!==n?n:""})]}):"",(null==e?void 0:e.listType)=="blogs"?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(w,{title:null!==(d=null==e?void 0:e.title)&&void 0!==d?d:"",blogList:null!==(h=null==e?void 0:e.blogs)&&void 0!==h?h:""})}):"",(null==e?void 0:e.listType)=="video"?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(N,{title:null!==(m=null==e?void 0:e.title)&&void 0!==m?m:"",videoList:null!==(v=null==e?void 0:e.videos)&&void 0!==v?v:""})}):"",(null==e?void 0:e.listType)=="news"?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"top-news",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsxs)("div",{className:"new_bg_title",children:[(0,s.jsx)("h2",{children:null!==(g=null==e?void 0:e.title)&&void 0!==g?g:""}),(0,s.jsx)("span",{})]}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:null!==(b=null==e?void 0:e.description)&&void 0!==b?b:""}})]}),(0,s.jsx)(u.tq,{slidesPerView:"auto",spaceBetween:20,pagination:{dynamicBullets:!0},navigation:!0,modules:[x.tl,x.W_],className:"mySwiper",children:null==e?void 0:null===(a=e.news)||void 0===a?void 0:a.map((e,l)=>{var a,t,i;return(0,s.jsx)(u.o5,{className:"mb-5",children:(0,s.jsx)("div",{className:"news-items text-left text-start",children:(0,s.jsxs)(r(),{href:"news/".concat(null==e?void 0:null===(a=e.category)||void 0===a?void 0:a.slug,"/").concat(encodeURIComponent(null==e?void 0:e.slug)),className:"news-image",title:null==e?void 0:e.title,target:"_blank",children:[(0,s.jsx)(c(),{src:"".concat("https://cdn.triptotemples.com","/").concat(null==e?void 0:e.newsImage,"?tr=w-330,h-200,q-80"),alt:null!==(t=null==e?void 0:e.title)&&void 0!==t?t:"",title:null!==(i=null==e?void 0:e.title)&&void 0!==i?i:"",width:330,height:200,quality:80,loading:"lazy",style:{width:"100%",height:"auto"}}),(0,s.jsxs)("div",{className:"news-details",children:[(0,s.jsx)("h4",{className:"news-title",children:null==e?void 0:e.title}),(0,s.jsx)("div",{className:"text-limit",dangerouslySetInnerHTML:{__html:null==e?void 0:e.shortDescription}}),(0,s.jsx)("p",{className:"text-end mt-2",children:(0,s.jsx)("strong",{children:"Read Full Story"})})]})]})})},"news".concat(l))})})]})})}):"",(null==e?void 0:e.listType)=="category"?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"most-popular-destination",style:{background:null==e?void 0:e.backgroundColor},children:(0,s.jsx)("div",{className:"row p-0 m-0 ",children:(null==e?void 0:e.backgroundImageAlignment)=="right"?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"col-md-1 p-0 m-0 "}),(0,s.jsx)("div",{className:"col-md-6 col-xs-12 p-0 m-0",children:(0,s.jsxs)("div",{className:"desc-text",children:[(0,s.jsxs)("div",{className:"new_bg_title black",children:[(0,s.jsx)("h2",{children:null!==(y=null==e?void 0:e.title)&&void 0!==y?y:""}),(0,s.jsx)("span",{})]}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:null!==(k=null==e?void 0:e.description)&&void 0!==k?k:""}})]})}),(0,s.jsx)("div",{className:"col-md-5 col-xs-12 p-0 m-0",children:(0,s.jsx)(c(),{src:"".concat("https://cdn.triptotemples.com","/").concat(null!==(T=null==e?void 0:e.backgroundImage)&&void 0!==T?T:"","?tr=w-519,h-519,q-80"),alt:null!==(P=null==e?void 0:e.title)&&void 0!==P?P:"",title:null!==(S=null==e?void 0:e.title)&&void 0!==S?S:"",width:519,height:519,quality:80,loading:"lazy",style:{width:"100%",height:"auto"},className:"w-100"})})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"col-md-5 col-xs-12 p-0 m-0",children:(0,s.jsx)(c(),{src:"".concat("https://cdn.triptotemples.com","/").concat(null!==(M=null==e?void 0:e.backgroundImage)&&void 0!==M?M:"","?tr=w-519,h-519,q-80"),alt:null!==(C=null==e?void 0:e.title)&&void 0!==C?C:"",title:null!==(E=null==e?void 0:e.title)&&void 0!==E?E:"",width:519,height:519,quality:80,loading:"lazy",style:{width:"100%",height:"auto"},className:"w-100"})}),(0,s.jsx)("div",{className:"col-md-6 col-xs-12 p-0 m-0",children:(0,s.jsxs)("div",{className:"desc-text",children:[(0,s.jsxs)("div",{className:"new_bg_title black",children:[(0,s.jsx)("h2",{children:null!==(O=null==e?void 0:e.title)&&void 0!==O?O:""}),(0,s.jsx)("span",{})]}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:null!==(A=null==e?void 0:e.description)&&void 0!==A?A:""}})]})})]})})}),(0,s.jsx)("div",{className:"container destination-slider",children:(0,s.jsx)(u.tq,{slidesPerView:"auto",spaceBetween:20,pagination:{dynamicBullets:!0},navigation:!0,modules:[x.tl,x.W_],className:"mySwiper",children:null==e?void 0:null===(t=e.categories)||void 0===t?void 0:t.map((e,l)=>{var a,t;return(0,s.jsx)(u.o5,{className:"mb-5",children:(0,s.jsx)("div",{className:"hp-destinations count".concat(l+1),children:(0,s.jsxs)(r(),{href:"/package/"+(null==e?void 0:e.slug),title:null==e?void 0:e.title,onClick:()=>I((0,p.If)(!0)),children:[(0,s.jsx)("div",{className:"destination-count",children:l+1}),(0,s.jsx)(c(),{src:"".concat("https://cdn.triptotemples.com","/").concat(null==e?void 0:e.icon,"?tr=w-330,h-240,q-80"),alt:null!==(a=null==e?void 0:e.title)&&void 0!==a?a:"",title:null!==(t=null==e?void 0:e.title)&&void 0!==t?t:"",width:330,height:240,quality:80,loading:"lazy",style:{width:"100%",height:"auto"}}),(0,s.jsx)("h3",{children:null==e?void 0:e.anotherTitle}),(0,s.jsx)("span",{children:"View Details"})]})})},"homepkg".concat(l))})})})]}):"",(null==e?void 0:e.listType)==""?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_,{}),(0,s.jsx)(f,{}),(0,s.jsx)("div",{className:"mb-md-0 mb-4 d-block"})]}):""]},"home"+l)}),(0,s.jsx)(y,{}),(0,s.jsx)(b,{}),(0,s.jsx)(i.Ix,{})]}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"popular-packages",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"text-center popular-packages-desc",children:[(0,s.jsx)("h2",{className:"placeholder-glow text-center",children:(0,s.jsx)("span",{className:"placeholder col-6"})}),(0,s.jsxs)("p",{className:"card-text placeholder-glow",children:[(0,s.jsx)("span",{className:"placeholder col-7"}),(0,s.jsx)("span",{className:"placeholder col-4"}),(0,s.jsx)("span",{className:"placeholder col-4"}),(0,s.jsx)("span",{className:"placeholder col-6"}),(0,s.jsx)("span",{className:"placeholder col-8"})]})]}),(0,s.jsxs)("div",{className:"row ps-5 pe-5",children:[(0,s.jsx)("div",{className:"col-md-4",children:(0,s.jsxs)("div",{className:"package-items text-start ",children:[(0,s.jsx)("div",{className:"package-image",children:(0,s.jsxs)("svg",{className:"bd-placeholder-img card-img-top",width:"100%",height:"180",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder",preserveAspectRatio:"xMidYMid slice",focusable:"false",children:[(0,s.jsx)("title",{children:"Placeholder"}),(0,s.jsx)("rect",{width:"100%",height:"100%",fill:"#ccc"})]})}),(0,s.jsxs)("div",{className:"package-details",children:[(0,s.jsxs)("p",{className:"card-text mb-0 placeholder-glow",children:[(0,s.jsx)("span",{className:"placeholder col-7"}),(0,s.jsx)("span",{className:"placeholder col-4"}),(0,s.jsx)("span",{className:"placeholder col-4"}),(0,s.jsx)("span",{className:"placeholder col-6"}),(0,s.jsx)("span",{className:"placeholder col-8"})]}),(0,s.jsxs)("p",{className:"card-text placeholder-glow",children:[(0,s.jsx)("span",{className:"placeholder col-7"}),(0,s.jsx)("span",{className:"placeholder col-4"}),(0,s.jsx)("span",{className:"placeholder col-4"}),(0,s.jsx)("span",{className:"placeholder col-6"}),(0,s.jsx)("span",{className:"placeholder col-8"})]}),(0,s.jsxs)("ul",{className:"placeholder-glow",children:[(0,s.jsx)("li",{className:"placeholder p-3 m-1 col-2"}),(0,s.jsx)("li",{className:"placeholder p-3 m-1 col-2"}),(0,s.jsx)("li",{className:"placeholder p-3 m-1 col-2"}),(0,s.jsx)("li",{className:"placeholder p-3 m-1 col-2"}),(0,s.jsx)("li",{className:"placeholder p-3 m-1 col-2"})]})]}),(0,s.jsxs)("div",{className:"d-flex placeholder-glow",children:[(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(r(),{href:"#!",className:"request-for-price placeholder",children:"Request For Price"})}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(r(),{href:"#!",className:"view-details placeholder",children:"View Details"})})]})]})}),(0,s.jsx)("div",{className:"col-md-4",children:(0,s.jsxs)("div",{className:"package-items text-start ",children:[(0,s.jsx)("div",{className:"package-image",children:(0,s.jsxs)("svg",{className:"bd-placeholder-img card-img-top",width:"100%",height:"180",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder",preserveAspectRatio:"xMidYMid slice",focusable:"false",children:[(0,s.jsx)("title",{children:"Placeholder"}),(0,s.jsx)("rect",{width:"100%",height:"100%",fill:"#ccc"})]})}),(0,s.jsxs)("div",{className:"package-details",children:[(0,s.jsxs)("p",{className:"card-text mb-0 placeholder-glow",children:[(0,s.jsx)("span",{className:"placeholder col-7"}),(0,s.jsx)("span",{className:"placeholder col-4"}),(0,s.jsx)("span",{className:"placeholder col-4"}),(0,s.jsx)("span",{className:"placeholder col-6"}),(0,s.jsx)("span",{className:"placeholder col-8"})]}),(0,s.jsxs)("p",{className:"card-text placeholder-glow",children:[(0,s.jsx)("span",{className:"placeholder col-7"}),(0,s.jsx)("span",{className:"placeholder col-4"}),(0,s.jsx)("span",{className:"placeholder col-4"}),(0,s.jsx)("span",{className:"placeholder col-6"}),(0,s.jsx)("span",{className:"placeholder col-8"})]}),(0,s.jsxs)("ul",{className:"placeholder-glow",children:[(0,s.jsx)("li",{className:"placeholder p-3 m-1 col-2"}),(0,s.jsx)("li",{className:"placeholder p-3 m-1 col-2"}),(0,s.jsx)("li",{className:"placeholder p-3 m-1 col-2"}),(0,s.jsx)("li",{className:"placeholder p-3 m-1 col-2"}),(0,s.jsx)("li",{className:"placeholder p-3 m-1 col-2"})]})]}),(0,s.jsxs)("div",{className:"d-flex placeholder-glow",children:[(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(r(),{href:"#",className:"request-for-price placeholder",children:"Request For Price"})}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(r(),{href:"",className:"view-details placeholder",children:"View Details"})})]})]})}),(0,s.jsx)("div",{className:"col-md-4",children:(0,s.jsxs)("div",{className:"package-items text-start ",children:[(0,s.jsx)("div",{className:"package-image",children:(0,s.jsxs)("svg",{className:"bd-placeholder-img card-img-top",width:"100%",height:"180",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder",preserveAspectRatio:"xMidYMid slice",focusable:"false",children:[(0,s.jsx)("title",{children:"Placeholder"}),(0,s.jsx)("rect",{width:"100%",height:"100%",fill:"#ccc"})]})}),(0,s.jsxs)("div",{className:"package-details",children:[(0,s.jsxs)("p",{className:"card-text mb-0 placeholder-glow",children:[(0,s.jsx)("span",{className:"placeholder col-7"}),(0,s.jsx)("span",{className:"placeholder col-4"}),(0,s.jsx)("span",{className:"placeholder col-4"}),(0,s.jsx)("span",{className:"placeholder col-6"}),(0,s.jsx)("span",{className:"placeholder col-8"})]}),(0,s.jsxs)("p",{className:"card-text placeholder-glow",children:[(0,s.jsx)("span",{className:"placeholder col-7"}),(0,s.jsx)("span",{className:"placeholder col-4"}),(0,s.jsx)("span",{className:"placeholder col-4"}),(0,s.jsx)("span",{className:"placeholder col-6"}),(0,s.jsx)("span",{className:"placeholder col-8"})]}),(0,s.jsxs)("ul",{className:"placeholder-glow",children:[(0,s.jsx)("li",{className:"placeholder p-3 m-1 col-2"}),(0,s.jsx)("li",{className:"placeholder p-3 m-1 col-2"}),(0,s.jsx)("li",{className:"placeholder p-3 m-1 col-2"}),(0,s.jsx)("li",{className:"placeholder p-3 m-1 col-2"}),(0,s.jsx)("li",{className:"placeholder p-3 m-1 col-2"})]})]}),(0,s.jsxs)("div",{className:"d-flex placeholder-glow",children:[(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(r(),{href:"#",className:"request-for-price placeholder",children:"Request For Price"})}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(r(),{href:"",className:"view-details placeholder",children:"View Details"})})]})]})})]})]})})})]})}},3207:function(){},4276:function(){},5152:function(e,l,a){e.exports=a(3841)}},function(e){e.O(0,[6502,2888,9774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);