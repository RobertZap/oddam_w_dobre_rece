import "/src/scss/CollectionSection.scss";

function CollectionSection() {
    return (
        <div className="collection_container">
            <a href="/login" className="first_collection">
                ODDAJ
                <br /> RZECZY
            </a>
            <a href="/login" className="second_collection">
                ZORGANIZUJ
                <br />
                ZBIÓRKĘ
            </a>
        </div>
    );
}

export default CollectionSection;
