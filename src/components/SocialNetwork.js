import React from "react";

const SocialNetwork = () => {
    const anim = () => {
        const icons = document.querySelectorAll(".social-network a");
        // console.log(icons);
        icons.forEach((link) => {
            link.addEventListener("mouseover", (e) => {
                link.style.transform = `translate(${e.offsetX - 20}px, ${
                    e.offsetY - 13
                }px)`;
            });
            link.addEventListener("mouseleave", () => {
                link.style.transform = "";
            });
        });
    };

    return (
        <div className="social-network">
            <ul className="content">
                <a
                    href="https://www.linkedin.com/in/maxime-guiraud-7389a2187/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover"
                    onMouseOver={anim}
                >
                    {/* target="_blank"signifie qu'on va l'ouvrir dans une autre page  */}
                    <li>
                        <p>
                            Linkedin :<i className="fab fa-linkedin"></i>
                        </p>
                    </li>
                </a>
                {/* <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover"
                    onMouseOver={anim}
                >
                    <li>
                        <i className="fab fa-facebook-f"></i>
                    </li>
                </a> 
                <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover"
                    onMouseOver={anim}
                >
                    <li>
                        <i className="fab fa-twitter"></i>
                    </li>
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover"
                    onMouseOver={anim}
                >
                    <li>
                        <i className="fab fa-instagram"></i>
                    </li>
                </a>
            */}
            </ul>
        </div>
    );
};

export default SocialNetwork;
