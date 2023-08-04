import "/src/scss/About.scss";
import Decoration from "./Decoration.jsx";

function About() {
    return (
        <div className="about_container" id="about">
            <div className="about">
                <p className="about_header">O nas</p>
                <Decoration />
                <p className="about_description">
                    Nori grape silver beet broccoli kombu beet <br /> greens
                    fava bean potato quandong celery.
                    <br /> Bunya nuts black-eyed pea prairie turnip leek
                    <br /> lentil turnip greens parsnip.
                </p>
                <img
                    src="/src/assets/Signature.svg"
                    alt="signature"
                    className="about_signature"
                />
            </div>
            <img
                src="/src/assets/People.jpg"
                alt="people"
                className="about_img"
            />
        </div>
    );
}

export default About;
