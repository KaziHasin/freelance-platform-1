import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import AppRoutes from './routes';
import ToastProvider from "@/components/ui/ToastProvider";
function App() {
    return (_jsxs(Provider, { store: store, children: [_jsx(Router, { children: _jsx(AppRoutes, {}) }), _jsx(ToastProvider, {})] }));
}
export default App;
