import { ReactNode } from "react";
import style from "./style.module.css";

import Sidebar from "./Sidebar";
import Button from "../../utils/buttons/Button";
import { useNavigate } from "react-router-dom";
type props = {
  children: ReactNode;
};
const DashboardLayout = ({ children }: props) => {
  const navigate = useNavigate();
  return (
    <div className={style.display_flex}>
      <Sidebar />
      <div className={style.container}>
        <div className={style.content}>{children}</div>
      </div>
      <div className={style.back_btn}>
        <Button onClick={() => navigate("/recipes ")}>GO TO RECIPES !!!</Button>
      </div>
    </div>
  );
};

export default DashboardLayout;
