import { Subtitle, Tagline, Title } from "../../styleComponents/utils/utils";
import { BlogContainer } from "./styles/BlogModalStyle";
import style from "./styles/dishcard.module.css";
import img1 from "./../../assets/dish.jpg";
import img2 from "./../../assets/dish_02.jpg";
import img3 from "./../../assets/dish_03.jpg";
import Card from "./Card";
import BlogCard from "./BlogCard";
import Button from "../../shared/buttons/Button";

const BlogModal = () => {
  return (
    <>
      <Subtitle color="var(--logo-color)">Blogs</Subtitle>
      <Tagline color="var(--accent_color)" align={"center"}>
        we provide a variety of food and beverage recipes with high famous chefs
      </Tagline>
      <BlogContainer>
        <BlogCard img={img1} />
        <BlogCard img={img2} />
        <BlogCard img={img3} />
      </BlogContainer>
      <Button
        color="var(--accent_color)"
        border="var(--accent_color)"
        typeOfBtn="submit"
        btnfor={"More blog"}
      />
    </>
  );
};

export default BlogModal;
