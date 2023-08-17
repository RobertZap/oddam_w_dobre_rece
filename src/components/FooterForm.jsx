import { useState } from "react";
import axios, { Axios } from "axios";

import "/src/scss/FooterForm.scss";

export default function FooterForm() {
    const url = "http://localhost:3000/";
    const [data, setData] = useState({
        name: "",
        mail: "",
        message: "",
    });

    function submit(e) {
        e.preventDefault();
        axios
            .post(url, {
                name: data.name,
                mail: data.mail,
                message: data.message,
            })
            .then((res) => {
                console.log(res.data);
            });
    }

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }

    return (
        <form className="form" onSubmit={(e) => submit(e)}>
            <div className="form_first_section">
                <label className="form_text">
                    <p className="form_text_paragraph">Wpisz swoje imię</p>
                    <input
                        className="form_text_input"
                        id="name"
                        type="text"
                        name="Imię"
                        value={data.name}
                        onChange={(e) => handle(e)}
                    />
                </label>
                <label className="form_mail">
                    <p className="form_mail_paragraph">Wpisz swoj email</p>
                    <input
                        className="form_mail_input"
                        id="mail"
                        type="email"
                        name="email"
                        value={data.mail}
                        onChange={(e) => handle(e)}
                    />
                </label>
            </div>
            <label className="form_area">
                <p className="form_area_paragraph">Wpisz swoja wiadomośc</p>
                <textarea
                    className="form_area_input"
                    id="message"
                    value={data.message}
                    onChange={(e) => handle(e)}
                ></textarea>
            </label>
            <button className="form_button" type="submit">
                Wyślij
            </button>
        </form>
    );
}
