(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8145],{6895:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/registration/kmy/add",function(){return l(8466)}])},2203:function(e,a,l){"use strict";l.r(a);var s=l(5893),t=l(7294),n=l(6340),i=l(5007),r=l(2175),d=l(4173),o=l(6310),c=l(2134),m=l(1163),u=l(1664),v=l.n(u);a.default=e=>{var a,l,u,h,g,x,p,j,y,N,b,f,D,P,w,C,k,I,M,S;let E=(0,i.I0)(),F=(0,m.useRouter)(),A=(0,i.v9)(e=>e.counter.tourPkg),R=(0,i.v9)(e=>e.counter.tourPkgStartDate),O=(0,i.v9)(e=>e.counter.FreeRegister),[K,T]=(0,t.useState)(""),[_,Y]=(0,t.useState)(!1),B=e=>{e===K?T(""):T(e)};o.Ry().shape({employeeName:o.Z_().required("Employee Name must be required"),emergencyPhone:o.Z_().required("Emergency Phone must be required")});let q={emergencyPhone:(null==e?void 0:null===(l=e.registerData)||void 0===l?void 0:null===(a=l.emergencyContactPerson)||void 0===a?void 0:a[0].emergencyMobile)!=void 0?null==e?void 0:null===(g=e.registerData)||void 0===g?void 0:null===(h=g.emergencyContactPerson)||void 0===h?void 0:null===(u=h[0])||void 0===u?void 0:u.emergencyMobile:"",emergencyMobile:(null==e?void 0:null===(p=e.registerData)||void 0===p?void 0:null===(x=p.emergencyContactPerson)||void 0===x?void 0:x[0].emergencyMobile)!=void 0?null==e?void 0:null===(N=e.registerData)||void 0===N?void 0:null===(y=N.emergencyContactPerson)||void 0===y?void 0:null===(j=y[0])||void 0===j?void 0:j.emergencyMobile:"",employeeName:(null==e?void 0:null===(f=e.registerData)||void 0===f?void 0:null===(b=f.emergencyContactPerson)||void 0===b?void 0:b[0].emergencyName)!=void 0?null==e?void 0:null===(w=e.registerData)||void 0===w?void 0:null===(P=w.emergencyContactPerson)||void 0===P?void 0:null===(D=P[0])||void 0===D?void 0:D.emergencyName:"",emergencyRelationship:(null==e?void 0:null===(k=e.registerData)||void 0===k?void 0:null===(C=k.emergencyContactPerson)||void 0===C?void 0:C[0].emergencyRelationship)!=void 0?null==e?void 0:null===(S=e.registerData)||void 0===S?void 0:null===(M=S.emergencyContactPerson)||void 0===M?void 0:null===(I=M[0])||void 0===I?void 0:I.emergencyRelationship:""};(0,t.useEffect)(()=>{var a;(null==e?void 0:null===(a=e.registerData)||void 0===a?void 0:a.emergencyContactPerson)!=null?Y(!0):Y(!1)},[]);let Z=async e=>{e.emergencyPhone=Number(e.emergencyPhone),e.emergencyMobile=Number(e.emergencyMobile);let a={source:"T2T",packageInformation:{package:A,yatraStartDate:new Date(R),yatraEndDate:"0001-01-01T00:00:00.000+00:00",noOfPerson:1},emergencyContactPerson:[e]};await (0,n.nl)(a,O,"travellercontactperson").then(e=>{200===e.status&&(d.Am.success(e.data.message),F.replace(F.asPath),E((0,c.BK)(!0)),E((0,c.EJ)(e.data.data.ID)),Y(!0))}).catch(e=>{})};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"accordion-item",children:[(0,s.jsx)("h2",{className:"accordion-header",id:"headingOne",children:(0,s.jsxs)("button",{className:"Item5"===K?"accordion-button":"accordion-button collapsed",onClick:()=>B("Item5"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:[(0,s.jsx)("div",{className:"col-md-8",children:" In Case of Emergency Contact Person (optional)"}),(0,s.jsxs)("div",{className:"col-md-4 text-end",children:[(0,s.jsxs)(v(),{href:"#!",className:!0==_?"edit btn ":"edit btn d-none",children:[(0,s.jsx)("img",{src:"/images/icons/edit.svg",width:"12px"}),"Edit"]}),(0,s.jsxs)(v(),{href:"#!",className:!0==_?"save btn d-none":"save btn ",children:[(0,s.jsx)("img",{src:"/images/icons/save.svg",width:"18px"}),"Save"]})]})]})}),(0,s.jsx)("div",{id:"collapseOne",className:"Item5"===K?"accordion-collapse collapse show":"accordion-collapse collapse","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:(0,s.jsx)("div",{className:"form-section",children:(0,s.jsx)(r.J9,{initialValues:q,onSubmit:Z,enableReinitialize:!0,children:e=>{let{handleChange:a,values:l,setFieldValue:t,errors:n}=e;return(0,s.jsx)(r.l0,{id:"travellercontactperson",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-md-6",children:[(0,s.jsx)("label",{htmlFor:"",className:"form-label",children:"Name of the person for emergency contact"}),(0,s.jsx)("input",{type:"text",value:l.employeeName,onChange:a,className:(n.employeeName,"form-control"),id:"employeeName",placeholder:"Employee Name"})]}),(0,s.jsxs)("div",{className:"col-md-6",children:[(0,s.jsx)("label",{htmlFor:"",className:"form-label",children:"Emergency Phone :"}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)("input",{type:"text",className:(n.emergencyPhone,"form-control"),id:"emergencyPhone",value:l.emergencyPhone,onChange:a,placeholder:"Emergency Phone"})})]}),(0,s.jsxs)("div",{className:"col-md-6",children:[(0,s.jsx)("label",{htmlFor:"",className:"form-label",children:"Emergency Name"}),(0,s.jsx)("input",{type:"text",value:l.emergencyRelationship,onChange:a,className:"form-control",id:"emergencyRelationship",placeholder:"Emergency Relationship"})]}),(0,s.jsxs)("div",{className:"col-md-6",children:[(0,s.jsx)("label",{htmlFor:"",className:"form-label",children:"Mobile No. :"}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)("input",{type:"text",className:"form-control",id:"emergencyMobile",value:l.emergencyMobile,onChange:a,placeholder:"Emergency MObile"})})]}),(0,s.jsx)("div",{className:"col-md-12",children:(0,s.jsx)("div",{className:"d-flex justify-content-end",children:(0,s.jsxs)("button",{type:"submit",form:"travellercontactperson",className:!0==_?"save btn btn-danger":"save btn btn-success",children:[(0,s.jsx)("div",{className:!0==_?"d-none":"",children:(0,s.jsx)("span",{className:"mx-2",children:"Submit"})}),(0,s.jsx)("div",{className:!0==_?"":"d-none",children:(0,s.jsx)("span",{className:"mx-2",children:"Update"})})]})})})]})})}})})})]})})}},7898:function(e,a,l){"use strict";l.r(a);var s=l(5893),t=l(7294),n=l(4173),i=l(1163),r=l(6340),d=l(5007),o=l(2134);a.default=e=>{let a=(0,d.v9)(e=>e.counter.FreeRegister),l=(0,d.I0)(),c=(0,i.useRouter)();(0,t.useEffect)(()=>{},[]);let m=async()=>{l((0,o.If)(!0)),await (0,r.wH)(a).then(e=>{200===e.status?(n.Am.success(e.data.message),c.replace(c.asPath),l((0,o.BK)(!0)),l((0,o.If)(!1)),l((0,o.EJ)(""))):n.Am.error(e.data.message)}).catch(e=>{l((0,o.If)(!1))})};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:!0==e.statusData?"px-2 mt-3":" d-none",children:(0,s.jsx)("div",{className:"row py-3",children:(0,s.jsx)("div",{className:"col-md-12 ",children:(0,s.jsx)("div",{className:"d-flex justify-content-end",children:(0,s.jsx)("button",{type:"button",onClick:m,className:"save btn btn-primary",children:(0,s.jsx)("span",{className:"mx-2",children:"Submit"})})})})})})})}},7992:function(e,a,l){"use strict";l.r(a);var s=l(5893),t=l(7294),n=l(2175),i=l(6310),r=l(4173),d=l(1163),o=l(6340),c=l(5007),m=l(2134),u=l(1664),v=l.n(u);a.default=e=>{var a,l,u,h,g,x,p,j,y,N,b,f,D,P,w,C;let k=(0,c.v9)(e=>e.counter.FreeRegister),I=(0,c.v9)(e=>e.counter.tourPkg),M=(0,c.v9)(e=>e.counter.tourPkgStartDate),S=(0,c.I0)(),E=(0,d.useRouter)(),[F,A]=(0,t.useState)(""),[R,O]=(0,t.useState)(!1),K=e=>{e===F?A(""):A(e)};(0,t.useEffect)(()=>{var a,l,s,t;(null==e?void 0:null===(l=e.registerData)||void 0===l?void 0:null===(a=l.travellerMailingAddress)||void 0===a?void 0:a.city)!=void 0&&(null==e?void 0:null===(t=e.registerData)||void 0===t?void 0:null===(s=t.travellerMailingAddress)||void 0===s?void 0:s.address)!=void 0?O(!0):O(!1)},[]);let T=i.Ry().shape({address:i.Z_().required("address must be required")}),_={address:(null==e?void 0:null===(l=e.registerData)||void 0===l?void 0:null===(a=l.travellerMailingAddress)||void 0===a?void 0:a.address)!=void 0?null==e?void 0:null===(h=e.registerData)||void 0===h?void 0:null===(u=h.travellerMailingAddress)||void 0===u?void 0:u.address:"",state:(null==e?void 0:null===(x=e.registerData)||void 0===x?void 0:null===(g=x.travellerMailingAddress)||void 0===g?void 0:g.state)!=void 0?null==e?void 0:null===(j=e.registerData)||void 0===j?void 0:null===(p=j.travellerMailingAddress)||void 0===p?void 0:p.state:"",city:(null==e?void 0:null===(N=e.registerData)||void 0===N?void 0:null===(y=N.travellerMailingAddress)||void 0===y?void 0:y.city)!=void 0?null==e?void 0:null===(f=e.registerData)||void 0===f?void 0:null===(b=f.travellerMailingAddress)||void 0===b?void 0:b.city:"",pinCode:(null==e?void 0:null===(P=e.registerData)||void 0===P?void 0:null===(D=P.travellerMailingAddress)||void 0===D?void 0:D.pinCode)!=void 0?null==e?void 0:null===(C=e.registerData)||void 0===C?void 0:null===(w=C.travellerMailingAddress)||void 0===w?void 0:w.pinCode:""},Y=async e=>{e.pinCode=Number(e.pinCode);let a={source:"T2T",packageInformation:{package:I,yatraStartDate:new Date(M),yatraEndDate:"0001-01-01T00:00:00.000+00:00",noOfPerson:1},travellerMailingAddress:e};await (0,o.nl)(a,k,"travelleraddress").then(e=>{S((0,m.If)(!0)),200===e.status&&(r.Am.success(e.data.message),E.replace(E.asPath),O(!0),S((0,m.BK)(!0)),S((0,m.If)(!1)),S((0,m.EJ)(e.data.data.ID)))}).catch(e=>{})};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"accordion-item",children:[(0,s.jsx)("h2",{className:"accordion-header",id:"headingOne",children:(0,s.jsxs)("button",{className:"Item4"===F?"accordion-button":"accordion-button collapsed",onClick:()=>K("Item4"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:[(0,s.jsx)("div",{className:"col-md-8",children:"Traveller Full Mailing Address"}),(0,s.jsxs)("div",{className:"col-md-4 text-end",children:[(0,s.jsxs)(v(),{href:"#!",className:!0==R?"edit btn ":"edit btn d-none",children:[(0,s.jsx)("img",{src:"/images/icons/edit.svg",width:"12px"}),"Edit"]}),(0,s.jsxs)(v(),{href:"#!",className:!0==R?"save btn d-none":"save btn ",children:[(0,s.jsx)("img",{src:"/images/icons/save.svg",width:"18px"}),"Save"]})]})]})}),(0,s.jsx)("div",{id:"collapseOne",className:"Item4"===F?"accordion-collapse collapse show":"accordion-collapse collapse","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:(0,s.jsx)("div",{className:"form-section",children:(0,s.jsx)(n.J9,{initialValues:_,validationSchema:T,onSubmit:Y,enableReinitialize:!0,children:e=>{let{handleChange:a,values:l,setFieldValue:t,errors:i}=e;return(0,s.jsx)(n.l0,{id:"travelleraddress",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-md-12",children:[(0,s.jsx)("label",{htmlFor:"",className:"form-label",children:"Full Mailing Address* :"}),(0,s.jsx)("input",{type:"text",className:i.address?"form-control is-invalid":"form-control",name:"address",value:l.address,onChange:a,id:"address",placeholder:"Full Mailing Address"})]}),(0,s.jsxs)("div",{className:"col-md-4",children:[(0,s.jsx)("label",{htmlFor:"",className:"form-label",children:"City"}),(0,s.jsx)("input",{type:"text",className:"form-control",name:"city",value:l.city,onChange:a,id:"city",placeholder:"City"})]}),(0,s.jsxs)("div",{className:"col-md-4",children:[(0,s.jsx)("label",{htmlFor:"",className:"form-label",children:"State"}),(0,s.jsx)("input",{type:"text",className:"form-control",name:"state",value:l.state,onChange:a,id:"state",placeholder:"State"})]}),(0,s.jsxs)("div",{className:"col-md-4",children:[(0,s.jsx)("label",{htmlFor:"",className:"form-label",children:"Pin Code"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"pinCode",name:"pinCode",value:l.pinCode,onChange:a,placeholder:"Pin Code"})]}),(0,s.jsx)("div",{className:"col-md-12",children:(0,s.jsx)("div",{className:"d-flex justify-content-end",children:(0,s.jsxs)("button",{type:"submit",form:"travelleraddress",className:!0==R?"save btn btn-danger":"save btn btn-success",children:[(0,s.jsx)("div",{className:!0==R?"d-none":"",children:(0,s.jsx)("span",{className:"mx-2",children:"Submit"})}),(0,s.jsx)("div",{className:!0==R?"":"d-none",children:(0,s.jsx)("span",{className:"mx-2",children:"Update"})})]})})})]})})}})})})]})})}},8466:function(e,a,l){"use strict";l.r(a);var s=l(5893),t=l(7294),n=l(3299),i=l(2134),r=l(9821),d=l(9835),o=l(4067),c=l(9551),m=l(1060),u=l(7992),v=l(2203),h=l(7898),g=l(6340),x=l(5007),p=l(3927);a.default=e=>{let a=(0,x.v9)(e=>e.counter.getRegisterBy),l=(0,x.v9)(e=>e.counter.FreeRegister),j=(0,x.v9)(e=>e.counter.tourPkg),y=(0,x.v9)(e=>e.counter.tourPkgStartDate),N=(0,x.v9)(e=>e.counter.showlogin),{data:b,status:f}=(0,n.useSession)(),D=(0,x.I0)(),[P,w]=(0,t.useState)(""),[C,k]=(0,t.useState)(null),[I,M]=(0,t.useState)(""),[S,E]=(0,t.useState)(!1),[F,A]=(0,t.useState)([]),[R,O]=(0,t.useState)((0,s.jsx)("option",{value:"",children:"--- Select Yatra Date ---"}));"unauthenticated"===f&&(D((0,i.Nc)(!0)),!1==N&&(window.location.href="/"));let[K,T]=(0,t.useState)([{ID:"1",name:"Kailash Mansarovar Aerial Darshan 2024",slug:"mount-kailash-aerial-darshan"},{ID:"2",name:"KMY 2024 By Helicopter from Lucknow",slug:"kailash-yatra-by-helicopter"},{ID:"3",name:"Overland KMY 2024 By Bus",slug:"overland-kailash-mansarovar-yatra"},{ID:"4",name:"Shortest KMY 2024 By Helicopter In 5 Days",slug:"kailash-yatra-by-helicopter-in-5-days"},{ID:"5",name:"Kailash Mansarovar Yatra 2024 Via Lucknow",slug:"kailash-mansarovar-yatra-via-lucknow"},{ID:"6",name:"Kailash Yatra 2024 By Helicopter From Kathmandu",slug:"kailash-mansarovar-by-helicopter-via-kathmandu"}]),_=e=>{e===P?w(""):w(e)},Y=e=>{var a=new Date(e),l=""+(a.getMonth()+1),s=""+a.getDate(),t=a.getFullYear();return l.length<2&&(l="0"+l),s.length<2&&(s="0"+s),[t,l,s].join("-")};async function B(){await (0,g.Z4)(l).then(e=>{if(200==e.status){if(e.data.length>0&&null!=e.data){var a;k(e.data[0]),null!=e.data[0].packageInformation&&(null===(a=e.data[0].travellerInformation)||void 0===a?void 0:a.firstName)!=""&&""!=e.data[0].travellerDocumentInformation.aadhar&&""!=e.data[0].travellerMailingAddress.address&&null!=e.data[0].emergencyContactPerson&&E(!0),!0==e.data[0].status&&E(!1)}D((0,i.BK)(!1))}}).catch(e=>{})}async function q(e){await (0,g.Io)(e).then(e=>{200==e.status&&A(e.data.prices.packagePrice)}).catch(e=>{})}return!0==a&&(B(),D((0,i.BK)(!1))),(0,t.useEffect)(()=>{""!=l&&B()},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.default,{title:"KMY Free Registration",description:"KMY Free Registration",keywords:"KMY Free Registration",metadataBase:"https://cdn.triptotemples.com/assets/img/ttt-new-logo.png"}),(0,s.jsx)("div",{className:"collection-details-banner mb-5",style:{background:"url(https://www.triptotemples.com/assets/img/web-banner-new-11062019-jpg-1920%C3%97600-.png)"},children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row justify-content-md-center",children:(0,s.jsx)("div",{className:"col col-md-8",children:(0,s.jsx)("div",{className:"text-center mt-3",children:(0,s.jsx)("h1",{children:"KMY Free Registration"})})})})})}),(0,s.jsx)("div",{className:"kmy-registration-page",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-md-9",children:(0,s.jsx)("div",{className:"kmy-registration-form",children:(0,s.jsxs)("div",{className:"accordion",id:"accordionExample",children:[(0,s.jsxs)("div",{className:"accordion-item",children:[(0,s.jsx)("h2",{className:"accordion-header",id:"headingOne",children:(0,s.jsx)("button",{className:"Item1"===P?"accordion-button":"accordion-button collapsed",onClick:()=>_("Item1"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Select Your Package and Dates"})}),(0,s.jsx)("div",{id:"collapseOne",className:"Item1"===P?"accordion-collapse collapse show ":"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:(0,s.jsx)("div",{className:"form-section",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-md-6",children:[(0,s.jsx)("label",{htmlFor:"",className:"form-label",children:"Tour Package Type * :"}),(0,s.jsxs)("select",{className:"form-select",onChange:function(e){let a=e.target.selectedIndex,l=e.target.childNodes[a],s=l.getAttribute("value"),t=l.getAttribute("data-attribute"),n=l.getAttribute("data-Title");D((0,i.Pj)({ID:t,title:n,slug:s})),q(s)},value:""!=j.title?j.title:"",children:[(0,s.jsx)("option",{children:"Select Package *"}),null!=K&&K.map(e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("option",{value:e.slug,"data-attribute":e.ID,"data-Title":e.name,children:e.name})}))]})]}),(0,s.jsxs)("div",{className:"col-md-6",children:[(0,s.jsx)("label",{htmlFor:"",className:"form-label",children:"Yatra Start Date * :"}),(0,s.jsxs)("select",{className:"form-select",value:""!=y?y:I,onChange:e=>{let a=e.target.selectedIndex,l=e.target.childNodes[a].getAttribute("value");D((0,i.fW)(l)),M(l)},children:[null!=F&&0==F.length?"":R,null!=F&&F.map((e,a)=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("option",{value:Y(e.yatraDate),children:Y(e.yatraDate)})}))]})]})]})})})]}),(0,s.jsx)(c.default,{registerData:C}),(0,s.jsx)(m.default,{registerData:C}),(0,s.jsx)(u.default,{registerData:C}),(0,s.jsx)(v.default,{registerData:C}),(0,s.jsx)(h.default,{registerData:C,statusData:S})]})})}),(0,s.jsx)("div",{className:"col-md-3",children:(0,s.jsxs)("div",{className:"right-panel p-0",children:[(0,s.jsxs)("div",{className:"query-form",children:[(0,s.jsxs)("div",{className:"form-head",children:[(0,s.jsx)("h3",{children:"Get in Touch"}),(0,s.jsx)("p",{children:"Have An Enquiry? Write To Us…"})]}),(0,s.jsx)(d.Z,{})]}),(0,s.jsxs)("div",{className:"best-seller-packages p-0",children:[(0,s.jsx)("h2",{className:"m-0",children:"Popular Pilgrimage Packages"}),(0,s.jsx)(o.Z,{query:"Popular",filterby:"tourlabel",limit:"4",designType:"withImage"})]}),(0,s.jsx)(r.Z,{})]})})]})})})]})}},9008:function(e,a,l){e.exports=l(6665)}},function(e){e.O(0,[4075,9551,1060,2888,9774,179],function(){return e(e.s=6895)}),_N_E=e.O()}]);