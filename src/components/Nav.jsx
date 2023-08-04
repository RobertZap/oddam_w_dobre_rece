import { Link } from "react-scroll";

import "/src/scss/Nav.scss";
import { useState } from "react";

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const move = () => setClick(false);

  return (
    <>
      <div className="nav_buttons">
        <a href="#" className="start_button">
          Start
        </a>
        <Link
          to="simplesection"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={move}
          className="info_button"
        >
          {" "}
          O co chodzi?
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={move}
          className="info_button"
        >
          O nas
        </Link>
        <a href="#" className="org_button">
          Fundacja i organizacje
        </a>
        <a href="#" className="contact_button">
          Kontakt
        </a>
      </div>
    </>
  );
}

export default Nav;
