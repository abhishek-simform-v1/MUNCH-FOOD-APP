import {
  HeroButtons,
  HeroContainer,
  HeroTextContainer,
  HeroTitle,
  ImgContainer,
  ImgContainerImg,
} from "./styles/HeroCtoContainerStyle";
import {
  Paragraph,
  Subtitle,
  Tagline,
} from "../../styleComponents/utils/utils";
import Button from "../../shared/buttons/Button";
import {
  FoodRecipesCatogaryContainer,
  FoodRecipesCatogaryImgContent,
  FoodRecipesCatogaryTextContent,
} from "./styles/FoodRecipesCatogaryStyle";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import dish_01 from "./../../assets/dish_02.jpg";
import dish_02 from "./../../assets/dish_03.jpg";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const FoodRecipesCatogary = () => {
  return (
    <>
      <Subtitle color="var(--logo-color)">
        <span>Find</span> Recipes
      </Subtitle>

      <FoodRecipesCatogaryContainer>
        <FoodRecipesCatogaryTextContent>
          <Tagline>
            A recipe is soulless. The essence of the recipe must come from you,
            the cook
          </Tagline>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
          />

          <HeroButtons>
            <Button
              bgColor={"#2F4858"}
              color={"#FFFAF4"}
              border={"2f44858"}
              typeOfBtn={"submit"}
              btnfor={"Read more"}
            ></Button>
            <Button
              padding={"0.5rem 0.5rem"}
              color={"var(--accent-color)"}
              border={"#2F4858"}
              btnfor={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-arrow-up-right"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              }
            />
          </HeroButtons>
        </FoodRecipesCatogaryTextContent>
        <FoodRecipesCatogaryImgContent>
          <ImgContainer>
            <ImgContainerImg src={dish_01} />
          </ImgContainer>
          <ImgContainer>
            <ImgContainerImg src={dish_02} />
          </ImgContainer>
        </FoodRecipesCatogaryImgContent>
      </FoodRecipesCatogaryContainer>
    </>
  );
};

export default FoodRecipesCatogary;

const onSearch = (value: string) => console.log(value);

const App: React.FC = () => (
  <Space direction="vertical">
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{ width: 200 }}
    />
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{ width: 200 }}
    />
    <Search
      addonBefore="https://"
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{ width: 304 }}
    />
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>
);
