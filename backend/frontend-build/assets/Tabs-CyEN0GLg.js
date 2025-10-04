import{r as n,j as e}from"./index-BzeirQbh.js";const i=({tabs:s,defaultActiveTab:t=0,className:c=""})=>{const[a,l]=n.useState(t);return e.jsxs("div",{className:`w-full ${c}`,children:[e.jsx("div",{className:"border-b border-gray-200",children:e.jsx("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:s.map((o,r)=>e.jsx("button",{onClick:()=>l(r),className:`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${a===r?"border-blue-500 text-blue-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
              `,"aria-current":a===r?"page":void 0,children:o.label},r))})}),e.jsx("div",{className:"mt-4",children:s[a].content})]})};export{i as T};
