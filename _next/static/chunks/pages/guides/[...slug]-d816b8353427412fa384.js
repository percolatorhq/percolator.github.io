(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[902],{39033:function(e,r,n){"use strict";n.d(r,{V:function(){return u}});var t=n(85893),s=n(34699),c=n(17375),a=n(22152),i=n(23115),u=(n(67294),function(e){e.className;var r=e.releases,n=void 0===r?[]:r,u=e.namespace,d=void 0===u?"guides":u,f=(0,c.Z)(e,["className","releases","namespace"]),h=(0,i.MR)(n,"date","desc"),m=(0,s.Z)(h,1)[0];return(0,t.jsxs)("div",{className:"space-y-5",children:[m&&(0,t.jsxs)("a",{className:"underline text-xl text-gray-800",href:"#",children:["News: ",m.title]}),f.sections.map((function(e){return(0,t.jsx)(a.Menu,{title:e.name,children:e.guides.sort(o).map((function(e,r){return(0,t.jsxs)("div",{className:"flex text-gray-500",children:[(0,t.jsxs)("span",{className:"w-2.5",children:[r+1,"."]}),(0,t.jsx)("li",{className:"ml-2",children:(0,t.jsx)(a.NavLink,{href:l(d,e),reverse:!0,children:e.title})})]},e.slug)}))},e.name)}))]})}),l=function(e,r){return"/".concat(e,"/").concat(r.slug)},o=function(e,r){return e.number>r.number?1:0}},62393:function(e,r,n){"use strict";n.d(r,{VO:function(){return t.V}});n(85893),n(41664),n(67294),n(23115);var t=n(39033)},68274:function(e,r,n){"use strict";n.d(r,{V:function(){return t},v:function(){return s}});var t={};n.r(t),n.d(t,{A:function(){return l}});var s={};n.r(s),n.d(s,{A:function(){return o}});var c=n(85893),a=n(17375),i=n(54319),u=(n(67294),n(94503)),l=function(e){e.className;var r=(0,a.Z)(e,["className"]);return(0,c.jsx)(i.Content.Layout,{header:(0,c.jsx)(u.yW,{}),right:r.right,children:r.children})},o=function(e){e.className;var r=e.hero,n=(0,a.Z)(e,["className","hero"]);return(0,c.jsx)(i.Landing.Layout,{header:(0,c.jsxs)("div",{className:"h-screen",children:[(0,c.jsx)(u.h4,{brandClassName:"text-gray-400",itemClassName:"text-gray-300 hover:text-gray-400"}),r]}),children:n.children})}},67914:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return f}});var t=n(85893),s=n(96156),c=n(68274),a=n(23115),i=n(62393),u=(n(67294),n(79776)),l=n(21939);function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){(0,s.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var f=!0;r.default=function(e){var r=(0,u.k)("guides",e.guide);return(0,t.jsxs)(c.V.A,{className:"space-y-3",right:(0,t.jsx)(i.VO,{sections:e.sections,releases:e.releases}),children:[(0,t.jsx)(l.h,d({},r)),(0,t.jsx)("h2",{className:"text-gray-400",children:(0,a.MI)(e.guide.section)}),(0,t.jsx)("h1",{className:"prose text-4xl",children:e.guide.title}),(0,t.jsx)("ul",{className:"space-y-2 mt-10",children:e.guide.subsections.map((function(e,r){return(0,t.jsxs)("li",{className:"flex",children:[(0,t.jsxs)("div",{className:"w-5 text-gray-500",children:[r+1,"."]}),(0,t.jsx)("a",{className:"text-primary-800 underline",href:"#".concat(e.slug),children:e.name})]},r)}))}),(0,t.jsx)("div",{className:"mt-10 space-y-5",dangerouslySetInnerHTML:{__html:e.guide.content}})]})}},69372:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/[...slug]",function(){return n(67914)}])}},function(e){e.O(0,[774,493,418,888,179],(function(){return r=69372,e(e.s=r);var r}));var r=e.O();_N_E=r}]);