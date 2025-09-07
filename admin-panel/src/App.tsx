import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import AppRoutes from './routes';
import AuthInitializer from './components/AuthInitializer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <AuthInitializer /> */}
        <AppRoutes />
      </Router>
    </Provider>
  );
}

export default App;
