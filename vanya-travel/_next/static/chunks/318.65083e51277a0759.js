"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{318:function(e,t,s){s.r(t);var l=s(5893),a=s(7294),n=s(5152),i=s.n(n),d=s(8934),c=s(8868),r=s(5007),o=s(2134),h=s(6340),m=s(4173),x=s(3299),j=s(1190);let p=i()(()=>s.e(6622).then(s.bind(s,6622)),{loadableGenerated:{webpack:()=>[null]}});t.default=e=>{var t,s;let n=(0,r.I0)();(0,r.v9)(e=>e.counter.ClickedOnBooking);let i=(0,r.v9)(e=>e.counter.showyatradates),[g,v]=(0,a.useState)(""),{data:u,status:N}=(0,x.useSession)(),[b,C]=(0,a.useState)(!1),[f,w]=(0,a.useState)({}),[k,y]=(0,a.useState)([]),[S,I]=(0,a.useState)(!1),M=()=>I(!0);function D(){I(!1),n((0,o.NS)(!0))}async function _(e,t){n((0,o.If)(!0)),await (0,h.o4)(e,t).then(e=>{200===e.status&&(window.location.href="/check-out")}).catch(e=>{n((0,o.If)(!1)),m.Am.error("Something unexpected happened or please try again later")})}return(0,a.useEffect)(()=>{((t,s)=>{var l,a,n;let i=[];null!==e.packageprices&&(i=null===(a=e.packageprices)||void 0===a?void 0:null===(l=a.filter(e=>e.inrPrice>0))||void 0===l?void 0:l.map(e=>e.inrPrice));let d={},c=[],r=Math.min(...i);i.length>0&&(null===(n=Object.entries(s))||void 0===n||n.forEach(e=>{var t;let[s,l]=e;d[s]=null===(t=Object.entries(l))||void 0===t?void 0:t.map(e=>{let[t,s]=e,l=Math.round(r*s*Math.pow(1+s,+t)/(Math.pow(1+s,+t)-1));return c.push(l),{interest:1200*s,month:t.toString(),price:l,extraInterest:l*+t-r,totalCost:l*+t}})}),c.sort((e,t)=>e-t),w(d),y(c))})(e.packageprices,{Kotak:{3:.01,6:.01,9:.14/12,12:.14/12,18:.15/12,24:.15/12},IndusInd:{3:.13/12,6:.13/12,9:.13/12,12:.01,18:.01,24:.01,36:.01},ICICI:{3:.13/12,6:.14/12,9:.14/12,12:.14/12},Axis:{3:.13/12,6:.13/12,9:.14/12,12:.14/12},Yes:{3:.13/12,6:.13/12,9:.14/12,12:.14/12,18:.15/12,24:.15/12},RBL:{3:.13/12,6:.14/12,9:.15/12,12:.15/12,18:.15/12,24:.15/12},Corporation:{6:.16/12,12:.015,24:.015},Baroda:{3:.13/12,6:.13/12,9:.13/12,12:.13/12,18:.15/12,24:.15/12,36:.15/12},HSBC:{3:.01,6:.01,9:.13/12,12:.13/12,18:.13/12},IDBI:{3:.13/12,6:.13/12,9:.13/12,12:.13/12},Standard:{3:.13/12,6:.13/12,9:.14/12,12:.14/12,18:.15/12,24:.15/12}})},[e.packageprices]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"tour-highlight",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col-md-7 px-i",children:[(0,l.jsxs)("h3",{className:"mb-2",children:["Tour Highlights of",(0,l.jsx)("small",{className:"d-block mt-1",style:{textDecoration:"underline",lineHeight:"30px"},children:null==e?void 0:e.title})]}),(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:e.tourhighlights},className:"mb-3"})]}),(0,l.jsx)("div",{className:"col-md-5 text-center px-i",children:(0,l.jsxs)("div",{className:" ".concat(i?"show-yatra-dates":""),children:[i?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("p",{className:"text-start p-2 ",onClick:()=>n((0,o.NS)(!1)),children:[(0,l.jsx)("svg",{"_ngcontent-veenaworld-c83":"",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{"_ngcontent-veenaworld-c83":"",d:"M4.65825 7.67495C4.88575 7.44745 4.88575 7.07995 4.65825 6.85245L2.40076 4.58328H11.2499C11.5708 4.58328 11.8333 4.32078 11.8333 3.99995C11.8333 3.67911 11.5708 3.41661 11.2499 3.41661H2.40076L4.66409 1.15328C4.89159 0.925781 4.89159 0.558281 4.66409 0.330781C4.43659 0.103281 4.06909 0.103281 3.84159 0.330781L0.574922 3.59161C0.347422 3.81911 0.347422 4.18661 0.574922 4.41411L3.83575 7.67495C4.06325 7.89661 4.43659 7.89661 4.65825 7.67495Z",fill:"#CE2027"})})," ",(0,l.jsx)("span",{style:{color:"#CE2027",borderBottom:"1px solid #CE2027"},children:"Back to Itinerary"})]})}):(0,l.jsx)(l.Fragment,{}),(0,l.jsx)("h3",{children:"Select Date to book\xa0your\xa0seat."}),(0,l.jsxs)("ul",{className:"indicator",children:[(0,l.jsx)("li",{className:"open",children:"Available"}),(0,l.jsx)("li",{className:"limited",children:"Limited"}),(0,l.jsx)("li",{className:"close",children:"Full "}),(0,l.jsx)("li",{className:"noyatra",children:"No Yatra"})]}),(0,l.jsx)("div",{id:"calendar",className:"fc fc-ltr fc-unthemed",children:(0,l.jsx)(p,{plugins:[d.ZP,c.Z],nowIndicator:!0,editable:!1,initialView:"dayGridMonth",initialDate:!1!=e.initialDate?e.initialDate:new Date,themeSystem:"unthemed",viewClassNames:"calender",headerToolbar:{left:"prev",center:"title",right:"next"},events:e.seatsdetails,eventClick:e=>{var t,s;"0 Seats"===e.event.title?n((0,o.xg)(!0)):(t=e.event.id,s=new Date(new Date(e.event.start).setDate(new Date(e.event.start).getDate()+1)),"authenticated"===N?_(t,s):(n((0,o.Nc)(!0)),n((0,o.wc)(!0)),n((0,o.kH)({pkgId:t,pgkDate:s}))))},eventContent:e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"custom_tooltip",title:e.event.borderColor,children:[""!=e.event.borderColor?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"custom_tooltip_text",children:e.event.borderColor}),"            "]}):(0,l.jsx)(l.Fragment,{}),(0,l.jsxs)("p",{className:"m-0",style:{background:"#fff",color:"#000"},children:["₹ ",e.event.textColor]}),(0,l.jsx)("p",{title:e.event.title,className:"text ".concat(e.event.classNames," m-0"),children:e.event.title})]})}),dayCellContent:t=>{let s=e.seatsdetails.filter(e=>new Date(e.start).toDateString()===t.date.toDateString());return(0,l.jsxs)("div",{onClick:()=>n((0,o.xg)(!0)),title:"",children:[(0,l.jsx)("span",{className:"c-date",children:t.dayNumberText}),(0,l.jsx)("p",{className:"fc-daygrid-day-events",style:{color:"#4D4D4D",paddingTop:"28px",fontSize:"12px"}}),s.length>0&&(0,l.jsx)("div",{style:{marginTop:"5px"},children:s.map((e,s)=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{title:e.title,className:"bg ".concat(e.classNames," c-date"),children:t.dayNumberText}),(0,l.jsx)("div",{style:{fontSize:"0.8em",color:"blue"}},s)]}))})]})}})}),i?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"d-block d-md-none emi-for-mobile",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"d-flex",children:[(0,l.jsx)("div",{className:"col","data-bs-toggle":"modal","data-bs-target":"#EMIModal",onClick:()=>k.length>0?M():n((0,o.xg)(!0)),children:k.length>0?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"text-white text-start",children:[(0,l.jsxs)("p",{className:"m-0 mt-2 p-0",onClick:()=>console.log(k),children:[(0,l.jsx)("small",{children:"EMI Start at :"}),(0,l.jsx)("span",{style:{fontWeight:"500"},children:" ₹"}),null!==(s=Math.min(...k))&&void 0!==s?s:"",(0,l.jsx)("small",{children:"/mo"})]}),(0,l.jsx)("p",{className:"",children:(0,l.jsx)("small",{children:"No Cost EMI also available."})})]})}):(0,l.jsx)("p",{className:"m-0 ms-md-5 text-white",children:"Call to get prices"})}),(0,l.jsx)("div",{className:"col","data-bs-toggle":"modal","data-bs-target":"#EMIModal",onClick:function(){n((0,o.NS)(!1)),I(!0),M()},children:(0,l.jsxs)("p",{className:"text-end pt-4 mb-0 d-block d-md-none",children:[(0,l.jsx)("svg",{"_ngcontent-veenaworld-c83":"",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{"_ngcontent-veenaworld-c83":"",d:"M4.65825 7.67495C4.88575 7.44745 4.88575 7.07995 4.65825 6.85245L2.40076 4.58328H11.2499C11.5708 4.58328 11.8333 4.32078 11.8333 3.99995C11.8333 3.67911 11.5708 3.41661 11.2499 3.41661H2.40076L4.66409 1.15328C4.89159 0.925781 4.89159 0.558281 4.66409 0.330781C4.43659 0.103281 4.06909 0.103281 3.84159 0.330781L0.574922 3.59161C0.347422 3.81911 0.347422 4.18661 0.574922 4.41411L3.83575 7.67495C4.06325 7.89661 4.43659 7.89661 4.65825 7.67495Z",fill:"#fff"})})," ",(0,l.jsx)("span",{style:{color:"#fff",borderBottom:"1px solid #fff"},children:"Check eligibility"})]})})]})})})}):(0,l.jsx)(l.Fragment,{})]})})]})})}),(0,l.jsx)(j.Z,{open:S,onClose:D,center:!0,classNames:{modal:"emi-popup modal fade show"},styles:{modal:{padding:"50px 150px",margin:"30px"}},children:(0,l.jsx)("div",{className:"modal-dialog",children:(0,l.jsxs)("div",{className:"modal-content",children:[(0,l.jsxs)("div",{className:"modal-header",children:[(0,l.jsx)("h5",{className:"modal-title text-center f-w ",id:"EMIModalLabel",children:"EMI OPTIONS"}),(0,l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:D})]}),(0,l.jsx)("div",{className:"modal-body",style:{padding:"0px"},children:null===(t=Object.keys(f))||void 0===t?void 0:t.map((e,t)=>(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)("table",{width:"100%",className:"table",border:0,cellPadding:0,cellSpacing:0,id:"listingTable".concat(t),children:(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsx)("td",{colSpan:3,children:(0,l.jsxs)("div",{className:"emi_bank_logo",children:[(0,l.jsx)("span",{className:e}),(0,l.jsxs)("h4",{children:[e," Credit Card"]})]})})}),(0,l.jsxs)("tr",{className:"emi_plan_head",children:[(0,l.jsx)("th",{children:"EMI Plan"}),(0,l.jsx)("th",{children:"Interest(PA)"}),(0,l.jsx)("th",{children:"Total Cost"})]}),f[e].map((e,t)=>{var s,a;return(0,l.jsxs)("tr",{children:[(0,l.jsxs)("td",{children:[(0,l.jsxs)("span",{className:"emi_plan",children:["₹",null!==(s=e.price)&&void 0!==s?s:""," "]}),(0,l.jsx)("small",{children:"X"})," ",null!==(a=e.month)&&void 0!==a?a:"","m"]}),(0,l.jsxs)("td",{children:[" ₹",Math.round(null==e?void 0:e.interest),(0,l.jsxs)("span",{className:"interest_pa",children:["(",(e.interest/e.price*100).toFixed(2),"%)"]})]}),(0,l.jsxs)("td",{children:[" ₹",e.totalCost]})]},t)})]})}),t!==Object.keys(f).length-1&&(0,l.jsx)("hr",{})]},t))})]})})})]})}}}]);