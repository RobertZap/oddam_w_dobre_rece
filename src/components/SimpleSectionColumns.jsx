import "/src/scss/SimpleSectionColumns.scss";

function SimpleSectionColumns() {
    return (
        <div className="columns_section">
            <div className="things">
                <div className="things_img">
                    <img src="/src/assets/Icon-1.svg" alt="t-shirt" />
                </div>
                <p>Wybierz rzeczy</p>
                <div className="line"></div>
                <p>
                    ubrania, zabawki, <br />
                    sprzęt i inne
                </p>
            </div>
            <div className="packing">
                <div className="packing_img">
                    <img src="/src/assets/Icon-2.svg" alt="box" />
                </div>
                <p>Spakuj je</p>
                <div className="line"></div>
                <p>
                    skorzystaj z<br /> worków na śmieci
                </p>
            </div>
            <div className="to_whom">
                <div className="to_whom_img">
                    <img src="/src/assets/Icon-3.svg" alt="serch_icon" />
                </div>
                <p>Zdecyduj komu chcesz pomóc</p>
                <div className="line"></div>
                <p>wybierz zaufane miejsce</p>
            </div>
            <div className="courier">
                <div className="courier_img">
                    <img src="/src/assets/Icon-4.svg" alt="" />
                </div>
                <p>Zamów kuriera</p>
                <div className="line"></div>
                <p>
                    kurier przyjedzie
                    <br /> w dogodnym terminie
                </p>
            </div>
        </div>
    );
}

export default SimpleSectionColumns;
