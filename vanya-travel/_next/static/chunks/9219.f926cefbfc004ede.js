"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9219],{9219:function(l,e,t){t.r(e);var n=t(5893),i=t(7294),a=t(1664),s=t.n(a),o=t(5675),d=t.n(o),c=t(5007),r=t(6340),u=t(3299),h=t(2134),v=t(2261),m=t(4135);t(4276),t(3207),e.default=l=>{var e,t,a,o;let g=(0,c.I0)(),[b,x]=(0,i.useState)([]),{data:j,status:f}=(0,u.useSession)();(0,i.useEffect)(()=>{g((0,h.If)(!1)),"authenticated"===f&&N("blog")},[f]);let N=async l=>{await (0,r.KA)("blog").then(l=>{if(200===l.status){var e;x((null==l?void 0:null===(e=l.data)||void 0===e?void 0:e.length)?null==l?void 0:l.data:[])}}).catch(l=>{})},p=async(l,e)=>{await (0,r.VW)(l,"blog").then(l=>{N("blog")}).catch(l=>{}),g((0,h.If)(!1))},w=async(l,e)=>{g((0,h.If)(!0)),b.find(e=>e===l)?p(l,"blog"):(await (0,r.TM)(l,"blog").then(l=>{N("blog")}).catch(l=>{}),g((0,h.If)(!1)))};return(0,n.jsx)(n.Fragment,{children:(null==l?void 0:null===(e=l.blogList)||void 0===e?void 0:e.length)>0?(0,n.jsx)("div",{className:"blogs",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"text-center mb-3",children:[(0,n.jsxs)("div",{className:"new_bg_title mb-4 red",children:[(0,n.jsx)("h2",{className:"mb-3",children:null!==(a=null==l?void 0:l.title)&&void 0!==a?a:""}),(0,n.jsx)("span",{})]}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:null!==(o=null==l?void 0:l.content)&&void 0!==o?o:""}})]}),(0,n.jsx)(v.tq,{slidesPerView:"auto",spaceBetween:20,pagination:{dynamicBullets:!0},navigation:!0,modules:[m.tl,m.W_],className:"mySwiper",children:null==l?void 0:null===(t=l.blogList)||void 0===t?void 0:t.map((l,e)=>{var t,i,a,o,c;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(v.o5,{className:"mb-5",children:(0,n.jsxs)("div",{className:"blog-items mb-md-2 mb-0",children:[(null==b?void 0:b.find(e=>e===(null==l?void 0:l.ID)))?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s(),{href:"#!",className:"save-bookmark is-active",title:"Remove ",onClick:()=>"unauthenticated"===f?g((0,h.Nc)(!0)):p(null==l?void 0:l.ID,"blog"),children:(0,n.jsx)("span",{children:"Remove"})})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s(),{href:"#!",className:"save-bookmark ",title:"Save for Latter",onClick:()=>"unauthenticated"===f?g((0,h.Nc)(!0)):w(null==l?void 0:l.ID,"blog"),children:(0,n.jsx)("span",{children:"Save for Latter"})})}),(0,n.jsxs)(s(),{href:"/blogs/".concat(null==l?void 0:null===(t=l.category[0])||void 0===t?void 0:t.slug,"/").concat(encodeURIComponent(null==l?void 0:l.slug)),target:"_blank",title:l.title,children:[(0,n.jsx)(d(),{src:"".concat("https://cdn.triptotemples.com","/").concat(null==l?void 0:l.blogImage,"?tr=w-330,h-300,q=80"),alt:null!==(a=null==l?void 0:l.title)&&void 0!==a?a:"",title:null!==(o=null==l?void 0:l.title)&&void 0!==o?o:"",width:370,height:200,quality:80,loading:"lazy",style:{width:"100%",height:"auto"}}),(0,n.jsxs)("div",{className:"blog-desc",children:[(0,n.jsx)("h4",{className:"text-limit-2",children:l.title}),(0,n.jsx)("div",{className:"text-limit-3",dangerouslySetInnerHTML:{__html:null!==(c=null===(i=l.metaSeo)||void 0===i?void 0:i.description)&&void 0!==c?c:""}}),(0,n.jsx)("span",{children:"Read more"})]})]})]})},"hblogs".concat(e))})})})]})}):(0,n.jsx)(n.Fragment,{})})}}}]);