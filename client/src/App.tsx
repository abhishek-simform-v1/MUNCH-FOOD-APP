import { RouterProvider } from 'react-router-dom';
import { routerOfApp } from './routes/routes';
import './styles/global.css';
import Sidebar from './shared/sidebar/Sidebar';
import { Provider } from 'react-redux';
import { store } from './store/Store';

RouterProvider;
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={routerOfApp}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
