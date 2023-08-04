import "/src/scss/LoginSection.scss";

function LoginSection() {
    return (
        <div className="login_section">
            <a href="/login" className="login_button">
                Zaloguj
            </a>
            <a href="/create_account" className="create_button">
                Załóż konto
            </a>
        </div>
    );
}

export default LoginSection;
