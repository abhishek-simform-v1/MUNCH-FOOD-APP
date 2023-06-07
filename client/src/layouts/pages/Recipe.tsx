import Header from "../../shared/navbar/Header";
import Paragraph from "../../utils/Typography/Paragraph";
import MainContainer from "../../utils/containers/MainContainer";
import RecipeInfo from "../page_Components/Recipe/RecipeInfo";

const Recipe = () => {
  return (
    <>
      {/* <Header /> */}
      <MainContainer>
        <RecipeInfo />
      </MainContainer>
    </>
  );
};

export default Recipe;
