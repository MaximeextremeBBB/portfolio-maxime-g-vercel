import React from "react";
import { NavLink } from "react-router-dom";
// A 25:05 il nous explique qu'il cherche à faire le composant Navigation, donc on a fait un ul avec les 3 liens, accueil, contact et projets( projets contiendra donc tous les projets qui existent)
const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink
                    to="/"
                    className={({ isActive }) => {
                        isActive ? "nav-active hover" : "hover";
                    }}
                    // 27:10 il nous explique que lorsqu'on est bien sur la page d'accueil (quand tu reconnais cet URL) tu me change le style du <li>accueil</li> et tu me passes la classe nav-active, parcontre quoi qu'il arrive sur le li il aura la classe hover.
                    //Dans notre cas pour des raisons de style donc ce n'est pas obligatoire, la classe hover doit être partout sur ce qui est clickable sur notre site
                >
                    <li>accueil </li>
                </NavLink>

                <li className="nav-portfolio">
                    <NavLink to="/CV">portfolio</NavLink>
                    <ul className="nav-projects">
                        <NavLink
                            to="/CV"
                            className={(nav) =>
                                nav.isActive ? "nav-active hover" : "hover"
                            }
                        >
                            <li>CV</li>
                        </NavLink>
                        <NavLink
                            to="/projet-1"
                            className={(nav) =>
                                nav.isActive ? "nav-active hover" : "hover"
                            }
                        >
                            <li>projet 1</li>
                        </NavLink>
                    </ul>
                </li>

                <NavLink
                    to="/contact"
                    className={(nav) =>
                        nav.isActive ? "nav-active hover" : "hover"
                    }
                >
                    <li>contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
