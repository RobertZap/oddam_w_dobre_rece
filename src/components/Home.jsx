import LoginSection from "./LoginSection.jsx";
import Nav from "./Nav.jsx";

import ParagraphSection from "./ParagraphSectrion.jsx";
import Decoration from "./Decoration.jsx";
import CollectionSection from "./CollectionSection.jsx";
import ScoreSection from "./ScoreSection.jsx";
import SimpleSectionLayout from "./SimpleSectionLayout.jsx";
import About from "./About.jsx";
import WhoWeHelpSection from "./WhoWeHelpSection.jsx";
import Footer from "./Footer.jsx";

import "/src/scss/Home.scss";

function Home() {
    return (
        <>
            <div className="home_container">
                <div className="login_container">
                    <div className="login">
                        <LoginSection />
                    </div>
                    <div className="nav_section">
                        <Nav />
                    </div>
                    <div className="right_side_section">
                        <ParagraphSection />
                        <Decoration />
                        <CollectionSection />
                    </div>
                </div>
            </div>
            <div className="score">
                <ScoreSection />
            </div>
            <SimpleSectionLayout />
            <About />
            <WhoWeHelpSection />
            <Footer />
        </>
    );
}

export default Home;
