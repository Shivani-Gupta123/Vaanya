(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2492,4587],{8165:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return i(5267)}])},4587:function(t,e,i){"use strict";i.r(e);var o=i(5893);i(7294);var l=i(5007),a=i(2134);e.default=t=>{let e=(0,l.I0)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"cta-ripple d-none d-md-block d-sm-block",onClick:()=>e((0,a.xg)(!0)),children:(0,o.jsx)("div",{className:"cta-btn-ripple","data-bs-toggle":"modal","data-bs-target":"#ClickToCallModal",children:(0,o.jsx)("div",{className:"cta-inner cta-active",id:"mobile_icon_change",children:(0,o.jsx)("span",{children:(0,o.jsx)("img",{loading:"lazy",width:"20px",height:"20px",alt:"Talk to TTT Expert !",src:"/images/right-call.svg"})})})})})})}},5267:function(t,e,i){"use strict";i.r(e),i.d(e,{__N_SSP:function(){return y}});var o=i(5893),l=i(7294),a=i(3850),s=i(4587),n=i(4173),r=i(9835),c=i(4067),d=i(9821),p=i(3927),m=i(1664),h=i.n(m),u=i(5007),v=i(2134),g=i(6340),w=i(1163),x=i(3299);function b(t){return t.replace(/<[^>]*>/g,"")||""}var y=!0;e.default=t=>{var e,i,m,y,f,j,N,k,C,S,T,L,P,E,I,_,A,B,M,D,R,O,F,z,K,W,U,q,H,Z,X,G,J,V,Q,Y,$,tt,te,ti,to,tl;let ta=(0,w.useRouter)(),ts="".concat(ta.asPath),tn=(0,u.I0)(),[tr,tc]=(0,l.useState)([]),{data:td,status:tp}=(0,x.useSession)();(0,l.useEffect)(()=>{tn((0,v.If)(!1)),"authenticated"===tp&&tm("blog")},[tp]);let tm=async t=>{await (0,g.KA)("blog").then(t=>{if(200===t.status){var e;tc((null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.length)?null==t?void 0:t.data:[])}else n.Am.error("Something unexpected happened whie getting user wishlist please try again later")}).catch(t=>{n.Am.error("Something unexpected happened whie getting user wishlist please try again later")})},th=async(t,e)=>{await (0,g.VW)(t,"blog").then(t=>{tm("blog")}).catch(t=>{n.Am.error("Something unexpected happened while removing item from wishlist please try again later")}),tn((0,v.If)(!1))},tu=async(t,e)=>{tn((0,v.If)(!0)),tr.find(e=>e===t)?th(t,"blog"):(await (0,g.TM)(t,"blog").then(t=>{tm("blog")}).catch(t=>{n.Am.error("Something unexpected happened while adding to wishlist please try again later")}),tn((0,v.If)(!1)))},tv={"@context":"http://schema.org","@type":"Blog",name:null!==(Q=null==t?void 0:null===(i=t.blogCatList)||void 0===i?void 0:null===(e=i.response)||void 0===e?void 0:e.title)&&void 0!==Q?Q:"",url:"https://www.triptotemples.com"+"".concat(ts),description:"A collection of articles on various topics.",blogPost:function(t){let e=[];return null!=t&&(null==t?void 0:t.length)>0&&t.map((t,i)=>{t.classificationCategoryBlogs.map((t,i)=>{e.push({"@type":"BlogPosting",headline:(null==t?void 0:t.title)||"",author:{"@type":"Person",name:"Trip To Temples",url:null==t?void 0:t.slug},datePublished:null==t?void 0:t.publishedAt,dateModified:null==t?void 0:t.updatedAt,mainEntityOfPage:{"@type":"WebPage","@id":"https://www.triptotemples.com"+"/blogs/".concat(null==t?void 0:t.category[0].slug,"/").concat(null==t?void 0:t.slug)},publisher:{"@type":"Organization",name:null==t?void 0:t.title,logo:{"@type":"ImageObject",url:"".concat("https://cdn.triptotemples.com","/").concat(null==t?void 0:t.blogImage)}},description:b(null==t?void 0:t.shortDescription),articleBody:b(null==t?void 0:t.shortDescription)})})}),e}(null==t?void 0:null===(m=t.blogCatList)||void 0===m?void 0:m.response.classificationCategory)},tg={"@context":"https://schema.org","@type":"WebPage",name:null!==(Y=null==t?void 0:null===(f=t.blogCatList)||void 0===f?void 0:null===(y=f.response)||void 0===y?void 0:y.title)&&void 0!==Y?Y:"",description:null!==($=null==t?void 0:null===(N=t.blogCatList)||void 0===N?void 0:null===(j=N.response)||void 0===j?void 0:j.title)&&void 0!==$?$:"",keywords:null!==(tt=null==t?void 0:null===(C=t.blogCatList)||void 0===C?void 0:null===(k=C.response)||void 0===k?void 0:k.title)&&void 0!==tt?tt:"",url:"https://www.triptotemples.com"+"".concat(ts)},tw={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.triptotemples.com"},{"@type":"ListItem",position:2,name:null!==(te=null==t?void 0:null===(T=t.blogCatList)||void 0===T?void 0:null===(S=T.response)||void 0===S?void 0:S.title)&&void 0!==te?te:"",item:"https://www.triptotemples.com"+"".concat(ts)}]};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.default,{title:null!==(ti=null==t?void 0:null===(I=t.blogCatList)||void 0===I?void 0:null===(E=I.catMetaData)||void 0===E?void 0:null===(P=E.response)||void 0===P?void 0:null===(L=P.contentMetaSeo)||void 0===L?void 0:L.title)&&void 0!==ti?ti:"",description:null!==(to=null==t?void 0:null===(M=t.blogCatList)||void 0===M?void 0:null===(B=M.catMetaData)||void 0===B?void 0:null===(A=B.response)||void 0===A?void 0:null===(_=A.contentMetaSeo)||void 0===_?void 0:_.description)&&void 0!==to?to:"",keywords:(null==t?void 0:null===(F=t.blogCatList)||void 0===F?void 0:null===(O=F.catMetaData)||void 0===O?void 0:null===(R=O.response)||void 0===R?void 0:null===(D=R.contentMetaSeo)||void 0===D?void 0:D.keyword.length)>0?null==t?void 0:null===(U=t.blogCatList)||void 0===U?void 0:null===(W=U.catMetaData)||void 0===W?void 0:null===(K=W.response)||void 0===K?void 0:null===(z=K.contentMetaSeo)||void 0===z?void 0:z.keyword[0]:"",metadataBase:"".concat("https://cdn.triptotemples.com","/").concat(null!==(tl=null==t?void 0:null===(X=t.blogCatList)||void 0===X?void 0:null===(Z=X.catMetaData)||void 0===Z?void 0:null===(H=Z.response)||void 0===H?void 0:null===(q=H.contentDetails)||void 0===q?void 0:q.image)&&void 0!==tl?tl:""),NewsArticle:tv,WebPage:tg,BreadcrumbList:tw,LocalBusiness:{"@context":"http://schema.org/","@type":"LocalBusiness",url:"https://www.triptotemples.com",name:"Trip To Temples",email:"info@triptotemples.com",telephone:"+91-8510007751",image:"https://www.triptotemples.com/images/logo.png",sameAs:["https://www.facebook.com/triptotemples","https://www.instagram.com/triptotemples/","https://www.youtube.com/c/TripToTemples","https://twitter.com/triptotemples","https://in.linkedin.com/company/trip-to-temples"],address:{"@type":"PostalAddress",addressCountry:{"@type":"Country",name:"India"},streetAddress:"201, JOP Plaza, Sector 18,",addressLocality:"Noida",addressRegion:"Uttar Pradesh",postalCode:"201301"},priceRange:"Rs.15000-Rs.500000"},NavigationElement:{"@context":"https://schema.org","@graph":[{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Home",url:"https://www.triptotemples.com/"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Kailash Mansarovar",url:"https://www.triptotemples.com/package/kailash-mansarovar"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Adi Kailash",url:"https://www.triptotemples.com/package/adi-kailash"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Kailash Mansarovar",url:"https://www.triptotemples.com/package/kailash-mansarovar"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Uttarakhand Kailash",url:"https://www.triptotemples.com/package/uttarakhand-kailash"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Char Dham",url:"https://www.triptotemples.com/package/char-dham"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"Blogs",url:"https://www.triptotemples.com/blogs"},{"@type":"SiteNavigationElement","@context":"https://schema.org",name:"News",url:"https://www.triptotemples.com/news"}]},Organization:{"@context":"http://schema.org","@type":"Organization",url:"https://www.triptotemples.com",name:"Trip To Temples",logo:"https://www.triptotemples.com/images/logo.png",sameAs:["https://www.facebook.com/triptotemples","https://www.instagram.com/triptotemples/","https://www.youtube.com/c/TripToTemples","https://twitter.com/triptotemples","https://in.linkedin.com/company/trip-to-temples"],contactPoint:[{"@type":"ContactPoint",email:"info@triptotemples.com",telephone:"+91-8510007751",contactType:"Customer Service",ContactOption:"Customer Service"}]}}),(0,o.jsx)("div",{className:"collection-details-banner mb-5",style:{background:"url('../images/blog-banner.png')"},children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row justify-content-md-center",children:(0,o.jsx)("div",{className:"col col-md-8",children:(0,o.jsx)("div",{className:"text-center mt-3",children:(0,o.jsxs)("h1",{children:[null==t?void 0:null===(J=t.blogCatList)||void 0===J?void 0:null===(G=J.response)||void 0===G?void 0:G.title," Blogs"]})})})})})}),(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-md-9",children:(0,o.jsx)("div",{className:"blogs pt-0 mt-o",children:(0,o.jsx)("div",{className:"row",children:(null==t?void 0:t.blogCatList.success)==!0?(0,o.jsx)(o.Fragment,{children:null==t?void 0:null===(V=t.blogCatList)||void 0===V?void 0:V.response.classificationCategory.map(t=>{var e,i;return(0,o.jsxs)(o.Fragment,{children:["registration"==t.classificationCategoryTitle?(0,o.jsxs)("h3",{className:"mb-3 mt-3 text-start fw-bold",style:{fontSize:"34px"},children:["Registration, Stay and other information about ",null===(e=t.classificationCategoryBlogs[0])||void 0===e?void 0:e.category.title]}):(0,o.jsxs)("h3",{className:"mb-3 mt-3 text-start fw-bold",style:{fontSize:"34px"},children:["Importance of ",null===(i=t.classificationCategoryBlogs[0])||void 0===i?void 0:i.category.title]}),t.classificationCategoryBlogs.map((t,e)=>{var i,l;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"col-md-4",children:(0,o.jsxs)("div",{className:"blog-items",children:[(null==tr?void 0:tr.find(e=>e===(null==t?void 0:t.ID)))?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(h(),{href:"#!",className:"save-bookmark is-active",title:"Remove ",onClick:()=>"unauthenticated"===tp?tn((0,v.Nc)(!0)):th(null==t?void 0:t.ID,"blog"),children:(0,o.jsx)("span",{children:"Remove"})})}):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(h(),{href:"#!",className:"save-bookmark ",title:"Save for Latter",onClick:()=>"unauthenticated"===tp?tn((0,v.Nc)(!0)):tu(null==t?void 0:t.ID,"blog"),children:(0,o.jsx)("span",{children:"Save for Latter"})})}),(0,o.jsxs)(h(),{href:"/blogs/".concat(null==t?void 0:null===(i=t.category[0])||void 0===i?void 0:i.slug,"/").concat(encodeURIComponent(null==t?void 0:t.slug)),target:"_blank",title:t.title,children:[(0,o.jsx)("img",{alt:t.title,title:t.title,src:"".concat("https://cdn.triptotemples.com","/").concat(t.blogImage,"?tr=w-330,h-300")}),(0,o.jsxs)("div",{className:"blog-desc",children:[(0,o.jsx)("h4",{className:"text-limit-2",children:t.title}),(0,o.jsx)("p",{className:"text-limit-3",children:null===(l=t.metaSeo)||void 0===l?void 0:l.description}),(0,o.jsx)("span",{children:"Read more"})]})]})]})},e)})})]})})}):(0,o.jsx)(o.Fragment,{})})})}),(0,o.jsx)("div",{className:"col-md-3",children:(0,o.jsxs)("div",{className:"right-panel p-0",children:[(0,o.jsxs)("div",{className:"query-form",children:[(0,o.jsxs)("div",{className:"form-head",children:[(0,o.jsx)("h3",{children:"Get in Touch"}),(0,o.jsx)("p",{children:"Have An Enquiry? Write To Us…"})]}),(0,o.jsx)(r.Z,{})]}),(0,o.jsxs)("div",{className:"best-seller-packages p-0",children:[(0,o.jsx)("h2",{className:"m-0",children:"Popular Pilgrimage Packages"}),(0,o.jsx)(c.Z,{query:"Popular",filterby:"tourlabel",limit:"6",designType:"withImage"})]}),(0,o.jsx)(d.Z,{})]})})]})}),(0,o.jsx)(a.default,{}),(0,o.jsx)(s.default,{}),(0,o.jsx)(n.Ix,{})]})}},9008:function(t,e,i){t.exports=i(6665)}},function(t){t.O(0,[3850,4075,2888,9774,179],function(){return t(t.s=8165)}),_N_E=t.O()}]);