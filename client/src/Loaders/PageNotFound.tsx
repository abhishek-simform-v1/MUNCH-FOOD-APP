import Paragraph from "../utils/Typography/Paragraph";
import Button from "../utils/buttons/Button";
import PageNot from "./../assets/404error.gif";
import "./style.css";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="loading_container">
      <img src={PageNot} alt="PageNotFound" className="loader1" />
      <Button onClick={() => navigate("")}>Back Home</Button>
    </div>
  );
};

export default PageNotFound;
