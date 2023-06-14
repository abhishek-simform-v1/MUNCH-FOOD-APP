import { ReactNode, memo } from "react";
import style from "./mainContainerStyle.module.css";
type props = {
  className?: "";
  children: ReactNode;
};
const MainContainer = ({ children, className }: props) => {
  return (
    <div className={`${style.main_container} ${className}`}>{children}</div>
  );
};

export default memo(MainContainer);
