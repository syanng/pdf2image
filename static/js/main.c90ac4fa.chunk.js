(this["webpackJsonpupload-pdf-viewer-and-convert-to-img"]=this["webpackJsonpupload-pdf-viewer-and-convert-to-img"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(6),i=a.n(r),s=a(3),d=a(5),o=a(2),p=(a(11),a(0)),u=window.pdfjsLib;function l(){var e=c.a.useState(""),t=Object(o.a)(e,2),a=t[0],r=t[1],i=c.a.useState(0),l=Object(o.a)(i,2),b=(l[0],l[1]),j=c.a.useState([]),g=Object(o.a)(j,2),h=g[0],f=g[1],m=c.a.useState(0),x=Object(o.a)(m,2),v=(x[0],x[1]),O=c.a.useState(1),w=Object(o.a)(O,2),y=(w[0],w[1],c.a.useState(1)),S=Object(o.a)(y,2),k=S[0],L=(S[1],c.a.useState("")),C=Object(o.a)(L,2),E=C[0],I=C[1],D=c.a.useState(""),P=Object(o.a)(D,2),R=P[0],B=P[1];function U(){return(U=Object(d.a)(Object(s.a)().mark((function e(t){var a,n,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(!0),a=t.target.files[0],n=URL.createObjectURL(a),e.next=6,u.getDocument({url:n});case 6:c=e.sent,r(c),I(!1),document.getElementById("file-to-upload").value="",e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function A(){return(A=Object(d.a)(Object(s.a)().mark((function e(){var t,n,c,r,i,d,o;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B(!0),t=[],(n=document.createElement("canvas")).setAttribute("className","canv"),document.querySelector(".canv"),c=1;case 6:if(!(c<=a.numPages)){e.next=24;break}return e.next=9,a.getPage(c);case 9:return r=e.sent,i=r.getViewport({scale:1}),n.height=i.height,n.width=i.width,d={canvasContext:n.getContext("2d"),viewport:i},console.log("page lenght",a.numPages),b(i.width),v(i.height),e.next=19,r.render(d).promise;case 19:o=n.toDataURL("image/png"),t.push(o);case 21:c++,e.next=6;break;case 24:f(t),B(!1);case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){a&&function(){A.apply(this,arguments)}()}),[a,k]);var J={wrapper:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"5px"},imageWrapper:{border:"1px solid rgba(0,0,0,0.15)",borderRadius:"3px",boxShadow:"0 2px 5px 0 rgba(0,0,0,0.25)",padding:"0"}};return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("button",{id:"upload-button",onClick:function(){return document.getElementById("file-to-upload").click()},children:"Select PDF"}),Object(p.jsx)("input",{type:"file",id:"file-to-upload",accept:"application/pdf",hidden:!0,onChange:function(e){return U.apply(this,arguments)}}),Object(p.jsxs)("div",{id:"pdf-main-container",children:[Object(p.jsx)("div",{id:"pdf-loader",hidden:!E,children:"Loading document ..."}),Object(p.jsxs)("div",{id:"pdf-contents",children:[Object(p.jsx)("div",{id:"image-convas-row",children:Object(p.jsx)("div",{style:J.wrapper,children:h.map((function(e,t){return Object(p.jsx)("div",{style:J.imageWrapper,children:Object(p.jsx)("img",{id:"image-generated",src:e,alt:"pdfImage",style:{width:"100%",height:"100%",margin:"0",border:"none"}})},t)}))})}),Object(p.jsx)("div",{id:"page-loader",hidden:!R,children:"Loading page ..."})]})]})]})}var b=document.getElementById("root");i.a.render(Object(p.jsx)(n.StrictMode,{children:Object(p.jsx)(l,{})}),b)}},[[13,1,2]]]);
//# sourceMappingURL=main.c90ac4fa.chunk.js.map