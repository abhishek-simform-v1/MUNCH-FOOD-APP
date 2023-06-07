import { BrowserRouter, Routes } from "react-router-dom";
import Sidebar from "../../../../shared/sidebar/Sidebar";
import FormDisabledDemo from "../Form/Form";
const CreateRecipe = () => {
  return (
    <Sidebar>
      <FormDisabledDemo />
    </Sidebar>
  );
};

export default CreateRecipe;
