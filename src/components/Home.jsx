import LoginSection from "./LoginSection.jsx";
import Nav from "./Nav.jsx";

import ParagraphSection from "./ParagraphSectrion.jsx";
import ScoreSection from "./ScoreSection.jsx";
import SimpleSectionLayout from "./SimpleSectionLayout.jsx";
import About from "./About.jsx";
import WhoWeHelpSection from "./WhoWeHelpSection.jsx";
import Footer from "./Footer.jsx";

import "/src/scss/Home.scss";
import Copyright from "./Copyright.jsx";
import FacebookButton from "./FacebookButton.jsx";
import InstagramButton from "./InstagramButton.jsx";

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
                    </div>
                </div>
            </div>
            <div className="score">
                <ScoreSection />
            </div>
            <SimpleSectionLayout />
            <About />
            <WhoWeHelpSection />
            <div className="footer">
                <div className="footer_form">
                    <Footer />
                </div>
                <div className="footer_copyright">
                    <Copyright />
                </div>
                <div className="footer_social">
                    <a
                        href="http://www.facebook.com"
                        className="facebook_button"
                    >
                        <FacebookButton />
                    </a>
                    <a
                        href="http://www.instagram.com"
                        className="instagram_button"
                    >
                        <InstagramButton />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Home;
