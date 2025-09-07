import{a as l,q as e,v as a,w as y,O as j}from"./chunk-PVWAREVJ-ogl3f1pc.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,r,o)=>o?o.toUpperCase():r.toLowerCase()),h=t=>{const s=b(t);return s.charAt(0).toUpperCase()+s.slice(1)},x=(...t)=>t.filter((s,r,o)=>!!s&&s.trim()!==""&&o.indexOf(s)===r).join(" ").trim(),v=t=>{for(const s in t)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=l.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:i="",children:n,iconNode:m,...d},u)=>l.createElement("svg",{ref:u,...f,width:s,height:s,stroke:t,strokeWidth:o?Number(r)*24/Number(s):r,className:x("lucide",i),...!n&&!v(d)&&{"aria-hidden":"true"},...d},[...m.map(([g,p])=>l.createElement(g,p)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=(t,s)=>{const r=l.forwardRef(({className:o,...i},n)=>l.createElement(w,{ref:n,iconNode:s,className:x(`lucide-${N(h(t))}`,`lucide-${t}`,o),...i}));return r.displayName=h(t),r};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],C=c("bell",k);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],_=c("chevron-down",A);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],M=c("message-circle",L);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],B=c("x",$);function O({isOpen:t,onClose:s}){return t?e.jsxs("div",{className:"fixed inset-0 bg-white z-50 md:hidden",children:[e.jsxs("div",{className:"p-4 border-b flex justify-between items-center",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Menu"}),e.jsx("button",{onClick:s,className:"p-2",children:e.jsx(B,{className:"h-6 w-6"})})]}),e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4 pb-4 border-b",children:[e.jsx("img",{src:"https://n1-astg.mioto.vn/g/2025/08/06/10/nIFDhHR4rWzDOipBKvS_hA.jpg",alt:"Profile",className:"h-12 w-12 rounded-full"}),e.jsx("span",{className:"font-medium",children:"Noah Nguyen"})]}),e.jsxs("nav",{className:"space-y-4",children:[e.jsx(a,{to:"/mycars",className:"block py-2 text-gray-700 hover:text-gray-900",children:"Xe của tôi"}),e.jsx(a,{to:"/myfavs",className:"block py-2 text-gray-700 hover:text-gray-900",children:"Xe yêu thích"}),e.jsx(a,{to:"/myreward",className:"block py-2 text-gray-700 hover:text-gray-900",children:"Quà tặng"}),e.jsx(a,{to:"/aboutus",className:"block py-2 text-gray-700 hover:text-gray-900",children:"Về Mioto"}),e.jsx(a,{to:"/owner/register",className:"block py-2 text-gray-700 hover:text-gray-900",children:"Trở thành chủ xe"}),e.jsx(a,{to:"/mytrips",className:"block py-2 text-gray-700 hover:text-gray-900",children:"Chuyến của tôi"})]}),e.jsx("button",{className:"flex items-center space-x-2 text-red-600 mt-8",onClick:()=>{},children:e.jsx("span",{children:"Đăng xuất"})})]})]}):null}function D(){return e.jsx("header",{className:"border-b",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4",children:e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsxs(a,{to:"/",className:"flex items-center",children:[e.jsx("img",{src:"/logo-full.png",alt:"Logo",className:"h-8 w-auto hidden md:block"}),e.jsx("img",{src:"/logo-small.png",alt:"Logo",className:"h-8 w-auto md:hidden"})]}),e.jsxs("nav",{className:"hidden md:flex items-center space-x-8",children:[e.jsx(a,{to:"/aboutus",className:"text-gray-700 hover:text-gray-900",children:"Về Mioto"}),e.jsx(a,{to:"/owner/register",className:"text-gray-700 hover:text-gray-900",children:"Trở thành chủ xe"}),e.jsx(a,{to:"/mytrips",className:"text-gray-700 hover:text-gray-900",children:"Chuyến của tôi"})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("button",{className:"p-2 hover:bg-gray-100 rounded-full relative",children:[e.jsx(C,{className:"h-5 w-5"}),e.jsx("span",{className:"absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"})]}),e.jsx(a,{to:"/messages",className:"p-2 hover:bg-gray-100 rounded-full",children:e.jsx(M,{className:"h-5 w-5"})}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("img",{src:"https://n1-astg.mioto.vn/g/2025/08/06/10/nIFDhHR4rWzDOipBKvS_hA.jpg",alt:"Profile",className:"h-8 w-8 rounded-full"}),e.jsx("span",{className:"hidden md:block",children:"Noah Nguyen"}),e.jsx(_,{className:"h-4 w-4"})]}),e.jsx("button",{className:"md:hidden p-2 hover:bg-gray-100 rounded-full",children:e.jsx(O,{isOpen:!0,onClose:()=>{}})})]})]})})})}const E=()=>e.jsxs("div",{children:[e.jsx(D,{}),e.jsx("main",{children:e.jsx(j,{})})]}),R=y(E);export{R as default};
