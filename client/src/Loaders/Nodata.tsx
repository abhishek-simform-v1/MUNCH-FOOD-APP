import Paragraph from "../utils/Typography/Paragraph";
import no_data from "./../assets/no_data.gif";
import "./style.css";
const Nodata = () => {
  return (
    <div className="no_data_container">
      <img src={no_data} alt="loader" className="loader1" />
    </div>
  );
};

export default Nodata;
