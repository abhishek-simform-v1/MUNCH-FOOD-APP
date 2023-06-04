import Paragraph from '../../../../utils/Typography/Paragraph';
import FlexContainer from '../../../../utils/containers/FlexContainer';
import MainContainer from '../../../../utils/containers/MainContainer';

import breakfast from './../../../../assets/catagories_asset/breakfast.png';
import lunch from './../../../../assets/catagories_asset/lunch.png';
import soup from './../../../../assets/catagories_asset/hotsoup.png';
import snack from './../../../../assets/catagories_asset/snack.png';
import dinner from './../../../../assets/catagories_asset/dinner.png';
import sweets from './../../../../assets/catagories_asset/sweets.png';
import Subtitle from '../../../../utils/Typography/SubTitle';
import Button from '../../../../utils/buttons/Button';
const Categories = () => {
  return (
    <MainContainer padding="4em">
      <FlexContainer
        justify_content="space-between"
        md_justify_content="space-between"
      >
        <Subtitle>Categories</Subtitle>
        <Button
          bgColor="var(--accent_color)"
          color="var(--first_color)"
          border="var(--accent_color)"
          hover_bgColor="var(--secondary_color)"
          hover_color="var(--accent_color)"
        >
          More Categories
        </Button>
      </FlexContainer>
      <FlexContainer gap="2rem" md_f_direction="column" sm_f_direction="column">
        <FlexContainer gap="2rem" sm_f_direction="column">
          <FlexContainer
            bgColor="var(--secondary_transparent)"
            gap="1rem"
            f_direction="column"
            sm_f_direction="row"
            padding="1rem"
            border_radius="var(--lg_border_radius)"
          >
            <img src={breakfast} width="60px" />
            <Paragraph>break fast</Paragraph>
          </FlexContainer>
          <FlexContainer
            bgColor="var(--secondary_transparent)"
            gap="1rem"
            f_direction="column"
            sm_f_direction="row"
            padding="1rem"
            border_radius="var(--lg_border_radius)"
          >
            <img src={lunch} width="60px" />
            <Paragraph>Lunch</Paragraph>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer gap="2rem" sm_f_direction="column">
          <FlexContainer
            bgColor="var(--secondary_transparent)"
            gap="1rem"
            sm_f_direction="row"
            f_direction="column"
            padding="1rem"
            border_radius="var(--lg_border_radius)"
          >
            <img src={soup} width="60px" />
            <Paragraph>Soups</Paragraph>
          </FlexContainer>
          <FlexContainer
            bgColor="var(--secondary_transparent)"
            gap="1rem"
            sm_f_direction="row"
            f_direction="column"
            padding="1rem"
            border_radius="var(--lg_border_radius)"
          >
            <img src={snack} width="60px" />
            <Paragraph>Snacks</Paragraph>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer gap="2rem" sm_f_direction="column">
          <FlexContainer
            bgColor="var(--secondary_transparent)"
            gap="1rem"
            f_direction="column"
            sm_f_direction="row"
            padding="1rem"
            border_radius="var(--lg_border_radius)"
          >
            <img src={dinner} width="60px" />
            <Paragraph>Dinner</Paragraph>
          </FlexContainer>
          <FlexContainer
            sm_f_direction="row"
            bgColor="var(--secondary_transparent)"
            gap="1rem"
            f_direction="column"
            padding="1rem"
            border_radius="var(--lg_border_radius)"
          >
            <img src={sweets} width="60px" />
            <Paragraph>Desserts</Paragraph>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </MainContainer>
  );
};

export default Categories;
