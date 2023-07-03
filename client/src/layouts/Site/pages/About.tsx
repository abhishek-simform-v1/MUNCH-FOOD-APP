import Header from "../../../shared/navbar/Header";
import Paragraph from "../../../utils/Typography/Paragraph";
import SubTitleH2 from "../../../utils/Typography/SubTitleH2";
import MainContainer from "../../../utils/containers/MainContainer";
import style from "./../style/About.module.css";
const About = () => {
  return (
    <div
      style={{
        marginTop: "120px",
      }}
    >
      <Header />
      <MainContainer>
        <div>
          <SubTitleH2>Project Introduction</SubTitleH2>
          <div>
            <Paragraph>
              Our recipe sharing web app is a platform where food enthusiasts
              can come together to share and discover a wide variety of recipes.
              Whether you're a seasoned chef or just starting out in the
              kitchen, our app offers a range of benefits for both recipe
              creators and users. For recipe creators, our platform provides a
              space to showcase their culinary creations and share their passion
              for cooking with a large audience. They can inspire others,
              receive valuable feedback, and gain recognition for their skills.
              Engaging with the community allows recipe creators to connect with
              fellow food enthusiasts, exchanging ideas, techniques, and
              personal experiences.
            </Paragraph>
          </div>
        </div>
        <div>
          <SubTitleH2>Project Mission</SubTitleH2>

          <Paragraph>
            At our recipe sharing web app, our mission is clear: to provide a
            dynamic platform where users can share and discover delicious
            recipes while fostering a vibrant community of food enthusiasts. We
            believe that cooking is not just a means to an end but an art form,
            a way to express creativity, and a means to connect with others. Our
            app is designed to celebrate these aspects and encourage culinary
            exploration among our users. Our primary goal is to create a space
            where individuals can freely share their culinary creations and
            experiences. Whether you're a professional chef, a passionate home
            cook, or a beginner in the kitchen, we welcome and value every
            contribution. By sharing your recipes, you not only inspire others
            but also become part of a supportive community that appreciates the
            joys of cooking and the magic of flavors.
          </Paragraph>
        </div>

        <div>
          <SubTitleH2>Project Mission</SubTitleH2>

          <Paragraph>
            My recipe sharing web app offers a range of key features that
            enhance the user experience and promote recipe sharing. These
            features include:
          </Paragraph>
          <Paragraph>
            User Registration and Authentication: By implementing user
            registration and authentication functionalities, I ensure secure
            access to the web app. Registered users can create profiles, submit
            recipes, and engage with the community, fostering a sense of
            belonging and accountability.
          </Paragraph>
          <Paragraph>
            Recipe Listing and Search: My app provides a comprehensive
            collection of recipes, allowing users to browse and explore
            different dishes. The search feature enables users to find specific
            recipes based on keywords or categories, making it easy to discover
            new recipes tailored to their preferences.
          </Paragraph>
          <Paragraph>
            Recipe Submission: Registered users can share their own recipes on
            the platform, promoting a diverse range of culinary creations. By
            providing fields for recipe name, ingredients, preparation steps,
            cooking time, and additional notes, users can accurately communicate
            their recipes to others.
          </Paragraph>
          <Paragraph>
            Recipe Favorites and Personalized Collections: Users can mark
            recipes as favorites and create personalized collections for easy
            access to their preferred dishes. This feature allows users to
            curate their own recipe collections, customize their cooking
            experience, and revisit their favorite recipes whenever they want.
          </Paragraph>
          <Paragraph>
            User Profile: Each user has a dedicated profile where they can view
            and manage their submitted recipes, favorite recipes, and
            collections. User profiles enhance personalization, enable users to
            showcase their culinary achievements, and facilitate connections
            with other like-minded individuals.
          </Paragraph>
          <Paragraph>
            My app includes social sharing buttons, enabling users to easily
            share recipes on popular social media platforms. This feature
            promotes the exchange of recipes beyond my platform, amplifying the
            reach and impact of shared culinary creations.
          </Paragraph>
          <Paragraph>
            My web app is designed with a responsive layout, ensuring it
            displays well on various devices, including mobile phones and
            tablets. This feature enables users to access the app and its
            features seamlessly, enhancing the overall user experience and
            convenience.
          </Paragraph>
        </div>
        <div>
          <SubTitleH2>Acknowledgments</SubTitleH2>
          <Paragraph>
            I would like to express my heartfelt gratitude to my mentor,
            Abhishek Chandaran, and Dhaval Kanariya from my company, Simform
            Solutions. Their guidance, expertise, and support have been
            instrumental in the development of my recipe sharing web app. Their
            extensive knowledge and industry experience have helped shape the
            app into what it is today. Abhishek Chandaran's mentorship has been
            invaluable throughout the development process. His insights, advice,
            and technical expertise have greatly contributed to the success of
            the project. I am grateful for his patience, dedication, and
            willingness to share his knowledge, which has helped me grow both
            personally and professionally. I would also like to express my
            appreciation to Dhaval Kanariya for his support and guidance. His
            leadership and project management skills have been instrumental in
            keeping the development process on track and ensuring the successful
            completion of the app. His feedback and input have been invaluable
            in shaping the app's features and functionality. I am truly
            fortunate to have such exceptional mentors who have invested their
            time and expertise in my growth as a developer. Their support and
            encouragement have inspired me to push boundaries, learn new
            technologies, and strive for excellence in my work. Thank you,
            Abhishek Chandaran and Dhaval Kanariya, for your mentorship,
            guidance, and belief in my abilities. I am immensely grateful for
            the opportunities you have provided and the knowledge you have
            shared.
          </Paragraph>
        </div>
      </MainContainer>
    </div>
  );
};

export default About;
