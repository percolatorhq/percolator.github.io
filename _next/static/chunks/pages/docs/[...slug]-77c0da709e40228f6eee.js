(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86],{22122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},81112:function(e,t,r){"use strict";r.d(t,{h:function(){return u},q:function(){return l}});var n=r(96156),i=r(85893),s=r(22122),c=r(9008);r(67294);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=(0,s.Z)({},e),r=window.location.href;return(0,i.jsxs)(c.default,{children:[(0,i.jsx)("title",{children:t.title}),(0,i.jsx)("meta",{name:"description",content:t.description}),r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{property:"og:url",content:r}),(0,i.jsx)("meta",{property:"og:site_name",content:r})]}):null,(0,i.jsx)("meta",{property:"og:title",content:t.title}),(0,i.jsx)("meta",{property:"og:description",content:t.description}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,i.jsx)("meta",{property:"twitter:title",content:t.title}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary"}),t.children]})},l=function(e){var t=(0,s.Z)({},e);return(0,i.jsxs)(u,a(a({},t),{},{children:[(0,i.jsx)("meta",{property:"og:image",content:t.image}),(0,i.jsx)("meta",{property:"og:type",content:"article"}),(0,i.jsx)("meta",{property:"article:author",content:t.author})]}))}},68399:function(e,t,r){"use strict";r.d(t,{V:function(){return a}});var n=r(85893),i=r(34699),s=r(17375),c=r(22152),o=r(23115),a=(r(67294),function(e){e.className;var t=e.releases,r=void 0===t?[]:t,a=e.namespace,p=void 0===a?"guides":a,d=(0,s.Z)(e,["className","releases","namespace"]),f=(0,o.MR)(r,"date","desc"),m=(0,i.Z)(f,1)[0];return(0,n.jsxs)("div",{className:"space-y-5",children:[m&&(0,n.jsxs)("a",{className:"underline text-xl text-gray-800",href:"#",children:["News: ",m.title]}),d.sections.map((function(e){return(0,n.jsx)(c.Menu,{title:e.name,children:e.guides.sort(l).map((function(e,t){return(0,n.jsxs)("div",{className:"flex text-gray-500",children:[(0,n.jsxs)("span",{className:"w-2.5",children:[t+1,"."]}),(0,n.jsx)("li",{className:"ml-2",children:(0,n.jsx)(c.NavLink,{href:u(p,e),reverse:!0,children:e.title})})]},e.slug)}))},e.name)}))]})}),u=function(e,t){return"/".concat(e,"/").concat(t.slug)},l=function(e,t){return e.number>t.number?1:0};r(54319),r(94184)},62393:function(e,t,r){"use strict";r.d(t,{VO:function(){return n.V}});var n=r(68399);r(85893),r(41664),r(67294),r(23115)},79776:function(e,t,r){"use strict";r.d(t,{k:function(){return c},G:function(){return s}});var n={home:[{title:i("Data to enrich your online business"),description:"Homepage for Krans"}],docs:[{title:i("API"),description:"Documentation for Krans"},function(e){return{title:i("API",e.title),description:e.title}}],guides:[{title:i("Guides"),description:"Guides for Krans"},function(e){return{title:i("Guides",e.title),description:e.title}}],examples:[{title:i("Examples"),description:"Practical code examples for Krans"},function(e){return{title:i("Examples",e.title),description:e.title}}],blog:[{title:i("Blog"),description:"Blog about web-scraping and data-integration in NodeJS"},function(e){return{title:i("Blog",e.title),description:e.summary}}]};function i(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return["Krans"].concat(t).join(" | ")}function s(e){return n[e][0]}function c(e,t){return n[e][1](t)}},68274:function(e,t,r){"use strict";r.d(t,{V:function(){return n},v:function(){return i}});var n={};r.r(n),r.d(n,{A:function(){return p}});var i={};r.r(i),r.d(i,{A:function(){return d}});var s=r(85893),c=r(87329),o=r(17375),a=r(54319),u=r(81112),l=(r(67294),r(94503)),p=function(e){e.className;var t=e.breadcrumbs,r=void 0===t?[]:t,n=e.description,i=void 0===n?"":n,p=(0,o.Z)(e,["className","breadcrumbs","description"]),d=["Krans"].concat((0,c.Z)(r)).join(" | ");return(0,s.jsxs)(a.Content.Layout,{header:(0,s.jsx)(l.yW,{}),title:d,description:i,right:p.right,children:[(0,s.jsx)(u.h,{title:d,description:i}),p.children]})},d=function(e){e.className;var t=e.description,r=e.hero,n=(0,o.Z)(e,["className","description","hero"]);return(0,s.jsx)(a.Landing.Layout,{header:(0,s.jsxs)("div",{className:"h-screen",children:[(0,s.jsx)(l.h4,{brandClassName:"text-gray-400",itemClassName:"text-gray-300 hover:text-gray-400"}),r]}),title:n.title,description:t,children:n.children})}},33148:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return d}});var n=r(85893),i=r(96156),s=r(68274),c=r(23115),o=r(62393),a=(r(67294),r(79776)),u=r(81112);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=!0;t.default=function(e){var t=(0,a.k)("docs",e.api);return(0,n.jsxs)(s.V.A,{className:"space-y-3",breadcrumbs:["Docs",e.api.title],description:e.api.title,right:(0,n.jsx)(o.VO,{namespace:"docs",sections:e.sections,releases:e.releases}),children:[(0,n.jsx)(u.h,p({},t)),(0,n.jsx)("h2",{className:"text-gray-400",children:(0,c.MI)(e.api.section)}),(0,n.jsx)("h1",{className:"prose text-4xl",children:e.api.title}),(0,n.jsx)("ul",{className:"space-y-2 mt-10",children:e.api.subsections.map((function(e,t){return(0,n.jsxs)("li",{className:"flex",children:[(0,n.jsxs)("div",{className:"w-5 text-gray-500",children:[t+1,"."]}),(0,n.jsx)("a",{className:"text-primary-800 underline",href:"#".concat(e.slug),children:e.name})]},t)}))}),(0,n.jsx)("div",{className:"mt-10 space-y-5",dangerouslySetInnerHTML:{__html:e.api.content}})]})}},58797:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/[...slug]",function(){return r(33148)}])}},function(e){e.O(0,[774,545,503,888,179],(function(){return t=58797,e(e.s=t);var t}));var t=e.O();_N_E=t}]);