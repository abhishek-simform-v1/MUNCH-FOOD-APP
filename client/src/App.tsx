import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/Store';

import './styles/global.css';
import AppRoutes from './routes/routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
