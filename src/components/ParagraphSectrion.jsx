import "/src/scss/ParagraphSection.scss";
import Decoration from "./Decoration.jsx";

function ParagraphSection() {
    return (
        <div className="paragraph_header">
            <p>Zacznij pomagać!</p>
            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
            <Decoration />
            <div className="collection_container">
                <a href="/login" className="first_collection">
                    ODDAJ
                    <br />
                    RZECZY
                </a>
                <a href="/login" className="second_collection">
                    ZORGANIZUJ
                    <br />
                    ZBIÓRKĘ
                </a>
            </div>
        </div>
    );
}

export default ParagraphSection;
