import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Contact = () => {
    const pageTransition = {
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: 200,
        },
    };
    return (
        <main>
            <Mouse />
            <motion.div
                className="contact"
                exit="out"
                initial="out"
                variants={pageTransition}
                transition={{ duration: 0.4 }}
                animate="in"
            >
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>address</h4>
                            <p>Le Pradet</p>
                            <p>83220</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <CopyToClipboard
                                text="0614949242"
                                className="hover"
                            >
                                {/* Le "text" est ce qui va etre copié */}
                                <p
                                    style={{ cursor: "pointer" }}
                                    className="clipboard"
                                    onClick={() =>
                                        alert("Numéro de teléphone Copié !")
                                    }
                                >
                                    06 14 94 92 42
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <CopyToClipboard
                                text="maxime.guiraud.1990@gmail.com"
                                className="hover"
                            >
                                {/* Le "text" est ce qui va etre copié */}
                                <p
                                    style={{ cursor: "pointer" }}
                                    className="clipboard"
                                    onClick={() => alert("Email Copié !")}
                                >
                                    maxime.guiraud.1990@gmail.com
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>Maxime Guiraud - 2023</p>
                    </div>
                </div>
                <Button left={"/projet-1"} />
            </motion.div>
        </main>
    );
};

export default Contact;
