import SimpleSection from "./SimpleSection.jsx";
import SimpleSectionColumns from "./SimpleSectionColumns.jsx";
import SimpleSectionButton from "./SimpleSectionButton.jsx";

function SimpleSectionLayout() {
    return (
        <>
            <div className="simple_section_layout" id="simplesection">
                <SimpleSection />
            </div>
            <SimpleSectionColumns />
            <div>
                <SimpleSectionButton />
            </div>
        </>
    );
}

export default SimpleSectionLayout;
