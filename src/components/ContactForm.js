import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.ID);
// Les deux lignes ci-dessus nous permettent d'initialiser la variable d'environnement

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formMess = document.querySelector(".formMessage");
        console.log("test for-message" + formMess);

        emailjs
            .sendForm(
                "service_m6irhou",
                "template_v7vo6bp",
                form.current,
                // "CoMtlyngaoAeEJUea"
                process.env.REACT_APP_ID
            )
            .then(
                (result) => {
                    // console.log(result.text);
                    form.current.reset();
                    formMess.innerHTML =
                        "<p className='success'>Message envoyé !</p>";

                    setTimeout(() => {
                        formMess.innerHTML = "";
                    }, 2500);
                },
                (error) => {
                    // console.log(error.text);
                    formMess.innerHTML =
                        "<p className='error'>Une erreur s'est produite, veuillez réessayer</p>";

                    setTimeout(() => {
                        formMess.innerHTML = "";
                    }, 2500);
                }
            );
    };

    return (
        <div className="form-container">
            <h2>Contactez-Nous</h2>
            <form ref={form} onSubmit={sendEmail} className="form-content">
                <label>nom</label>
                <input
                    type="text"
                    name="name"
                    required
                    autoComplete="off"
                    id="name"
                />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                    id="email"
                />
                <label>Message</label>
                <textarea name="message" id="mess" />
                <input type="submit" value="Envoyer" className="hover button" />
            </form>
            <div className="formMessage"></div>
        </div>
    );
};

export default ContactForm;
