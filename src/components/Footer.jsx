import "/src/scss/Footer.scss";
import Decoration from "./Decoration.jsx";
import FooterForm from "./FooterForm.jsx";

function Footer() {
    return (
        <div className="footer_container" id="contact">
            <div className="footer_form">
                <p className="footer_text">Skontaktuj się z nami</p>
                <Decoration />
                <FooterForm />
            </div>
        </div>
    );
}

export default Footer;
