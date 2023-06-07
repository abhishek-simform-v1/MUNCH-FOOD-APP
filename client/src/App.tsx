import { RouterProvider } from "react-router-dom";
import { routerOfApp } from "./routes/routes";
import "./styles/global.css";
import Sidebar from "./shared/sidebar/Sidebar";

RouterProvider;
function App() {
  return (
    <div className="App">
      <RouterProvider router={routerOfApp}></RouterProvider>
    </div>
  );
}

export default App;
