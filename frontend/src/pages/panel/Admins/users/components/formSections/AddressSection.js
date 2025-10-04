import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NumberInput } from '@/components/forms/inputs/NumberInput';
import { TextInput } from '@/components/forms/inputs/TextInput';
import FormSectionHeader from '@/components/forms/sections/FormSectionHeader';
const AddressSection = () => {
    return (_jsx("div", { className: "mt-2", children: _jsxs("div", { className: "bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700 rounded-xl", children: [_jsx(FormSectionHeader, { title: "User Address" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsx("div", { className: "md:col-span-2", children: _jsx(TextInput, { id: "street", name: "street", label: "Street Address", placeholder: "123 Main St" }) }), _jsx(TextInput, { id: "city", name: "city", label: "City", placeholder: "New York" }), _jsx(TextInput, { id: "state", name: "state", label: "State / Province", placeholder: "California" }), _jsx(NumberInput, { id: "postalCode", name: "postalCode", label: "Postal Code", placeholder: "10001" }), _jsx(TextInput, { id: "country", name: "country", label: "Country", placeholder: "United States" })] })] }) }));
};
export default AddressSection;
