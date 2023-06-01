import { Title } from "../../styleComponents/utils/utils";
import { BlogContainer } from "./styles/BlogModalStyle";
import style from "./styles/dishcard.module.css";
import img1 from "./../../assets/dish.jpg";
import img2 from "./../../assets/dish_02.jpg";
import Card from "./Card";

const BlogModal = () => {
  return (
    <>
      <Title>Blog</Title>
      <BlogContainer>
        <BlogContainer>
          <Card img={img1} />
        </BlogContainer>
        <BlogContainer>
          <Card img={img2} />
        </BlogContainer>
      </BlogContainer>
    </>
  );
};

export default BlogModal;
