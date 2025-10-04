import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import HeaderLayout from '../HeaderLayout';
const PageLayout = ({ title, breadcrumbs = [], children, }) => {
    return (_jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx(HeaderLayout, { title: title, breadcrumbs: breadcrumbs }), _jsx("div", { className: "flex-grow container-fluid mt-2", style: { minHeight: '100vh' }, children: _jsx("div", { className: "card bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 w-full h-full rounded-xl", children: _jsx("div", { className: "card-body", children: children }) }) })] }));
};
export default PageLayout;
