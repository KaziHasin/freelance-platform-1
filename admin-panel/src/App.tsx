import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import AppRoutes from './routes';
import ToastProvider from "@/components/ui/ToastProvider";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
      <ToastProvider />
    </Provider>
  );
}

export default App;
