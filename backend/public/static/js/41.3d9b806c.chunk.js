(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[41],{520:function(t,e,n){"use strict";var i=n(4),c=n(2),r=n(0),o=(n(7),n(6)),a=n(8),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var x=r.forwardRef((function(t,e){var n=t.alignContent,a=void 0===n?"stretch":n,s=t.alignItems,l=void 0===s?"stretch":s,d=t.classes,x=t.className,f=t.component,g=void 0===f?"div":f,u=t.container,m=void 0!==u&&u,p=t.direction,v=void 0===p?"row":p,j=t.item,b=void 0!==j&&j,h=t.justify,w=t.justifyContent,y=void 0===w?"flex-start":w,O=t.lg,C=void 0!==O&&O,S=t.md,W=void 0!==S&&S,N=t.sm,k=void 0!==N&&N,I=t.spacing,z=void 0===I?0:I,M=t.wrap,B=void 0===M?"wrap":M,D=t.xl,G=void 0!==D&&D,E=t.xs,J=void 0!==E&&E,R=t.zeroMinWidth,T=void 0!==R&&R,F=Object(i.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),H=Object(o.a)(d.root,x,m&&[d.container,0!==z&&d["spacing-xs-".concat(String(z))]],b&&d.item,T&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==B&&d["wrap-xs-".concat(String(B))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==a&&d["align-content-xs-".concat(String(a))],"flex-start"!==(h||y)&&d["justify-content-xs-".concat(String(h||y))],!1!==J&&d["grid-xs-".concat(String(J))],!1!==k&&d["grid-sm-".concat(String(k))],!1!==W&&d["grid-md-".concat(String(W))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==G&&d["grid-xl-".concat(String(G))]);return r.createElement(g,Object(c.a)({className:H,ref:e},F))})),f=Object(a.a)((function(t){return Object(c.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return s.forEach((function(i){var c=t.spacing(i);0!==c&&(n["spacing-".concat(e,"-").concat(i)]={margin:"-".concat(d(c,2)),width:"calc(100% + ".concat(d(c),")"),"& > $item":{padding:d(c,2)}})})),n}(t,"xs"),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var i={};l.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var c="".concat(Math.round(t/12*1e8)/1e6,"%");i[e]={flexBasis:c,flexGrow:0,maxWidth:c}}else i[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(c.a)(t,i):t[e.breakpoints.up(n)]=i}(e,t,n),e}),{}))}),{name:"MuiGrid"})(x);e.a=f},557:function(t,e,n){"use strict";n(0);var i=n(33),c=n(488),r=Object(c.a)((function(t){return{root:{minHeight:"130px",height:"100%",backgroundColor:"var(--bg-color-accent)",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"all 0.35s","&:hover, &:active":{backgroundColor:"var(--hover-color)"}},icon:{width:"5rem",height:"5rem",marginBottom:"12px"},title:{color:"var(--primary-color)",fontWeight:600,fontSize:"2rem",letterSpacing:"0.5px"}}})),o=n(1);e.a=function(t){var e=t.to,n=void 0===e?"":e,c=t.icon,a=void 0===c?"":c,s=t.title,l=void 0===s?"":s,d=r();return Object(o.jsxs)(i.b,{to:n,className:"".concat(d.root," flex-center--ver w-100"),children:[Object(o.jsx)("img",{className:d.icon,src:a,alt:"Icon"}),Object(o.jsx)("h3",{className:d.title,children:l})]})}},730:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return f}));var i=n(3),c=(n(0),n(527)),r=n(171),o=n(176),a=n(520),s=n(557),l=n(56),d=n(1),x=Object(r.a)((function(t){return Object(i.a)({},Object(o.b)(t))}));function f(){Object(l.a)("Word Topic");var t=x();return Object(d.jsxs)("div",{className:"".concat(t.root," english-container"),children:[Object(d.jsx)("div",{className:"flex-center-between",children:Object(d.jsx)("h1",{className:"english-title",children:"Vocabulary Topics"})}),Object(d.jsx)("div",{className:"english-break"}),Object(d.jsx)(a.a,{container:!0,spacing:3,children:c.a.map((function(t,e){return Object(d.jsx)(a.a,{item:!0,xs:12,md:4,children:Object(d.jsx)(s.a,{to:"/word/".concat(t.key),icon:t.icon,title:t.title})},e)}))})]})}}}]);
//# sourceMappingURL=41.3d9b806c.chunk.js.map