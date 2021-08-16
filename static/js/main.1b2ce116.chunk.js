(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{20:function(e,n,t){"use strict";var c=t(0),l=t(1),i=t(16),a=t(3),s=t(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),o=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===o&&s.a.initialize(j);var b=function(){var e=Object(a.f)().pathname;return Object(l.useEffect)((function(){"production"===o&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},h=t(5),d=t(30),u=[{index:!0,label:"Leo Dong",path:"/"},{label:"Resume",path:"/resume"},{label:"Photography",path:"/photography"},{label:"Art",path:"/art"},{label:"Blog",path:"/blog"}],O=Object(l.lazy)((function(){return t.e(3).then(t.t.bind(null,53,7))})),m=function(){var e=Object(l.useState)(!1),n=Object(d.a)(e,2),t=n[0],i=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:t,disableAutoFocus:!0,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:u.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:e.path,onClick:function(){return i(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:u.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(h.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:u.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=t(25),f=t(26),g=t(27),v=t(28),w=t(29),k=[{link:"https://github.com/leoodong",label:"Github",icon:f.faGithub},{link:"https://www.instagram.com/leoodong/",label:"Instagram",icon:g.faInstagram},{link:"https://www.linkedin.com/in/dongleo",label:"LinkedIn",icon:v.faLinkedinIn},{link:"mailto:leozhdong@gmail.com",label:"Email",icon:w.faEnvelope}],N=function(){return Object(c.jsx)("ul",{className:"icons",children:k.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(p.a,{icon:e.icon})})},e.label)}))})},y=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",align:"center",children:[Object(c.jsx)(h.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Leo Dong"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:leozhdong@gmail.com",children:"leozhdong@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"Hey, I'm Leo."}),Object(c.jsxs)("p",{children:["Professionally, I am currently using data science and machine learning to build novel product features at ",Object(c.jsx)("a",{href:"https://vonto.com/",children:"Vonto"}),". Prior to that, I was doing the same at ",Object(c.jsx)("a",{href:"https://www.commbank.com.au",children:"the Commonwealth Bank of Australia"})," in the financial wellbeing space, building things like ",Object(c.jsx)("a",{href:"https://www.commbank.com.au/digital-banking/bill-sense.html",children:"this"}),"."]}),Object(c.jsxs)("p",{children:["In my free time at home or in lockdown, I spend it ",Object(c.jsx)("a",{href:"https://blog.leodong.me",children:"writing"}),", reading and ",Object(c.jsx)("a",{href:"/art",children:"painting"}),". When I'm out and about I am most likely travelling, playing football/futsal or doing some ",Object(c.jsx)("a",{href:"https://photo.leodong.me",children:"photography"}),". Other things I have dabbled in include scuba diving, volleyball and skiing."]}),Object(c.jsx)("ul",{className:"actions",align:"center",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(h.b,{to:"/blog",className:"button",children:"My Blog"}):Object(c.jsx)(h.b,{to:"/resume",className:"button",children:"Read More"})})})]}),Object(c.jsx)("section",{id:"footer",align:"center",children:Object(c.jsx)(N,{})})]})},I=function(){var e=Object(a.f)().pathname;return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},E=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(I,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Leo Dong",defaultTitle:"Leo Dong",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(y,{})]})]})};E.defaultProps={children:null,fullPage:!1,title:null,description:"Leo Dong's personal website."};n.a=E},43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var c=t(0),l=t(1),i=t.n(l),a=t(15),s=t(5),r=t(3),o=t(20),j=(t(43),Object(l.lazy)((function(){return t.e(6).then(t.bind(null,51))}))),b=Object(l.lazy)((function(){return t.e(7).then(t.bind(null,52))})),h=Object(l.lazy)((function(){return t.e(8).then(t.bind(null,55))})),d=Object(l.lazy)((function(){return t.e(5).then(t.bind(null,56))})),u=Object(l.lazy)((function(){return t.e(4).then(t.bind(null,57))})),O=Object(l.lazy)((function(){return t.e(9).then(t.bind(null,54))})),m=function(){return Object(c.jsx)(s.a,{basename:"",children:Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:j}),Object(c.jsx)(r.a,{path:"/photography",component:h}),Object(c.jsx)(r.a,{path:"/art",component:d}),Object(c.jsx)(r.a,{path:"/blog",component:u}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:b,status:404})]})})})},x=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(m,{})})},p=document.getElementById("root");p.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(x,{}),p):Object(a.render)(Object(c.jsx)(x,{}),p)}},[[44,1,2]]]);
//# sourceMappingURL=main.1b2ce116.chunk.js.map