import Paragraph from "../utils/Typography/Paragraph";
import loader from "./../assets/loading.gif";
import "./style.css";
const Loading = () => {
  return (
    <div className="loading_container">
      <img src={loader} alt="loader" className="loader1" />
      <Paragraph>Loading ...</Paragraph>
    </div>
  );
};

export default Loading;
