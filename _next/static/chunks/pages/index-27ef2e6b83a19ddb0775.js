(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,a,t){"use strict";var n=t(3848);a.default=void 0;var r,i=(r=t(7294))&&r.__esModule?r:{default:r},o=t(1063),s=t(4651),c=t(7426);var l={};function d(e,a,t,n){if(e&&o.isLocalURL(a)){e.prefetch(a,t,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[a+"%"+t+(r?"%"+r:"")]=!0}}var u=function(e){var a,t=!1!==e.prefetch,r=s.useRouter(),u=i.default.useMemo((function(){var a=o.resolveHref(r,e.href,!0),t=n(a,2),i=t[0],s=t[1];return{href:i,as:e.as?o.resolveHref(r,e.as):s||i}}),[r,e.href,e.as]),f=u.href,h=u.as,m=e.children,p=e.replace,g=e.shallow,x=e.scroll,j=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var v=(a=i.default.Children.only(m))&&"object"===typeof a&&a.ref,b=c.useIntersection({rootMargin:"200px"}),k=n(b,2),y=k[0],_=k[1],w=i.default.useCallback((function(e){y(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,y]);i.default.useEffect((function(){var e=_&&t&&o.isLocalURL(f),a="undefined"!==typeof j?j:r&&r.locale,n=l[f+"%"+h+(a?"%"+a:"")];e&&!n&&d(r,f,h,{locale:a})}),[h,f,_,j,t,r]);var N={ref:w,onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||function(e,a,t,n,r,i,s,c){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),a[r?"replace":"push"](t,n,{shallow:i,locale:c,scroll:s}))}(e,r,f,h,p,g,x,j)},onMouseEnter:function(e){o.isLocalURL(f)&&(a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),d(r,f,h,{priority:!0}))}};if(e.passHref||"a"===a.type&&!("href"in a.props)){var M="undefined"!==typeof j?j:r&&r.locale,I=r&&r.isLocaleDomain&&o.getDomainLocale(h,M,r&&r.locales,r&&r.domainLocales);N.href=I||o.addBasePath(o.addLocale(h,M,r&&r.defaultLocale))}return i.default.cloneElement(a,N)};a.default=u},7426:function(e,a,t){"use strict";var n=t(3848);Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(e){var a=e.rootMargin,t=e.disabled||!o,c=r.useRef(),l=r.useState(!1),d=n(l,2),u=d[0],f=d[1],h=r.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||u||e&&e.tagName&&(c.current=function(e,a,t){var n=function(e){var a=e.rootMargin||"",t=s.get(a);if(t)return t;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var a=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;a&&t&&a(t)}))}),e);return s.set(a,t={id:a,observer:r,elements:n}),t}(t),r=n.id,i=n.observer,o=n.elements;return o.set(e,a),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),s.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:a}))}),[t,a,u]);return r.useEffect((function(){if(!o&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[h,u]};var r=t(7294),i=t(3447),o="undefined"!==typeof IntersectionObserver;var s=new Map},3413:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return x}});var n=t(3111),r=t.n(n),i=t(1664),o=t(5893);function s(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("header",{className:r().header,children:[(0,o.jsx)("h1",{className:r().title,children:"Sid Ghodke"}),(0,o.jsx)("img",{src:"/avatar.jpeg",alt:"Sid Ghodke avatar"})]}),(0,o.jsx)("section",{className:r().about,children:(0,o.jsxs)("p",{children:["I'm Sid, I live in Northern California. These days I'm involved mostly in software - but I still find time for surfing, reading, and writing. A lot of my recent work involves digital health and team building. I blog at ",(0,o.jsx)("a",{href:"//medium.com/@sid.ghodke",children:"on Medium"}),"."," ",(0,o.jsx)(i.default,{href:"/Siddharth%20Ghodke%20(Digital%20Health%20Leader).pdf",children:"My Resume"}),"."]})})]})}var c=t(9799),l=t.n(c);function d(){return(0,o.jsx)("section",{className:l().social,children:(0,o.jsxs)("div",{children:[(0,o.jsx)("a",{href:"//stackoverflow.com/users/721564/sid-ghodke",children:(0,o.jsx)("i",{className:"fab fa-stack-overflow"})}),(0,o.jsx)("a",{href:"//facebook.com/sid.ghodke",children:(0,o.jsx)("i",{className:"fab fa-facebook"})}),(0,o.jsx)("a",{href:"//twitter.com/MultigrainSid",children:(0,o.jsx)("i",{className:"fab fa-twitter"})}),(0,o.jsx)("a",{href:"//plus.google.com/+SidGhodke/posts",children:(0,o.jsx)("i",{className:"fab fa-google-plus-g"})}),(0,o.jsx)("a",{href:"//linkedin.com/in/sidghodke",children:(0,o.jsx)("i",{className:"fab fa-linkedin"})}),(0,o.jsx)("a",{href:"//github.com/sughodke",children:(0,o.jsx)("i",{className:"fab fa-github-alt"})}),(0,o.jsx)("a",{href:"//bitbucket.com/sid_ghodke",children:(0,o.jsx)("i",{className:"fab fa-bitbucket"})}),(0,o.jsx)("a",{href:"//angel.co/sid-ghodke",children:(0,o.jsx)("i",{className:"fab fa-angellist"})}),(0,o.jsx)("a",{href:"//medium.com/@sid.ghodke",children:(0,o.jsx)("i",{className:"fab fa-medium"})}),(0,o.jsx)("a",{href:"//kaggle.com/cheedcheed",children:(0,o.jsx)("i",{className:"fab fa-kaggle"})}),(0,o.jsx)("a",{href:"//quora.com/profile/Sid-Ghodke",children:(0,o.jsx)("i",{className:"fab fa-quora"})}),(0,o.jsx)("a",{href:"//goodreads.com/user/show/84811296-sid-ghodke",children:(0,o.jsx)("i",{className:"fab fa-goodreads"})})]})})}var u=t(4702),f=t.n(u);function h(){return(0,o.jsxs)("section",{className:f().contact,children:[(0,o.jsxs)("p",{children:["Feel free to contact me. I can be reached by sending a message to ",(0,o.jsx)("a",{href:"#",children:"sid.ghodke@gmail.com"})," or by using the form below."]}),(0,o.jsxs)("form",{className:f().contactForm,action:"MAILTO:sid.ghodke@gmail.com",method:"get",encType:"text/plain",children:[(0,o.jsx)("input",{className:f().inputBlockLevel,type:"text",name:"subject",placeholder:"Name",required:!0}),(0,o.jsx)("textarea",{className:f().inputBlockLevel,name:"body",placeholder:"Message",rows:"5",required:!0}),(0,o.jsx)("button",{type:"submit",className:f().sendButton,children:"SEND"})]})]})}var m=t(4476),p=t.n(m);function g(e){var a=e.children;e.className;return(0,o.jsx)("section",{className:p().article,children:a})}function x(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(s,{}),(0,o.jsx)(d,{}),(0,o.jsxs)("main",{children:[(0,o.jsx)(g,{children:(0,o.jsxs)("p",{children:[(0,o.jsx)("a",{children:"RentMetrics"})," is a companion tool to help Turo, Uber and Lyft drivers understand cost and earnings per-mile. The models are trained on custom datasets and are accurate to major Metros. I am currently working on adding mapping and a Material Design UI."]})}),(0,o.jsx)(g,{children:(0,o.jsxs)("p",{children:["Two years ago I started ",(0,o.jsx)("a",{href:"http://172.93.55.89",children:"AlohaMD"}),", a telehealth consulting service in the SF Bay Area. We've stopped taking on new contracts. See our case-studies for the work we undertook."]})}),(0,o.jsx)(g,{children:(0,o.jsxs)("p",{children:[(0,o.jsx)("a",{children:"Beardly"})," is an augmented reality app that I have been developing for iOS. My goal was to create a teaching tool on shaving with the direction of beard hairs \u2014 preventing ingrown hairs. Software is written to identify and highlight beard hair, modeling is needed to get the direction of hairs at a given point."]})}),(0,o.jsx)(g,{children:(0,o.jsxs)("p",{children:["Kahasi is a ",(0,o.jsx)("a",{href:"https://en.wikipedia.org/wiki/SuperH#J_Core",children:"SuperH/JCore"})," SoC emulator that I am writing with arm.js and PyPy.js. The simulation is designed to run the full Linux and XWindows sandbox environment right in the browser."]})}),(0,o.jsx)(g,{children:(0,o.jsxs)("p",{children:["I'm building ",(0,o.jsx)("a",{href:"#",children:"Sanjay the IT Guy"}),", a time management game (to the likes of DinerDash) that puts you in the shoes of Sanjay an under-paid IT Guy who has to put out literal and figurative fires in his office."]})}),(0,o.jsx)(g,{children:(0,o.jsxs)("p",{children:["My newest project is ",(0,o.jsx)("a",{href:"//roscida.biz",children:"Roscida"}),", a tool to move communications among teams into the 21st century. This tool will migrate conversations from Mailers and USENET groups into ",(0,o.jsx)("a",{href:"http://discourse.org",children:"Discourse"})," community. Users will be able to search previous conversations, create new threads all while using a great web-first User Interface."]})})]}),(0,o.jsx)(h,{})]})}},8581:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3413)}])},4702:function(e){e.exports={contact:"ContactForm_contact__1O4ft",inputBlockLevel:"ContactForm_inputBlockLevel__1-uFg",sendButton:"ContactForm_sendButton__1eJCa",contactForm:"ContactForm_contactForm__2pS1M"}},3111:function(e){e.exports={title:"Header_title__1vi4d",header:"Header_header__182Qc",about:"Header_about__2tkmX"}},4476:function(e){e.exports={article:"Home_article__O1Srv"}},9799:function(e){e.exports={social:"SocialLinks_social__iCnLM"}},1664:function(e,a,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return a=8581,e(e.s=a);var a}));var a=e.O();_N_E=a}]);