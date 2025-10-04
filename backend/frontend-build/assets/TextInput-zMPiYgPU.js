import{j as e}from"./index-BzeirQbh.js";const n=({label:r,icon:s,id:a,required:d,...t})=>{const o=a||t.name||(r?`input-${r.replace(/\s+/g,"-").toLowerCase()}`:"");return e.jsxs("div",{children:[r&&e.jsxs("label",{htmlFor:o,className:"block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2",children:[r,d&&e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsxs("div",{className:"relative",children:[s&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center",children:s}),e.jsx("input",{id:o,...t,className:`w-full ${s?"pl-10":"pl-4"} py-3 
            border border-gray-200 dark:border-gray-600 rounded-lg 
            focus:border-indigo-500 hover:border-indigo-500 
            focus:ring-0 focus:outline-none dark:focus:border-indigo-500 
            dark:bg-gray-700 dark:text-white 
            transition-colors duration-200 ease-in-out`})]})]})};export{n as T};
