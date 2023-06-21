import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/Store';

import './styles/global.css';
import AppRoutes from './routes/routes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
