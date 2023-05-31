import { RouterProvider } from "react-router-dom";
import { routerOfApp } from "./routes/routes";
import "./styles/global.css";
import { MainContainer } from "./styleComponents/utils/utils";

RouterProvider;
function App() {
  return (
    <div className="App">
      <RouterProvider router={routerOfApp}></RouterProvider>
    </div>
  );
}

export default App;
