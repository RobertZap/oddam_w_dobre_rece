import { useState } from "react";

import "/src/scss/FooterForm.scss";

export default function FooterForm() {
    const [inputName, setInputName] = useState("");
    const [inputMail, setInputMail] = useState("");
    const [inputText, setInputText] = useState("");

    const handleChangeName = (event) => {
        setInputName(event.target.value);
    };
    const handleChangeMail = (event) => {
        setInputMail(event.target.value);
    };
    const handleChangeText = (event) => {
        setInputText(event.target.value);
    };

    return (
        <form className="form">
            <div className="form_first_section">
                <label className="form_text">
                    <p className="form_text_paragraph">Wpisz swoje imię</p>
                    <input
                        className="form_text_input"
                        type="text"
                        name="Imię"
                        value={inputName}
                        onChange={handleChangeName}
                    />
                </label>
                <label className="form_mail">
                    <p className="form_mail_paragraph">Wpisz swoj email</p>
                    <input
                        className="form_mail_input"
                        type="email"
                        name="email"
                        value={inputMail}
                        onChange={handleChangeMail}
                    />
                </label>
            </div>
            <label className="form_area">
                <p className="form_area_paragraph">Wpisz swoja wiadomośc</p>
                <textarea
                    className="form_area_input"
                    value={inputText}
                    onChange={handleChangeText}
                ></textarea>
            </label>
            <button className="form_button" type="submit">
                Wyślij
            </button>
        </form>
    );
}
