import Paragraph from '../../../../utils/Typography/Paragraph';
import TagLine from '../../../../utils/Typography/Tag';
import Title from '../../../../utils/Typography/Title';
import Button from '../../../../utils/buttons/Button';
import FlexContainer from '../../../../utils/containers/FlexContainer';
import MainContainer from '../../../../utils/containers/MainContainer';
import ImgContainer from '../../../../utils/imgs/ImgContainer';
import heroImg from './../../../../assets/fulldish.png';
const Hero = () => {
  return (
    <MainContainer padding="0px">
      <FlexContainer
        justify_content="center"
        align_item="flex-start"
        gap="5rem"
        sm_f_direction="column"
      >
        <FlexContainer
          wrap="wrap"
          f_direction="column"
          align_item="left"
          justify_content="left"
          md_align_item="left"
          md_justify_content="left"
          gap="1rem"
        >
          <Title>
            Discover Simple, Delicious And
            <span> Fast Recipes !</span>
          </Title>
          <TagLine align="left">
            A recipe is soulless. The essence of the recipe must come from you,
            the cook
          </TagLine>
          <FlexContainer gap="1rem" align_item="left" justify_content="left">
            <Button
              bgColor="var(--accent_color)"
              color="var(--first_color)"
              hover_bgColor="var(--secondary_color)"
              border="var(--accent_color)"
              hover_color="var(--accent_color)"
            >
              Go to Recipes
            </Button>
            <Button
              bgColor="var(--first_color)"
              color="var(--accent_color)"
              border_radius={'20rem'}
              hover_bgColor="var(--secondary_color)"
              hover_color="var(--accent_color)"
              padding="0.1rem 0.6rem"
              border="var(--accent_color)"
            >
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="var(--accent_color)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-arrow-up-right"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Button>
          </FlexContainer>
        </FlexContainer>

        <ImgContainer src={heroImg} alt="hero" width={'30%'} display="none" />
      </FlexContainer>
    </MainContainer>
  );
};

export default Hero;
