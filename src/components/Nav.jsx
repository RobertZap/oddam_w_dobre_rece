import "/src/scss/Nav.scss";
function Nav() {
  return (
    <>
      <div className="nav_buttons">
        <a href="#" className="start_button">
          Start
        </a>
        <a href="#simplesection" className="info_button">
          O co chodzi?
        </a>
        <a href="#" className="about_button">
          O nas
        </a>
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
