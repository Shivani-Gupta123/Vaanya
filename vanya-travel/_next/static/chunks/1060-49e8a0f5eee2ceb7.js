"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1060],{1060:function(e,a,l){l.r(a);var o=l(5893),t=l(7294),i=l(2175),n=l(6310),r=l(4173),s=l(1163),d=l(6340),c=l(5007),v=l(2134),m=l(1664),u=l.n(m);a.default=e=>{var a,l,m,p,h,g,x,f,D,j,N,I,b,y,w,S,C,F,O,P,k,A,E,T,_,q,R,U,Y,Z,B,J,K,W,z,M;let V=(0,c.v9)(e=>e.counter.FreeRegister),G=(0,c.v9)(e=>e.counter.tourPkg),H=(0,c.v9)(e=>e.counter.tourPkgStartDate),L=(0,c.I0)(),Q=(0,s.useRouter)(),[X,$]=(0,t.useState)(""),[ee,ea]=(0,t.useState)(null),[el,eo]=(0,t.useState)(null),[et,ei]=(0,t.useState)(!1),[en,er]=(0,t.useState)(!1),[es,ed]=(0,t.useState)([]),[ec,ev]=(0,t.useState)(!1),em=e=>{e===X?$(""):$(e)};async function eu(){await (0,d.rZ)().then(e=>{200===e.status&&ed(e.data)}).catch(e=>{})}let ep=e=>{let a=e.target.files;a.length>0&&ea(a[0])},eh=e=>{let a=e.target.files;a.length>0&&eo(a[0])},eg=n.Ry().shape({aadhar:n.Z_().required("Aadhaar no is required"),pan:n.Z_().required("pan no is required")}),ex={aadhar:(null==e?void 0:null===(l=e.registerData)||void 0===l?void 0:null===(a=l.travellerDocumentInformation)||void 0===a?void 0:a.aadhar)!=void 0?null==e?void 0:null===(p=e.registerData)||void 0===p?void 0:null===(m=p.travellerDocumentInformation)||void 0===m?void 0:m.aadhar:"",pan:(null==e?void 0:null===(g=e.registerData)||void 0===g?void 0:null===(h=g.travellerDocumentInformation)||void 0===h?void 0:h.pan)!=void 0?null==e?void 0:null===(f=e.registerData)||void 0===f?void 0:null===(x=f.travellerDocumentInformation)||void 0===x?void 0:x.pan:"",passport:(null==e?void 0:null===(j=e.registerData)||void 0===j?void 0:null===(D=j.travellerDocumentInformation)||void 0===D?void 0:D.passport)!=void 0?null==e?void 0:null===(I=e.registerData)||void 0===I?void 0:null===(N=I.travellerDocumentInformation)||void 0===N?void 0:N.passport:"",passportNo:(null==e?void 0:null===(y=e.registerData)||void 0===y?void 0:null===(b=y.travellerDocumentInformation)||void 0===b?void 0:b.passportNo)!=void 0?null==e?void 0:null===(S=e.registerData)||void 0===S?void 0:null===(w=S.travellerDocumentInformation)||void 0===w?void 0:w.passportNo:"",placeOfIssue:(null==e?void 0:null===(F=e.registerData)||void 0===F?void 0:null===(C=F.travellerDocumentInformation)||void 0===C?void 0:C.placeOfIssue)!=void 0?null==e?void 0:null===(P=e.registerData)||void 0===P?void 0:null===(O=P.travellerDocumentInformation)||void 0===O?void 0:O.placeOfIssue:"",expiryDate:(null==e?void 0:null===(A=e.registerData)||void 0===A?void 0:null===(k=A.travellerDocumentInformation)||void 0===k?void 0:k.expiryDate)!=void 0?(W=""+((K=new Date(null==e?void 0:null===(T=e.registerData)||void 0===T?void 0:null===(E=T.travellerDocumentInformation)||void 0===E?void 0:E.expiryDate)).getMonth()+1),z=""+K.getDate(),M=K.getFullYear(),W.length<2&&(W="0"+W),z.length<2&&(z="0"+z),[M,W,z].join("-")):"",profileImage:(null==e?void 0:null===(q=e.registerData)||void 0===q?void 0:null===(_=q.travellerDocumentInformation)||void 0===_?void 0:_.profileImage)!=void 0?null==e?void 0:null===(U=e.registerData)||void 0===U?void 0:null===(R=U.travellerDocumentInformation)||void 0===R?void 0:R.profileImage:"",signatureImage:(null==e?void 0:null===(Z=e.registerData)||void 0===Z?void 0:null===(Y=Z.travellerDocumentInformation)||void 0===Y?void 0:Y.signatureImage)!=void 0?null==e?void 0:null===(J=e.registerData)||void 0===J?void 0:null===(B=J.travellerDocumentInformation)||void 0===B?void 0:B.signatureImage:""},ef=async e=>{let a=new Date(e.expiryDate);e.expiryDate=a;let l={source:"T2T",packageInformation:{package:G,yatraStartDate:new Date(H),yatraEndDate:"0001-01-01T00:00:00.000+00:00",noOfPerson:1},travellerDocumentInformation:e};if(await (0,d.nl)(l,V,"travellerdocument").then(e=>{200===e.status&&((null!=el||null!=ee)&&ei(!0),ev(!0),r.Am.success(e.data.message),Q.replace(Q.asPath),L((0,v.EJ)(e.data.data.ID)))}).catch(e=>{}),!0==et&&""!=V&&null!=ee){let e=new FormData;e.append("photo",ee),e.append("source","T2T"),await (0,d.WO)(e,V,"signatureImage").then(e=>{200===e.status&&(ea(null),er(!0))}).catch(e=>{})}if(!0==et&&""!=V&&null!=el){let e=new FormData;e.append("photo",el),e.append("source","T2T"),await (0,d.WO)(e,V,"profileImage").then(e=>{200===e.status&&(eo(null),er(!0))}).catch(e=>{})}!0==en&&(L((0,v.BK)(!0)),ei(!1),er(!1)),(null===el||null==ee)&&L((0,v.BK)(!0))};return(0,t.useEffect)(()=>{var a,l;(null==e?void 0:null===(l=e.registerData)||void 0===l?void 0:null===(a=l.travellerDocumentInformation)||void 0===a?void 0:a.aadhar)!=void 0?ev(!0):ev(!1),eu()},[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"accordion-item",children:[(0,o.jsx)("h2",{className:"accordion-header",id:"headingOne",children:(0,o.jsxs)("button",{className:"Item3"===X?"accordion-button":"accordion-button collapsed",onClick:()=>em("Item3"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:[(0,o.jsx)("div",{className:"col-md-8",children:"Traveller Document Information "}),(0,o.jsxs)("div",{className:"col-md-4 text-end",children:[(0,o.jsxs)(u(),{href:"#!",className:!0===ec?"edit btn ":"edit btn d-none",children:[(0,o.jsx)("img",{src:"/images/icons/edit.svg",width:"12px"}),"Edit"]}),(0,o.jsxs)(u(),{href:"#!",className:!0===ec?"save btn d-none":"save btn ",children:[(0,o.jsx)("img",{src:"/images/icons/save.svg",width:"18px"}),"Save"]})]})]})}),(0,o.jsx)("div",{id:"collapseOne",className:"Item3"===X?"accordion-collapse collapse show":"accordion-collapse collapse","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:(0,o.jsx)("div",{className:"form-section",children:(0,o.jsx)(i.J9,{initialValues:ex,validationSchema:eg,onSubmit:ef,enableReinitialize:!0,children:a=>{var l,t,n,r,s,d,c,v,m,u,p,h;let{handleChange:g,values:x,setFieldValue:f,errors:D}=a;return(0,o.jsx)(i.l0,{id:"docUpdate",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-md-6",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-md-3",children:[(0,o.jsx)("label",{htmlFor:"",className:"form-label",children:"Passport :"}),(0,o.jsxs)("select",{className:"form-select",name:"passport",value:x.passport,onChange:g,id:"passport","aria-label":"Passport",children:[(0,o.jsx)("option",{value:"Yes",children:"Yes"}),(0,o.jsx)("option",{value:"No",children:"No"}),(0,o.jsx)("option",{value:"Applyed",children:"Applyed"})]})]}),(0,o.jsxs)("div",{className:"col-md-9",children:[(0,o.jsx)("label",{htmlFor:"",className:"form-label",children:"Passport No. :"}),(0,o.jsx)("input",{type:"text",className:"form-control",name:"passportNo",value:x.passportNo,onChange:g,id:"passportNo",placeholder:"Passport Number"})]})]})}),(0,o.jsxs)("div",{className:"col-md-3",children:[(0,o.jsx)("label",{htmlFor:"",className:"form-label",children:"Issuing Country *"}),(0,o.jsxs)("select",{className:"form-select",name:"placeOfIssue",value:x.placeOfIssue,onChange:g,id:"placeOfIssue","aria-label":"Issuing Country",children:[(0,o.jsx)("option",{value:"",children:"--- Select Country ---"}),null!=es&&es.map(e=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("option",{value:null==e?void 0:e.name,children:null==e?void 0:e.name})}))]})]}),(0,o.jsxs)("div",{className:"col-md-3",children:[(0,o.jsx)("label",{htmlFor:"",className:"form-label",children:"Passport Expiry *"}),(0,o.jsx)("input",{type:"date",className:"form-control",name:"expiryDate",value:x.expiryDate,onChange:g,id:"expiryDate"})]}),(0,o.jsxs)("div",{className:"col-md-6",children:[(0,o.jsx)("label",{htmlFor:"",className:"form-label",children:"Aadhaar :"}),(0,o.jsx)("input",{type:"text",className:D.aadhar?" is-invalid form-control":"form-control",name:"aadhar",value:x.aadhar,onChange:g,id:"aadhar",placeholder:"Aadhaar Number"})]}),(0,o.jsxs)("div",{className:"col-md-6",children:[(0,o.jsx)("label",{htmlFor:"",className:"form-label",children:"PAN No. :"}),(0,o.jsx)("input",{type:"text",className:D.pan?" is-invalid form-control":"form-control",name:"pan",value:x.pan,onChange:g,id:"pan",placeholder:"PAN No."})]}),(0,o.jsxs)("div",{className:"col-md-3",children:[(0,o.jsx)("label",{htmlFor:"Photo",className:"form-label",children:"Upload Photo *"}),(0,o.jsx)("input",{className:"form-control",type:"file",onChange:eh,id:"Photo"})]}),(0,o.jsx)("div",{className:"col-md-3 pt-4",children:(0,o.jsx)("img",{src:(null==e?void 0:null===(t=e.registerData)||void 0===t?void 0:null===(l=t.travellerDocumentInformation)||void 0===l?void 0:l.profileImage)!=""&&(null==e?void 0:null===(r=e.registerData)||void 0===r?void 0:null===(n=r.travellerDocumentInformation)||void 0===n?void 0:n.profileImage)!=void 0?"https://cdn.triptotemples.com/"+(null==e?void 0:null===(d=e.registerData)||void 0===d?void 0:null===(s=d.travellerDocumentInformation)||void 0===s?void 0:s.profileImage):"https://cdn.triptotemples.com/noimage.jpg",alt:"photo",width:50,height:50})}),(0,o.jsxs)("div",{className:"col-md-3",children:[(0,o.jsx)("label",{htmlFor:"Signature",className:"form-label",children:"Signature"}),(0,o.jsx)("input",{className:"form-control",type:"file",id:"Signature",onChange:ep})]}),(0,o.jsx)("div",{className:"col-md-3 pt-4",children:(0,o.jsx)("img",{src:(null==e?void 0:null===(v=e.registerData)||void 0===v?void 0:null===(c=v.travellerDocumentInformation)||void 0===c?void 0:c.signatureImage)!=""&&(null==e?void 0:null===(u=e.registerData)||void 0===u?void 0:null===(m=u.travellerDocumentInformation)||void 0===m?void 0:m.signatureImage)!=void 0?"https://cdn.triptotemples.com/"+(null==e?void 0:null===(h=e.registerData)||void 0===h?void 0:null===(p=h.travellerDocumentInformation)||void 0===p?void 0:p.signatureImage):"https://cdn.triptotemples.com/noimage.jpg",alt:"photo",width:50,height:50})}),(0,o.jsx)("div",{className:"col-md-12",children:(0,o.jsx)("div",{className:"d-flex justify-content-end",children:(0,o.jsxs)("button",{type:"submit",form:"docUpdate",className:!0==ec?"save btn btn-danger":"save btn btn-success",children:[(0,o.jsx)("div",{className:!0==ec?"d-none":"",children:(0,o.jsx)("span",{className:"mx-2",children:"Submit"})}),(0,o.jsx)("div",{className:!0==ec?"":"d-none",children:(0,o.jsx)("span",{className:"mx-2",children:"Update"})})]})})})]})})}})})})]})})}}}]);