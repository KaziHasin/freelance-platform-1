import { jsx as _jsx } from "react/jsx-runtime";
const FormSectionHeader = ({ title }) => {
    return (_jsx("div", { className: "bg-gray-50 dark:bg-gray-700/50 -m-8 p-2 pt-0 mb-8 border-b border-gray-100 dark:border-gray-700", children: _jsx("h2", { className: "text-lg font-medium text-gray-800 dark:text-white", children: title }) }));
};
export default FormSectionHeader;
