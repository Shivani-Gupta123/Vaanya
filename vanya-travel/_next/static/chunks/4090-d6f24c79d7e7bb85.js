"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4090],{4090:function(l,e,a){a.r(e);var i=a(5893),s=a(7294),n=a(3299),t=a(5007),c=a(4173),d=a(2134),o=a(1664),r=a.n(o),u=a(6340),h=a(5675),v=a.n(h);e.default=l=>{var e,a;let o=(0,t.I0)(),[h,p]=(0,s.useState)([]),{data:g,status:m}=(0,n.useSession)();(0,s.useEffect)(()=>{"authenticated"===m&&j("package")},[m]);let x=(l,e,a,i,s)=>{o((0,d.i6)(!0)),o((0,d.v2)({pid:l,ptitle:e,pslug:a,pimage:i,pduration:s}))},j=async l=>{await (0,u.KA)("package").then(l=>{if(200===l.status){var e;p((null==l?void 0:null===(e=l.data)||void 0===e?void 0:e.length)?null==l?void 0:l.data:[])}else c.Am.error("Something unexpected happened whie getting user wishlist please try again later")}).catch(l=>{c.Am.error("Something unexpected happened whie getting user wishlist please try again later")})},N=async(l,e)=>{await (0,u.VW)(l,"package").then(l=>{j("package")}).catch(l=>{c.Am.error("Something unexpected happened while removing item from wishlist please try again later")}),o((0,d.If)(!1))},k=async(l,e)=>{o((0,d.If)(!0)),h.find(e=>e===l)?N(l,"package"):(await (0,u.TM)(l,"package").then(l=>{j("blog")}).catch(l=>{c.Am.error("Something unexpected happened while adding to wishlist please try again later")}),o((0,d.If)(!1)))};return(0,i.jsx)(i.Fragment,{children:(null==l?void 0:null===(e=l.packagelist)||void 0===e?void 0:e.length)>0&&(0,i.jsx)("div",{className:"popular-packages",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"text-center popular-packages-desc",children:(0,i.jsxs)("div",{className:"new_bg_title mb-3",children:[(0,i.jsx)("h2",{children:null==l?void 0:l.title}),(0,i.jsx)("span",{})]})}),(0,i.jsx)("div",{className:"row",children:null==l?void 0:null===(a=l.packagelist)||void 0===a?void 0:a.map((l,e)=>{var a,s,n,t,c,u,p,g;return(0,i.jsx)("div",{className:"col-md-4",children:(0,i.jsxs)("div",{className:"package-items text-start ",children:[(null==h?void 0:h.find(e=>e===(null==l?void 0:l.ID)))?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r(),{href:"#!",className:"wishlist is-active",onClick:()=>"unauthenticated"===m?o((0,d.Nc)(!0)):N(null==l?void 0:l.ID,"package")})}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r(),{href:"#!",className:"wishlist",onClick:()=>"unauthenticated"===m?o((0,d.Nc)(!0)):k(null==l?void 0:l.ID,"package")})}),(0,i.jsxs)(r(),{className:"package-image",href:"/".concat(null==l?void 0:null===(a=l.category[0])||void 0===a?void 0:a.slug,"/").concat(null==l?void 0:l.slug),style:{maxHeight:"280px"},target:"_blank",children:[(0,i.jsx)(v(),{src:"".concat("https://cdn.triptotemples.com","/").concat(null==l?void 0:l.image,"?tr=w-370,h-200,q-80"),alt:null!==(c=null==l?void 0:l.title)&&void 0!==c?c:"",title:null!==(u=null==l?void 0:l.title)&&void 0!==u?u:"",width:370,height:200,quality:80,loading:"lazy",style:{width:"100%",height:"auto"}}),(0,i.jsx)("div",{className:"package-type ".concat((null==l?void 0:l.tourLabel)!=""?null==l?void 0:l.tourLabel.toLowerCase():"d-none"),children:null==l?void 0:l.tourLabel})]}),(0,i.jsxs)("div",{className:"package-details",children:[(0,i.jsx)("h4",{className:"package-title",children:""!=l.anotherTitle?l.anotherTitle:l.title}),(0,i.jsx)("p",{className:"package-duration",children:null!==(p=null==l?void 0:l.duration)&&void 0!==p?p:""}),(null==l?void 0:l.shortDescription)!=""?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"tour-highlights",dangerouslySetInnerHTML:{__html:null!==(g=null==l?void 0:l.shortDescription)&&void 0!==g?g:""}})}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:"pkg-incc",children:null==l?void 0:null===(s=l.food)||void 0===s?void 0:s.slice(0,4).map((l,e)=>(0,i.jsx)("li",{children:(0,i.jsxs)(r(),{href:"#",children:[(0,i.jsx)("img",{src:"".concat("https://cdn.triptotemples.com","/images/icons/").concat(l.split("|")[1],".svg"),alt:null==l?void 0:l.split("|")[1],title:null==l?void 0:l.split("|")[1],loading:"lazy"}),(0,i.jsx)("span",{children:null==l?void 0:l.split("|")[1]})]})},"footItem"+e))})}),(0,i.jsxs)("p",{className:"package-route",children:[(0,i.jsx)("strong",{children:"Route : "}),(0,i.jsx)("span",{className:(null==l?void 0:l.stayPlan)!=""&&(null==l?void 0:l.stayPlan.length)>0?"route-items":"d-none",children:null==l?void 0:null===(n=l.stayPlan)||void 0===n?void 0:n.slice(0,3).map((l,e)=>(0,i.jsxs)("span",{children:[l,"  ",(0,i.jsx)("span",{className:"last",children:"→"})]},"stay"+e))}),(0,i.jsxs)("span",{className:(null==l?void 0:l.stayPlan.length)>3?" more":"d-none more",children:["+",(null==l?void 0:l.stayPlan.length)-3]})]})]}),(0,i.jsxs)("div",{className:"d-flex",children:[(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(r(),{href:"#!",onClick:()=>x(null==l?void 0:l.ID,null==l?void 0:l.title,null==l?void 0:l.slug,null==l?void 0:l.image,null==l?void 0:l.duration),className:"request-for-price",children:" Enquire Now"})}),(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(r(),{href:"/".concat(null==l?void 0:null===(t=l.category[0])||void 0===t?void 0:t.slug,"/").concat(null==l?void 0:l.slug),className:"view-details",onClick:()=>o((0,d.If)(!0)),children:"View Details"})})]})]})},e)})})]})})})}}}]);