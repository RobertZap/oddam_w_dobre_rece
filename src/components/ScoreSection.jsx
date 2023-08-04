import "/src/scss/ScoreSectrion.scss";

function ScoreSection() {
    return (
        <div className="score_container">
            <div className="return_baggage">
                <p className="return_baggage number">10</p>
                <p className="return_baggage title">ODDANYCH WORKÓW</p>
                <p className="return_baggage description">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </p>
            </div>
            <div className="support_organization">
                <p className="support_organization number">5</p>
                <p className="support_organization title">
                    ORGANIZACJI WSPARTYCH
                </p>
                <p className="support_organization description">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </p>
            </div>
            <div className="collection">
                <p className="collection number">7</p>
                <p className="collection title">ZORGANIZOWANYCH ZBIÓREK</p>
                <p className="collection description">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </p>
            </div>
        </div>
    );
}

export default ScoreSection;
