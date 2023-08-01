import LoginSection from "./LoginSection.jsx";
import Nav from "./Nav.jsx";

import "/src/scss/Home.scss";
import HomeImg from "./HomeImg.jsx";
import ParagraphSection from "./ParagraphSectrion.jsx";
import Decoration from "./Decoration.jsx";
import CollectionSection from "./CollectionSection.jsx";

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
          <div className="paragraf_section">
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
    </>
  );
}

export default Home;
