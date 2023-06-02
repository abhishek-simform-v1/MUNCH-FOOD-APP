import React from "react";
import { BlogCardContainer, BlogCardContent } from "./styles/BlogModalStyle";
import { Paragraph, Tagline } from "../../styleComponents/utils/utils";
type props = {
  img: string;
};
const BlogCard = ({ img }: props) => {
  return (
    <BlogCardContainer>
      <img src={img} />
      <Tagline color="var(--accent_color)">
        A recipe is soulless. The essence of the recipe must come from you, the
        cook
      </Tagline>
      <Paragraph color="var(--accent_color)">
        <span>Read More !!!</span>
      </Paragraph>
    </BlogCardContainer>
  );
};

export default BlogCard;
