(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4649,3927,9219,8957,4587,54,1111],{2670:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/package/[slug]",function(){return t(82)}])},4587:function(e,l,t){"use strict";t.r(l);var i=t(5893);t(7294);var o=t(5007),n=t(2134);l.default=e=>{let l=(0,o.I0)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"cta-ripple d-none d-md-block d-sm-block",onClick:()=>l((0,n.xg)(!0)),children:(0,i.jsx)("div",{className:"cta-btn-ripple","data-bs-toggle":"modal","data-bs-target":"#ClickToCallModal",children:(0,i.jsx)("div",{className:"cta-inner cta-active",id:"mobile_icon_change",children:(0,i.jsx)("span",{children:(0,i.jsx)("img",{loading:"lazy",width:"20px",height:"20px",alt:"Talk to TTT Expert !",src:"/images/right-call.svg"})})})})})})}},9219:function(e,l,t){"use strict";t.r(l);var i=t(5893),o=t(7294),n=t(1664),s=t.n(n),a=t(5675),d=t.n(a),c=t(5007),r=t(6340),v=t(3299),m=t(2134),p=t(2261),u=t(4135);t(4276),t(3207),l.default=e=>{var l,t,n,a;let h=(0,c.I0)(),[g,x]=(0,o.useState)([]),{data:j,status:w}=(0,v.useSession)();(0,o.useEffect)(()=>{h((0,m.If)(!1)),"authenticated"===w&&y("blog")},[w]);let y=async e=>{await (0,r.KA)("blog").then(e=>{if(200===e.status){var l;x((null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.length)?null==e?void 0:e.data:[])}}).catch(e=>{})},N=async(e,l)=>{await (0,r.VW)(e,"blog").then(e=>{y("blog")}).catch(e=>{}),h((0,m.If)(!1))},b=async(e,l)=>{h((0,m.If)(!0)),g.find(l=>l===e)?N(e,"blog"):(await (0,r.TM)(e,"blog").then(e=>{y("blog")}).catch(e=>{}),h((0,m.If)(!1)))};return(0,i.jsx)(i.Fragment,{children:(null==e?void 0:null===(l=e.blogList)||void 0===l?void 0:l.length)>0?(0,i.jsx)("div",{className:"blogs",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"text-center mb-3",children:[(0,i.jsxs)("div",{className:"new_bg_title mb-4 red",children:[(0,i.jsx)("h2",{className:"mb-3",children:null!==(n=null==e?void 0:e.title)&&void 0!==n?n:""}),(0,i.jsx)("span",{})]}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:null!==(a=null==e?void 0:e.content)&&void 0!==a?a:""}})]}),(0,i.jsx)(p.tq,{slidesPerView:"auto",spaceBetween:20,pagination:{dynamicBullets:!0},navigation:!0,modules:[u.tl,u.W_],className:"mySwiper",children:null==e?void 0:null===(t=e.blogList)||void 0===t?void 0:t.map((e,l)=>{var t,o,n,a,c;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(p.o5,{className:"mb-5",children:(0,i.jsxs)("div",{className:"blog-items mb-md-2 mb-0",children:[(null==g?void 0:g.find(l=>l===(null==e?void 0:e.ID)))?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s(),{href:"#!",className:"save-bookmark is-active",title:"Remove ",onClick:()=>"unauthenticated"===w?h((0,m.Nc)(!0)):N(null==e?void 0:e.ID,"blog"),children:(0,i.jsx)("span",{children:"Remove"})})}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s(),{href:"#!",className:"save-bookmark ",title:"Save for Latter",onClick:()=>"unauthenticated"===w?h((0,m.Nc)(!0)):b(null==e?void 0:e.ID,"blog"),children:(0,i.jsx)("span",{children:"Save for Latter"})})}),(0,i.jsxs)(s(),{href:"/blogs/".concat(null==e?void 0:null===(t=e.category[0])||void 0===t?void 0:t.slug,"/").concat(encodeURIComponent(null==e?void 0:e.slug)),target:"_blank",title:e.title,children:[(0,i.jsx)(d(),{src:"".concat("https://cdn.triptotemples.com","/").concat(null==e?void 0:e.blogImage,"?tr=w-330,h-300,q=80"),alt:null!==(n=null==e?void 0:e.title)&&void 0!==n?n:"",title:null!==(a=null==e?void 0:e.title)&&void 0!==a?a:"",width:370,height:200,quality:80,loading:"lazy",style:{width:"100%",height:"auto"}}),(0,i.jsxs)("div",{className:"blog-desc",children:[(0,i.jsx)("h4",{className:"text-limit-2",children:e.title}),(0,i.jsx)("div",{className:"text-limit-3",dangerouslySetInnerHTML:{__html:null!==(c=null===(o=e.metaSeo)||void 0===o?void 0:o.description)&&void 0!==c?c:""}}),(0,i.jsx)("span",{children:"Read more"})]})]})]})},"hblogs".concat(l))})})})]})}):(0,i.jsx)(i.Fragment,{})})}},3927:function(e,l,t){"use strict";t.r(l);var i=t(5893),o=t(9008),n=t.n(o),s=t(1163);l.default=e=>{let{title:l,description:t,NewsArticle:o,WebPage:a,BreadcrumbList:d,LocalBusiness:c,NavigationElement:r,Organization:v,ImageObject:m,keywords:p,urlslug:u,schemaid:h,datepublished:g,dateupdated:x,datecreated:j,metadataBase:w,itinerary:y}=e,N=(0,s.useRouter)(),b="".concat(N.asPath);return new URL(w),u=void 0===u?"https://www.triptotemples.com"+b:"https://www.triptotemples.com"+u,(0,i.jsxs)(n(),{children:[(0,i.jsx)("title",{children:l}),(0,i.jsx)("meta",{name:"description",content:t}),(0,i.jsx)("meta",{name:"Keywords",content:p}),(0,i.jsx)("link",{rel:"canonical",href:"".concat(u)}),(0,i.jsx)("meta",{property:"og:title",content:l}),(0,i.jsx)("meta",{property:"og:description",content:t}),(0,i.jsx)("meta",{property:"og:site_name",content:"Trip To Temples"}),(0,i.jsx)("meta",{property:"og:image",content:w}),(0,i.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,i.jsx)("meta",{property:"og:image:height",content:"630"}),(0,i.jsx)("meta",{property:"article:published_time",content:"undefined"}),(0,i.jsx)("meta",{property:"article:modified_time",content:"undefined"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:description",content:t}),(0,i.jsx)("meta",{name:"twitter:title",content:l}),(0,i.jsx)("meta",{name:"twitter:site",content:"@triptotemples"}),(0,i.jsx)("meta",{name:"twitter:image",content:w}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@triptotemples"}),(0,i.jsx)("meta",{property:"fb:app_id",content:""}),(0,i.jsx)("meta",{httpEquiv:"Expires",content:"30"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),(0,i.jsx)("meta",{name:"theme-color",content:"#fe5246"}),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#8cc641"}),(0,i.jsx)("meta",{name:"google",content:"nositelinkssearchbox"}),(0,i.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,i.jsx)("meta",{httpEquiv:"Cache-control",content:"public"}),(0,i.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=UTF-8"}),(0,i.jsx)("meta",{name:"classification",content:"Travel"}),(0,i.jsx)("meta",{name:"GoogleBot",content:"Index, Follow"}),(0,i.jsx)("meta",{name:"YahooSeeker",content:"Index, Follow"}),(0,i.jsx)("meta",{name:"MSNBOT",content:"Index, Follow"}),(0,i.jsx)("meta",{name:"author",content:"Trip To Temples"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{name:"google-site-verification",content:""}),(0,i.jsx)("meta",{name:"language",content:"English"}),(0,i.jsx)("meta",{name:"country",content:"India"}),(0,i.jsx)("meta",{name:"distribution",content:"Global"}),(0,i.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/images/favicon.png"}),(0,i.jsx)("meta",{name:"google-site-verification",content:"2sdhb13MYKTv-0bcepAVo1N8782u4mid2DlzqybzXT8"}),(0,i.jsx)("meta",{name:"google-site-verification",content:"WGBfKb3jha_r-d4ajJL7z5FbSLBcYjrB3eJQxh5S5ok"}),(0,i.jsx)("meta",{name:"robots",content:"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}),(0,i.jsx)("script",{id:h,type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o)}}),(0,i.jsx)("script",{id:h,type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(d)}}),(0,i.jsx)("script",{id:h,type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a)}}),(0,i.jsx)("script",{id:h,type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(c)}}),(0,i.jsx)("script",{id:h,type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(r)}}),(0,i.jsx)("script",{id:h,type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(v)}}),(0,i.jsx)("script",{id:h,type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(m)}})]})}},54:function(e,l,t){"use strict";t.r(l);var i=t(5893),o=t(7294),n=t(5675),s=t.n(n),a=t(6340),d=t(2261),c=t(4135);t(4276),t(3207),t(7725),l.default=()=>{let[e,l]=(0,o.useState)([]),t=async()=>{await (0,a.lz)().then(e=>{200===e.status&&l(e.data)}).catch(e=>{})};return(0,o.useEffect)(()=>{t()},[]),(0,i.jsx)(i.Fragment,{children:null!=e&&(null==e?void 0:e.length)>0?(0,i.jsx)("div",{className:"home-reviews",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"new_bg_title white mb-5 text-center",children:[(0,i.jsx)("h2",{className:"mb-3",children:"We Appreciate Our Customers Feedbacks!"}),(0,i.jsx)("span",{})]}),(0,i.jsx)(d.tq,{slidesPerView:"auto",spaceBetween:20,navigation:!0,pagination:{dynamicBullets:!0},modules:[c.tl,c.W_],className:"mySwiper",children:null==e?void 0:e.map((e,l)=>{var t,o,n,a;return(0,i.jsx)(d.o5,{className:"mb-3",children:(0,i.jsxs)("div",{className:"reviews-items",children:[(0,i.jsx)(s(),{src:"".concat("https://cdn.triptotemples.com","/").concat(null!==(t=null==e?void 0:e.images[0].image)&&void 0!==t?t:""),alt:null!==(o=null==e?void 0:e.title)&&void 0!==o?o:"",title:null!==(n=null==e?void 0:e.title)&&void 0!==n?n:"",width:100,height:100,quality:80,style:{width:"100%",height:"auto"},className:"pic"}),(0,i.jsxs)("h4",{children:[e.title,(0,i.jsx)("span",{children:e.createdBy})]}),(0,i.jsx)(s(),{src:"".concat("https://cdn.triptotemples.com","/images/star.png"),width:95,height:15,alt:"star"}),(0,i.jsx)("div",{className:"text-limit-3",dangerouslySetInnerHTML:{__html:null!==(a=null==e?void 0:e.comment)&&void 0!==a?a:""}})]})},"r".concat(l))})})]})}):(0,i.jsx)(i.Fragment,{})})}},4820:function(e,l,t){"use strict";t.r(l);var i=t(5893),o=t(7294),n=t(1664),s=t.n(n),a=t(1190),d=t(5675),c=t.n(d),r=t(2261),v=t(4135);t(4276),t(3207),l.default=e=>{var l,t,n,d;let[m,p]=(0,o.useState)(!1),[u,h]=(0,o.useState)(""),[g,x]=(0,o.useState)(""),j=(e,l)=>{h(e),x(l),p(!0)},w=()=>{p(!1)};return(0,i.jsxs)(i.Fragment,{children:[(null==e?void 0:e.videoList)!=null&&(null==e?void 0:null===(l=e.videoList)||void 0===l?void 0:l.length)>1?(0,i.jsx)("div",{className:"popular-yatra-videos mb-md-0 mb-0",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"new_bg_title red mb-4 text-center",children:[(0,i.jsx)("h2",{className:"mb-0",children:null!==(d=null==e?void 0:e.title)&&void 0!==d?d:""}),(0,i.jsx)("span",{})]}),(0,i.jsx)(r.tq,{slidesPerView:"auto",spaceBetween:20,pagination:{dynamicBullets:!0},navigation:!0,modules:[v.tl,v.W_],className:"mySwiper",children:(null==e?void 0:e.videoList)!=""&&(null==e?void 0:null===(t=e.videoList)||void 0===t?void 0:t.map((e,l)=>{var t,o,n;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.o5,{children:(0,i.jsx)(s(),{href:"#!",onClick:()=>j(null==e?void 0:e.videoUrl,null==e?void 0:e.title),children:(0,i.jsxs)("div",{className:"yatra-videos mb-md-3 mb-0",children:[(null==e?void 0:e.image)!=null&&(null==e?void 0:e.image)!=""&&(null==e?void 0:e.videourl)!=""?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"video-thumb",children:[(0,i.jsx)(c(),{src:"".concat("https://cdn.triptotemples.com","/").concat(null==e?void 0:e.image,"?tr=w-352,h-198"),alt:null!==(t=null==e?void 0:e.title)&&void 0!==t?t:"",title:null!==(o=null==e?void 0:e.title)&&void 0!==o?o:"",width:352,height:198,quality:80,style:{width:"100%",height:"auto"}}),(0,i.jsx)("div",{className:"play-icon"})]})}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("iframe",{className:"w-100",height:"198",src:null==e?void 0:e.videoUrl})}),(0,i.jsxs)("div",{className:"video-details",children:[(0,i.jsx)("h3",{children:e.title}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:null!==(n=null==e?void 0:e.description)&&void 0!==n?n:""}})]})]})})},"vv+".concat(l))})}))})]})}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)(a.Z,{open:m,onClose:w,center:!0,classNames:{modal:"modal fade show"},children:(0,i.jsx)("div",{className:"modal-dialog modal-lg",children:(0,i.jsxs)("div",{className:"modal-content",children:[(0,i.jsxs)("div",{className:"modal-header",children:[(0,i.jsx)("h5",{className:"modal-title",style:{fontSize:"18px"},children:g}),(0,i.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:w})]}),(0,i.jsxs)("div",{className:"modal-body edit-modal",children:[(0,i.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",marginBottom:"15px",height:0},children:(0,i.jsx)("iframe",{src:u,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"YouTube Video",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),(0,i.jsx)("div",{className:"mb-3",children:(0,i.jsx)(r.tq,{slidesPerView:"auto",spaceBetween:20,pagination:{dynamicBullets:!0},navigation:!0,modules:[v.tl,v.W_],className:"mySwiper",children:(null==e?void 0:e.videoList)!=""&&(null==e?void 0:null===(n=e.videoList)||void 0===n?void 0:n.map((e,l)=>{var t;return(0,i.jsx)(r.o5,{children:(0,i.jsx)(s(),{href:"#!",onClick:()=>j(null==e?void 0:e.videoUrl,null==e?void 0:e.title),children:(0,i.jsx)("div",{className:"yatra-videos",children:(null==e?void 0:e.image)!=null&&(null==e?void 0:e.image)!=""&&(null==e?void 0:e.videoUrl)!=""?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"video-thumb",children:(0,i.jsx)("img",{src:"".concat("https://cdn.triptotemples.com","/").concat(null!==(t=null==e?void 0:e.image)&&void 0!==t?t:"","?tr=w-330,h-200"),alt:null==e?void 0:e.title,title:null==e?void 0:e.title,className:"w-100"})})}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("iframe",{className:"w-100",height:"198",src:null==e?void 0:e.videoUrl})})})})},"videos"+l)}))})})]})]})})})]})}},1111:function(e,l,t){"use strict";t.r(l);var i=t(5893);t(7294);var o=t(5007),n=t(8339);l.default=()=>((0,o.I0)(),(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"talk-to-expert mt-md-5 mb-5",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-1"}),(0,i.jsx)("div",{className:"col-md-6  px-i",children:(0,i.jsxs)("div",{className:"p-md-5 pb-md-4 text-white text-center p-4",children:[(0,i.jsx)("h3",{children:"Talk to Kailash Yatra Expert"}),(0,i.jsxs)("p",{children:["Submit your contact number. ",(0,i.jsx)("br",{}),"Kailash Yatra Expert will call You within 1 minute.",(0,i.jsx)("br",{}),"(24X7 Free Service, India Number only)"]}),(0,i.jsx)("img",{src:"/images/icons/1x/call-icon.png",className:"mt-2 mb-3",loading:"lazy"}),(0,i.jsx)(n.Z,{})]})}),(0,i.jsxs)("div",{className:"col-md-5 px-i",children:[(0,i.jsx)("img",{src:"/images/talk-to-expert-image.png",style:{maxWidth:"480px",float:"right"},className:"w-100 d-none d-md-block m-90",loading:"lazy"}),(0,i.jsx)("img",{src:"/images/talk-to-expert-image-mobile.png",style:{maxWidth:"480px",float:"right"},className:"w-100 d-block d-md-none m-90",loading:"lazy"})]})]})})}))},82:function(e,l,t){"use strict";t.r(l),t.d(l,{__N_SSG:function(){return k}});var i=t(5893),o=t(7294),n=t(3850),s=t(4587),a=t(4173),d=t(3927),c=t(1190),r=t(4090),v=t(9219),m=t(4820),p=t(54),u=t(5007),h=t(2134),g=t(3299),x=t(1664),j=t.n(x),w=t(1163),y=t(5476),N=t(1111),b=t(8339),k=!0;l.default=e=>{var l,t,x,k,f,T,_,S,I,C,L,F,E,M,B,P,O,R,H,z,A,U,q,K,W,J,D,V,Y,X,Z,G,Q,$,ee,el,et,ei,eo,en,es,ea,ed,ec,er,ev,em,ep,eu,eh,eg,ex,ej,ew,ey,eN,eb,ek,ef,eT,e_,eS,eI,eC,eL,eF,eE,eM,eB,eP,eO,eR,eH,ez,eA,eU,eq,eK,eW,eJ,eD,eV,eY,eX,eZ,eG,eQ,e$,e0,e1,e2,e3,e5,e4,e7,e9,e8,e6,le,ll,lt,li,lo,ln,ls,la,ld,lc,lr,lv,lm,lp,lu,lh,lg,lx,lj,lw,ly,lN,lb,lk,lf,lT,l_,lS,lI,lC,lL,lF,lE,lM,lB,lP,lO,lR,lH,lz,lA,lU,lq,lK,lW,lJ,lD,lV,lY,lX,lZ,lG,lQ,l$;let l0=(0,u.I0)(),l1=(0,w.useRouter)();l1.asPath;let[l2,l3]=(0,o.useState)(!1),l5=()=>{l3(!1)},[l4,l7]=(0,o.useState)(""),[l9,l8]=(0,o.useState)("Default Title"),[l6,te]=(0,o.useState)("Default Title"),{data:tl,status:tt}=(0,g.useSession)();(0,o.useEffect)(()=>{if("undefined"!=typeof document){var l,t;l7("".concat(window.location.origin).concat(l1.asPath)),l8((0,y.X)("".concat(null==e?void 0:null===(t=e.packagedetail)||void 0===t?void 0:null===(l=t.response)||void 0===l?void 0:l.slug))),te("".concat(document.title))}l0((0,h.If)(!1))},[e]);let ti={"@context":"https://schema.org/","@type":"Product","@graph":function(e){let l=[];return null!=e&&(null==e?void 0:e.length)>0&&e.map((e,t)=>{var i,o;l.push({"@context":"https://schema.org/","@type":"Product",name:(null==e?void 0:e.title)||"",image:"".concat("https://cdn.triptotemples.com","/").concat(null==e?void 0:e.image),description:(null==e?void 0:e.description).replace(/<[^>]*>/g,"")||"",brand:{"@type":"Brand",name:"Trip To Temples"},offers:{"@type":"Offer",url:"https://www.triptotemples.com"+"/".concat(null==e?void 0:null===(i=e.category[0])||void 0===i?void 0:i.slug,"/").concat(null==e?void 0:e.slug),priceCurrency:"INR",price:null==e?void 0:null===(o=e.prices)||void 0===o?void 0:o.inrPrice}})}),l}(null==e?void 0:null===(t=e.packagedetail)||void 0===t?void 0:null===(l=t.packagerelatedDataresponse)||void 0===l?void 0:l.response)},to={"@context":"https://schema.org","@type":"WebPage",name:null!==(lF=null==e?void 0:null===(k=e.packagedetail)||void 0===k?void 0:null===(x=k.response)||void 0===x?void 0:x.title)&&void 0!==lF?lF:"",description:null!==(lE=null==e?void 0:null===(_=e.packagedetail)||void 0===_?void 0:null===(T=_.response)||void 0===T?void 0:null===(f=T.metaSeo)||void 0===f?void 0:f.description)&&void 0!==lE?lE:"",keywords:(null==e?void 0:null===(C=e.packagedetail)||void 0===C?void 0:null===(I=C.response)||void 0===I?void 0:null===(S=I.metaSeo)||void 0===S?void 0:S.keyword.length)>0?null==e?void 0:null===(E=e.packagedetail)||void 0===E?void 0:null===(F=E.response)||void 0===F?void 0:null===(L=F.metaSeo)||void 0===L?void 0:L.keyword[0]:"",url:"https://www.triptotemples.com"+"/package/".concat(null==e?void 0:null===(B=e.packagedetail)||void 0===B?void 0:null===(M=B.response)||void 0===M?void 0:M.slug)},tn={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.triptotemples.com"},{"@type":"ListItem",position:2,name:null!==(lM=null==e?void 0:null===(O=e.packagedetail)||void 0===O?void 0:null===(P=O.response)||void 0===P?void 0:P.title)&&void 0!==lM?lM:"",item:"https://www.triptotemples.com"+"/package/".concat(null==e?void 0:null===(H=e.packagedetail)||void 0===H?void 0:null===(R=H.response)||void 0===R?void 0:R.slug)}]},ts={"@context":"https://schema.org","@type":"ImageObject",url:"".concat("https://cdn.triptotemples.com","/").concat(null==e?void 0:null===(A=e.packagedetail)||void 0===A?void 0:null===(z=A.response)||void 0===z?void 0:z.bannerImage),width:900,height:600,caption:null==e?void 0:null===(q=e.packagedetail)||void 0===q?void 0:null===(U=q.response)||void 0===U?void 0:U.title,author:{"@type":"Person",name:"Trip To Temples"},publisher:{"@type":"Organization",name:"Trip To Temples",logo:{"@type":"ImageObject",url:"https://www.triptotemples.com/images/logo.png"}},datePublished:null==e?void 0:null===(W=e.packagedetail)||void 0===W?void 0:null===(K=W.response)||void 0===K?void 0:K.publishedAt};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.default,{title:null!==(lB=null==e?void 0:null===(V=e.packagedetail)||void 0===V?void 0:null===(D=V.response)||void 0===D?void 0:null===(J=D.metaSeo)||void 0===J?void 0:J.title)&&void 0!==lB?lB:"",description:null!==(lP=null==e?void 0:null===(Z=e.packagedetail)||void 0===Z?void 0:null===(X=Z.response)||void 0===X?void 0:null===(Y=X.metaSeo)||void 0===Y?void 0:Y.description)&&void 0!==lP?lP:"",urlslug:"/package/"+(null==e?void 0:null===(Q=e.packagedetail)||void 0===Q?void 0:null===(G=Q.response)||void 0===G?void 0:G.slug),keywords:(null==e?void 0:null===(el=e.packagedetail)||void 0===el?void 0:null===(ee=el.response)||void 0===ee?void 0:null===($=ee.metaSeo)||void 0===$?void 0:$.keyword.length)>0?null===(ei=e.packagedetail.response.response)||void 0===ei?void 0:null===(et=ei.metaSeo)||void 0===et?void 0:et.keyword[0]:"",metadataBase:"".concat("https://cdn.triptotemples.com","/").concat(null==e?void 0:null===(en=e.packagedetail)||void 0===en?void 0:null===(eo=en.response)||void 0===eo?void 0:eo.bannerImage),NewsArticle:ti,WebPage:to,BreadcrumbList:tn,LocalBusiness:{"@context":"http://schema.org/","@type":"LocalBusiness",url:"https://www.triptotemples.com",name:"Trip To Temples",email:"info@triptotemples.com",telephone:"+91-8510007751",image:"https://www.triptotemples.com/images/logo.png",sameAs:["https://www.facebook.com/triptotemples","https://www.instagram.com/triptotemples/","https://www.youtube.com/c/TripToTemples","https://twitter.com/triptotemples","https://in.linkedin.com/company/trip-to-temples"],address:{"@type":"PostalAddress",addressCountry:{"@type":"Country",name:"India"},streetAddress:"201, JOP Plaza, Sector 18,",addressLocality:"Noida",addressRegion:"Uttar Pradesh",postalCode:"201301"},priceRange:"Rs.15000-Rs.500000"},NavigationElement:{"@context":"https://schema.org","@graph":[{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Home",url:"https://www.triptotemples.com/"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Kailash Mansarovar",url:"https://www.triptotemples.com/package/kailash-mansarovar"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Adi Kailash",url:"https://www.triptotemples.com/package/adi-kailash"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Kailash Mansarovar",url:"https://www.triptotemples.com/package/kailash-mansarovar"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Uttarakhand Kailash",url:"https://www.triptotemples.com/package/uttarakhand-kailash"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Char Dham",url:"https://www.triptotemples.com/package/char-dham"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Blogs",url:"https://www.triptotemples.com/blogs"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"News",url:"https://www.triptotemples.com/news"}]},Organization:{"@context":"http://schema.org","@type":"Organization",url:"https://www.triptotemples.com",name:"Trip To Temples",logo:"https://www.triptotemples.com/images/logo.png",sameAs:["https://www.facebook.com/triptotemples","https://www.instagram.com/triptotemples/","https://www.youtube.com/c/TripToTemples","https://twitter.com/triptotemples","https://in.linkedin.com/company/trip-to-temples"],contactPoint:[{"@type":"ContactPoint",email:"info@triptotemples.com",telephone:"+91-8510007751",contactType:"Customer Service",ContactOption:"Customer Service"}]},ImageObject:ts}),(0,i.jsx)("div",{className:"home-banner",children:(null==e?void 0:null===(ea=e.packagedetail)||void 0===ea?void 0:null===(es=ea.response)||void 0===es?void 0:es.bannerImage)=="assets/images/no-image.svg"?(0,i.jsx)("img",{src:"https://cdn.triptotemples.com/banner/65e5b2fc36663eab749c89e6-ttt-flight-1.jpg?tr=w-1900,h-700",className:"w-100 d-block"}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"".concat("https://cdn.triptotemples.com","/").concat(null!==(lO=null==e?void 0:null===(ec=e.packagedetail)||void 0===ec?void 0:null===(ed=ec.response)||void 0===ed?void 0:ed.bannerImage)&&void 0!==lO?lO:"","?tr=w-1900,h-700"),className:"w-100 d-none d-md-block"}),(0,i.jsx)("img",{src:"".concat("https://cdn.triptotemples.com","/").concat((null==e?void 0:null===(ev=e.packagedetail)||void 0===ev?void 0:null===(er=ev.response)||void 0===er?void 0:er.bannerMobile)!=""?null==e?void 0:null===(ep=e.packagedetail)||void 0===ep?void 0:null===(em=ep.response)||void 0===em?void 0:em.bannerMobile:null==e?void 0:null===(eh=e.packagedetail)||void 0===eh?void 0:null===(eu=eh.response)||void 0===eu?void 0:eu.bannerImage,"?tr=w-800,h-1200"),className:"w-100 d-md-none d-block"})]})}),(0,i.jsx)("div",{className:"package-listing-content",children:(0,i.jsxs)("div",{className:"container text-center",children:[(0,i.jsxs)("div",{className:"new_bg_title",children:[(0,i.jsx)("h1",{className:"mb-1",children:null!==(lR=null==e?void 0:null===(ex=e.packagedetail)||void 0===ex?void 0:null===(eg=ex.response)||void 0===eg?void 0:eg.title)&&void 0!==lR?lR:""}),(0,i.jsx)("span",{})]}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:null!==(lH=null==e?void 0:null===(ew=e.packagedetail)||void 0===ew?void 0:null===(ej=ew.response)||void 0===ej?void 0:ej.description)&&void 0!==lH?lH:""}})]})}),(null==e?void 0:null===(eN=e.packagedetail)||void 0===eN?void 0:null===(ey=eN.response)||void 0===ey?void 0:ey.whyChoose.items)!=null&&(null==e?void 0:null===(ef=e.packagedetail)||void 0===ef?void 0:null===(ek=ef.response)||void 0===ek?void 0:null===(eb=ek.whyChoose.items)||void 0===eb?void 0:eb.length)>1?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"why-to-choose text-center",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row p-0 m-0",children:[(0,i.jsx)("div",{className:"col-4 why-items",children:(0,i.jsx)("h3",{children:null!==(lz=null==e?void 0:null===(e_=e.packagedetail)||void 0===e_?void 0:null===(eT=e_.response)||void 0===eT?void 0:eT.whyChoose.title)&&void 0!==lz?lz:""})}),(null==e?void 0:null===(eI=e.packagedetail)||void 0===eI?void 0:null===(eS=eI.response)||void 0===eS?void 0:eS.whyChoose.items)!=null&&(null==e?void 0:null===(eF=e.packagedetail)||void 0===eF?void 0:null===(eL=eF.response)||void 0===eL?void 0:null===(eC=eL.whyChoose)||void 0===eC?void 0:eC.items.slice(0,6).map((e,l)=>{var t;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"col-2 why-items",title:e.title,children:[(0,i.jsx)("img",{src:"".concat("https://cdn.triptotemples.com","/").concat(null!==(t=null==e?void 0:e.icon)&&void 0!==t?t:""),alt:e.title,title:e.title}),(0,i.jsx)("h4",{children:e.title})]},l)})})),(0,i.jsx)("div",{className:"col-4 why-items d-flex",children:(0,i.jsx)(b.Z,{})})]})})}),(0,i.jsx)("div",{className:"container listing-tags",children:(0,i.jsx)("div",{className:"row",children:(null==e?void 0:null===(eM=e.packagedetail)||void 0===eM?void 0:null===(eE=eM.response)||void 0===eE?void 0:eE.whyChoose.tags)!=null&&(null==e?void 0:null===(eO=e.packagedetail)||void 0===eO?void 0:null===(eP=eO.response)||void 0===eP?void 0:null===(eB=eP.whyChoose)||void 0===eB?void 0:eB.tags.map((e,l)=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"col-md-4",children:(0,i.jsx)(j(),{href:e.url,target:"_blank",children:e.title})})})))})})]}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{className:"container d-none d-md-block",children:(0,i.jsx)("div",{className:"kmy-registration ",children:(0,i.jsxs)("div",{className:"row px-1",children:[(0,i.jsx)("div",{className:"col-md-2",children:(0,i.jsx)("img",{src:"/images/registration-icon.png"})}),(0,i.jsx)("div",{className:"col-md-7",children:(0,i.jsxs)("h2",{children:["Kailash Mansarovar Yatra 2024",(0,i.jsx)("br",{}),"Free Online Registration "]})}),(0,i.jsx)("div",{className:"col-md-3",children:(0,i.jsx)(j(),{href:"#!",onClick:()=>void("authenticated"===tt?window.open("/registration/kmy/add"):(l0((0,h.Nc)(!0)),l0((0,h.ZC)(!0)))),className:"btn btn-warning",children:"Register Now"})})]})})}),(0,i.jsx)("div",{className:"popular-packages",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row ps-md-5 pe-md-5",children:(0,i.jsx)(r.default,{title:null!==(lA=e.packagedetail.response.title)&&void 0!==lA?lA:"",packagelist:null!==(lU=null==e?void 0:null===(eH=e.packagedetail)||void 0===eH?void 0:null===(eR=eH.packagerelatedDataresponse)||void 0===eR?void 0:eR.response)&&void 0!==lU?lU:""})})})}),(null==e?void 0:null===(eU=e.packagedetail)||void 0===eU?void 0:null===(eA=eU.response)||void 0===eA?void 0:null===(ez=eA.yatraAbouts)||void 0===ez?void 0:ez.title)!=""?(0,i.jsx)("div",{className:"category-details-content",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"transprent-bg",children:[(0,i.jsxs)("div",{className:"new_bg_title white mb-3 text-center",children:[(0,i.jsx)("h2",{className:"mb-2",children:null!==(lq=null==e?void 0:null===(eW=e.packagedetail)||void 0===eW?void 0:null===(eK=eW.response)||void 0===eK?void 0:null===(eq=eK.yatraAbouts)||void 0===eq?void 0:eq.title)&&void 0!==lq?lq:""}),(0,i.jsx)("span",{})]}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:null!==(lK=null==e?void 0:null===(eV=e.packagedetail)||void 0===eV?void 0:null===(eD=eV.response)||void 0===eD?void 0:null===(eJ=eD.yatraAbouts)||void 0===eJ?void 0:eJ.content)&&void 0!==lK?lK:""}})]})})}):(0,i.jsx)(i.Fragment,{}),(null==e?void 0:null===(eZ=e.packagedetail)||void 0===eZ?void 0:null===(eX=eZ.response)||void 0===eX?void 0:null===(eY=eX.whyT2T)||void 0===eY?void 0:eY.title)!=""?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"why-ttt-best",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h2",{children:null!==(lW=null==e?void 0:null===(e$=e.packagedetail)||void 0===e$?void 0:null===(eQ=e$.response)||void 0===eQ?void 0:null===(eG=eQ.whyT2T)||void 0===eG?void 0:eG.title)&&void 0!==lW?lW:""}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-8",children:(0,i.jsxs)("div",{className:"why-ttt-container",children:[(null==e?void 0:null===(e1=e.packagedetail)||void 0===e1?void 0:null===(e0=e1.response)||void 0===e0?void 0:e0.whyT2T.items)!=null&&(null==e?void 0:null===(e5=e.packagedetail)||void 0===e5?void 0:null===(e3=e5.response)||void 0===e3?void 0:null===(e2=e3.whyT2T)||void 0===e2?void 0:e2.items.slice(0,3).map((e,l)=>{var t;return(0,i.jsxs)("div",{className:"why-ttt-card",id:l+1,children:[(0,i.jsx)("h4",{children:e.title}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:null!==(t=null==e?void 0:e.description)&&void 0!==t?t:""}})]})})),(0,i.jsx)(c.Z,{open:l2,onClose:l5,center:!0,classNames:{modal:"modal fade show"},children:(0,i.jsx)("div",{className:"modal-dialog modal-lg",children:(0,i.jsxs)("div",{className:"modal-content",children:[(0,i.jsxs)("div",{className:"modal-header border-none",children:[(0,i.jsx)("h5",{children:null!==(lJ=null==e?void 0:null===(e9=e.packagedetail)||void 0===e9?void 0:null===(e7=e9.response)||void 0===e7?void 0:null===(e4=e7.whyT2T)||void 0===e4?void 0:e4.title)&&void 0!==lJ?lJ:""}),(0,i.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:l5})]}),(0,i.jsx)("div",{className:"modal-body why-ttt-container",children:(null==e?void 0:null===(e6=e.packagedetail)||void 0===e6?void 0:null===(e8=e6.response)||void 0===e8?void 0:e8.whyT2T.items)!=null&&(null==e?void 0:null===(lt=e.packagedetail)||void 0===lt?void 0:null===(ll=lt.response)||void 0===ll?void 0:null===(le=ll.whyT2T)||void 0===le?void 0:le.items.map((e,l)=>{var t;return(0,i.jsxs)("div",{className:"why-ttt-card pb-1",id:l+1,children:[(0,i.jsx)("h4",{children:e.title}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:null!==(t=null==e?void 0:e.description)&&void 0!==t?t:""}})]})}))})]})})}),(0,i.jsx)("button",{type:"button",className:"btn ",onClick:()=>l3(!0),children:"Read More"})]})}),(0,i.jsx)("div",{className:"col-md-4",children:(0,i.jsx)("img",{src:"".concat("https://cdn.triptotemples.com","/").concat(null!==(lD=null==e?void 0:null===(ln=e.packagedetail)||void 0===ln?void 0:null===(lo=ln.response)||void 0===lo?void 0:null===(li=lo.whyT2T)||void 0===li?void 0:li.image)&&void 0!==lD?lD:""),className:"w-100 d-block"})})]})]})})}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{className:"popular-place-to-see",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"text-center pb-0 popular-place-desc",children:[(0,i.jsxs)("div",{className:"new_bg_title",children:[(0,i.jsx)("h2",{children:null==e?void 0:null===(ld=e.packagedetail)||void 0===ld?void 0:null===(la=ld.response)||void 0===la?void 0:null===(ls=la.contentCollection)||void 0===ls?void 0:ls.title}),(0,i.jsx)("span",{})]}),(0,i.jsx)("div",{className:"text-limit-3",dangerouslySetInnerHTML:{__html:null!==(lV=null==e?void 0:null===(lv=e.packagedetail)||void 0===lv?void 0:null===(lr=lv.response)||void 0===lr?void 0:null===(lc=lr.contentCollection)||void 0===lc?void 0:lc.content)&&void 0!==lV?lV:""}})]}),(0,i.jsx)("div",{className:"row g-0",children:(0,i.jsx)("div",{className:"col-md-8 offset-md-2",children:(0,i.jsx)("div",{className:"row g-0",children:(null==e?void 0:null===(lp=e.packagedetail)||void 0===lp?void 0:null===(lm=lp.response)||void 0===lm?void 0:lm.collection)!=null&&(null==e?void 0:null===(lh=e.packagedetail)||void 0===lh?void 0:null===(lu=lh.response)||void 0===lu?void 0:lu.collection[0].items)!=null&&(null==e?void 0:null===(lx=e.packagedetail)||void 0===lx?void 0:null===(lg=lx.response)||void 0===lg?void 0:lg.collection[0].items.slice(0,7).map((l,t)=>{var o,n,s,a,d,c,r,v,m;return(0,i.jsx)(i.Fragment,{children:(null==l?void 0:l.anotherTitle)!=""?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"col-md-4 col-6 p-0 m-0 c-items",children:(0,i.jsxs)(j(),{href:"/collections/".concat(encodeURIComponent(null==e?void 0:null===(s=e.packagedetail)||void 0===s?void 0:null===(n=s.response)||void 0===n?void 0:null===(o=n.collection[0])||void 0===o?void 0:o.slug),"#").concat(t),title:l.title,onClick:()=>l0((0,h.If)(!0)),children:[(0,i.jsx)("img",{src:"".concat(l.collectionImage,"?tr=w-231,h-231"),alt:l.title,title:l.title}),(0,i.jsx)("div",{className:"text-bg",children:(0,i.jsx)("h3",{children:l.title})})]})}),(0,i.jsx)("div",{className:"col-md-4 col-6 p-0 m-0 c-items text-only",children:(0,i.jsx)(j(),{href:"/collections/".concat(encodeURIComponent(null==e?void 0:null===(c=e.packagedetail)||void 0===c?void 0:null===(d=c.response)||void 0===d?void 0:null===(a=d.collection[0])||void 0===a?void 0:a.slug),"#").concat(t),title:l.title,onClick:()=>l0((0,h.If)(!0)),children:(0,i.jsx)("div",{className:"text-bg justify-content-md-center",children:(0,i.jsx)("h3",{children:null==l?void 0:l.anotherTitle})})})})]}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"col-md-4 col-6 p-0 m-0 c-items",children:(0,i.jsxs)(j(),{href:"/collections/".concat(encodeURIComponent(null==e?void 0:null===(m=e.packagedetail)||void 0===m?void 0:null===(v=m.response)||void 0===v?void 0:null===(r=v.collection[0])||void 0===r?void 0:r.slug),"#").concat(t),title:l.title,onClick:()=>l0((0,h.If)(!0)),children:[(0,i.jsx)("img",{src:"".concat(l.collectionImage,"?tr=w-231,h-231"),alt:l.title,title:l.title}),(0,i.jsx)("div",{className:"text-bg",children:(0,i.jsx)("h3",{children:l.title})})]})})})})}))})})})]})}),(0,i.jsx)(N.default,{}),(0,i.jsx)("div",{className:"pb-md-5 pb-2",children:(0,i.jsx)(v.default,{blogList:null!==(lY=null==e?void 0:null===(lw=e.packagedetail)||void 0===lw?void 0:null===(lj=lw.response)||void 0===lj?void 0:lj.blogs)&&void 0!==lY?lY:"",title:(null==e?void 0:null===(lN=e.packagedetail)||void 0===lN?void 0:null===(ly=lN.response)||void 0===ly?void 0:ly.title)+" Blogs",content:null!==(lZ=null==e?void 0:null===(lf=e.packagedetail)||void 0===lf?void 0:null===(lk=lf.response)||void 0===lk?void 0:null===(lb=lk.contentBlogs)||void 0===lb?void 0:lb.content)&&void 0!==lZ?lZ:""})}),(0,i.jsx)(m.default,{videoList:null!==(lG=null==e?void 0:null===(l_=e.packagedetail)||void 0===l_?void 0:null===(lT=l_.response)||void 0===lT?void 0:lT.videos)&&void 0!==lG?lG:"",title:(null==e?void 0:null===(lI=e.packagedetail)||void 0===lI?void 0:null===(lS=lI.response)||void 0===lS?void 0:lS.title)+" Videos"}),(0,i.jsx)(p.default,{reviewsList:null!==(l$=null==e?void 0:null===(lL=e.packagedetail)||void 0===lL?void 0:null===(lC=lL.catReviews)||void 0===lC?void 0:lC.response)&&void 0!==l$?l$:"",title:""}),(0,i.jsx)(n.default,{}),(0,i.jsx)(s.default,{}),(0,i.jsx)(a.Ix,{})]})}},7725:function(){},3207:function(){},4276:function(){},9008:function(e,l,t){e.exports=t(6665)}},function(e){e.O(0,[6502,3850,4090,2888,9774,179],function(){return e(e.s=2670)}),_N_E=e.O()}]);