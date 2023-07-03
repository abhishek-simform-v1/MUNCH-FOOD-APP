import Paragraph from "../utils/Typography/Paragraph";
import loader from "./../assets/loading2.gif";
import "./style.css";
const Loading1 = () => {
  return (
    <div className="loading_container">
      <img src={loader} alt="loader" className="loader1" />
      <Paragraph>Loading ...</Paragraph>
    </div>
  );
};

export default Loading1;
