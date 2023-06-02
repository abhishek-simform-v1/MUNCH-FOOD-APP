import styled from "styled-components";
export const MainContainer = styled.div`
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  padding: 50px 50px;

  gap: var(--paragraph_1440);
  @media (max-width: 1440px) {
    gap: var(--paragraph_1440);
  }
  @media (max-width: 1024px) {
    gap: var(--paragraph_1024);
  }
  @media (max-width: 768px) {
    padding: 20px 30px;
    flex-direction: column;
    gap: var(--paragraph_768);
  }
  @media (max-width: 576px) {
    gap: var(--paragraph_576);
  }
  @media (max-width: 400px) {
    gap: var(--paragraph_400);
  }
  @media (max-width: 360px) {
    gap: var(--paragraph_360);
  }
`;

export const Subtitle = styled.p`
  font-size: var(--subtitle_1440);
  font-weight: 700;

  color: ${(props) => (props.color ? props.color : "var(--first_color)")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  line-height: 1.2;
  font-family: f_bold;
  @media (max-width: 1440px) {
    font-size: var(--subtitle_1440);
  }
  @media (max-width: 1024px) {
    font-size: var(--subtitle_1024);
  }
  @media (max-width: 768px) {
    font-size: var(--subtitle_768);
  }
  @media (max-width: 576px) {
    font-size: var(--subtitle_576);
  }
  @media (max-width: 400px) {
    font-size: var(--subtitle_400);
  }
  @media (max-width: 360px) {
    font-size: var(--subtitle_360);
  }
`;
export const Title = styled.h1`
  font-size: var(--title_1440);

  text-align: center;
  font-family: f_bold;
  font-weight: 900;

  /* text-transform: uppercase; */
  letter-spacing: 2px;
  color: var(--logo-color);

  @media (max-width: 1440px) {
    font-size: var(--title_1440);
  }
  @media (max-width: 1024px) {
    font-size: var(--title_1024);
  }
  @media (max-width: 768px) {
    font-size: var(--title_768);
  }
  @media (max-width: 576px) {
    font-size: var(--title_576);
  }
  @media (max-width: 400px) {
    font-size: var(--title_400);
  }
  @media (max-width: 360px) {
    font-size: var(--title_360);
  }
`;
export const Tagline = styled.p`
  line-height: 1.5;
  width: 70%;
  letter-spacing: 1.1px;
  color: var(--accent_color);
  font-family: f_light;
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-size: var(--tagline_1440);
  @media (max-width: 1440px) {
    font-size: var(--tagline_1440);
  }
  @media (max-width: 1024px) {
    font-size: var(--tagline_1024);
    text-align: ${(props) => (props.align ? props.align : "center")};
  }
  @media (max-width: 768px) {
    font-size: var(--tagline_768);
  }
  @media (max-width: 576px) {
    font-size: var(--tagline_576);
  }
  @media (max-width: 400px) {
    font-size: var(--tagline_400);
  }
  @media (max-width: 360px) {
    font-size: var(--tagline_360);
  }
`;
export const Paragraph = styled.p`
  color: ${(props) => (props.color ? props.color : "var(--first_color)")};
  line-height: 1.5;
  letter-spacing: 0.5px;
  font-size: var(--paragraph_1440);
  @media (max-width: 1440px) {
    font-size: var(--paragraph_1440);
  }
  @media (max-width: 1024px) {
    font-size: var(--paragraph_1024);
  }
  @media (max-width: 768px) {
    font-size: var(--paragraph_768);
  }
  @media (max-width: 576px) {
    font-size: var(--paragraph_576);
  }
  @media (max-width: 400px) {
    font-size: var(--paragraph_400);
  }
  @media (max-width: 360px) {
    font-size: var(--paragraph_360);
  }
`;
