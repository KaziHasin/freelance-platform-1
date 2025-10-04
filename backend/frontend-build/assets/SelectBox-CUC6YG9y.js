import{j as r}from"./index-BzeirQbh.js";const c=({label:e,options:d,id:a,required:n,...s})=>{const t=a||s.name||`select-${e==null?void 0:e.replace(/\s+/g,"-").toLowerCase()}`;return r.jsxs("div",{children:[e&&r.jsxs("label",{htmlFor:t,className:"block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2",children:[e," ",n&&r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsx("select",{id:t,...s,className:`w-full pl-4 py-3 
                    border border-gray-200 dark:border-gray-600 rounded-lg 
                    focus:border-indigo-500 hover:border-indigo-500 
                    focus:ring-0 focus:outline-none dark:focus:border-indigo-500 
                    dark:bg-gray-700 dark:text-white 
                    transition-colors duration-200 ease-in-out`,children:d.map(o=>r.jsx("option",{value:o.value,children:o.label},o.value))})]})};export{c as S};
