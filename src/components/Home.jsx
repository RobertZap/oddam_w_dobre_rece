import LoginSection from "./LoginSection.jsx";
import Nav from "./Nav.jsx";

import "/src/scss/Home.scss";
import HomeImg from "./HomeImg.jsx";
import ParagraphSection from "./ParagraphSectrion.jsx";
import Decoration from "./Decoration.jsx";
import CollectionSection from "./CollectionSection.jsx";
import ScoreSection from "./ScoreSection.jsx";
import SimpleSectionLayout from "./SimpleSectionLayout.jsx";

function Home() {
  return (
    <>
      <div className="home_container">
        <div className="computer_img">
          <HomeImg />
        </div>
        <div className="login_container">
          <div className="login">
            <LoginSection />
          </div>
          <div className="nav_section">
            <Nav />
          </div>
          <div className="right_side_section">
            <div className="paragraph_section">
              <ParagraphSection />
            </div>
            <div className="decoration">
              <Decoration />
            </div>
            <div>
              <CollectionSection />
            </div>
          </div>
        </div>
      </div>
      <div className="score">
        <ScoreSection />
      </div>
      <SimpleSectionLayout />
    </>
  );
}

export default Home;
