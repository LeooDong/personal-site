(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{19:function(e,n,t){"use strict";var c=t(0),l=t(1),i=t(15),a=t(7),s=t(29),r=[{index:!0,label:"Leo Dong",path:"/"},{label:"Resume",path:"/resume"},{label:"Photography",path:"/photography"},{label:"Art",path:"/art"},{label:"Blog",path:"/blog"}],o=Object(l.lazy)((function(){return t.e(3).then(t.t.bind(null,52,7))})),j=function(){var e=Object(l.useState)(!1),n=Object(s.a)(e,2),t=n[0],i=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(o,{right:!0,isOpen:t,disableAutoFocus:!0,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:r.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:e.path,onClick:function(){return i(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},b=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:r.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(a.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:r.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(j,{})]})},h=t(24),d=t(25),u=t(26),m=t(27),O=t(28),x=[{link:"https://github.com/leoodong",label:"Github",icon:d.faGithub},{link:"https://www.instagram.com/leoodong/",label:"Instagram",icon:u.faInstagram},{link:"https://www.linkedin.com/in/dongleo",label:"LinkedIn",icon:m.faLinkedinIn},{link:"mailto:leozhdong@gmail.com",label:"Email",icon:O.faEnvelope}],g=function(){return Object(c.jsx)("ul",{className:"icons",children:x.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(h.a,{icon:e.icon})})},e.label)}))})},p=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",align:"center",children:[Object(c.jsx)(a.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Leo Dong"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:leozhdong@gmail.com",children:"leozhdong@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"Hey, I'm Leo."}),Object(c.jsxs)("p",{children:["Professionally, I am currently using data science and machine learning to build novel product features at ",Object(c.jsx)("a",{href:"https://vonto.com/",children:"Vonto"}),". Prior to that, I was doing the same at ",Object(c.jsx)("a",{href:"https://www.commbank.com.au",children:"the Commonwealth Bank of Australia"})," in the financial wellbeing space, building things like ",Object(c.jsx)("a",{href:"https://www.commbank.com.au/digital-banking/bill-sense.html",children:"this"}),"."]}),Object(c.jsxs)("p",{children:["In my free time at home or in lockdown, I spend it ",Object(c.jsx)("a",{href:"https://blog.leodong.me",children:"writing"}),", reading and ",Object(c.jsx)("a",{href:"/art",children:"painting"}),". When I'm out and about I am most likely travelling, playing football/futsal or doing some ",Object(c.jsx)("a",{href:"https://photo.leodong.me",children:"photography"}),". Other things I have dabbled in include scuba diving, volleyball and skiing."]}),Object(c.jsx)("ul",{className:"actions",align:"center",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(a.b,{to:"/blog",className:"button",children:"My Blog"}):Object(c.jsx)(a.b,{to:"/resume",className:"button",children:"Read More"})})})]}),Object(c.jsx)("section",{id:"footer",align:"center",children:Object(c.jsx)(g,{})})]})},f=t(3),w=function(){var e=Object(f.f)().pathname;return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},k="G-HRG5MJTZFR",y=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(w,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Leo Dong",defaultTitle:"Leo Dong",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description}),Object(c.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(k)}),Object(c.jsx)("script",{children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', \"".concat(k,'");\n        ')})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(b,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(p,{})]})]})};y.defaultProps={children:null,fullPage:!1,title:null,description:"Leo Dong's personal website."};n.a=y},42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var c=t(0),l=t(1),i=t.n(l),a=t(14),s=t(7),r=t(3),o=t(19),j=(t(42),Object(l.lazy)((function(){return t.e(6).then(t.bind(null,50))}))),b=Object(l.lazy)((function(){return t.e(7).then(t.bind(null,51))})),h=Object(l.lazy)((function(){return t.e(8).then(t.bind(null,54))})),d=Object(l.lazy)((function(){return t.e(5).then(t.bind(null,55))})),u=Object(l.lazy)((function(){return t.e(4).then(t.bind(null,56))})),m=Object(l.lazy)((function(){return t.e(9).then(t.bind(null,53))})),O=function(){return Object(c.jsx)(s.a,{basename:"",children:Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:j}),Object(c.jsx)(r.a,{path:"/photography",component:h}),Object(c.jsx)(r.a,{path:"/art",component:d}),Object(c.jsx)(r.a,{path:"/blog",component:u}),Object(c.jsx)(r.a,{path:"/resume",component:m}),Object(c.jsx)(r.a,{component:b,status:404})]})})})},x=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})})},g=document.getElementById("root");g.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(x,{}),g):Object(a.render)(Object(c.jsx)(x,{}),g)}},[[43,1,2]]]);
//# sourceMappingURL=main.2434f8a7.chunk.js.map