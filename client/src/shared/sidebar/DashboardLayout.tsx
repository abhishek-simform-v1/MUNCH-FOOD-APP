import { ReactNode } from "react";
import style from "./style.module.css";

import Sidebar from "./Sidebar";
type props = {
  children: ReactNode;
};
const DashboardLayout = ({ children }: props) => {
  return (
    <div className={style.d_flex}>
      <Sidebar />
      <div className={style.container}>
        <div className={style.content}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
