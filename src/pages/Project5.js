import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Project from "../components/Project";

const Project4 = () => {
    return (
        <main>
            {/* Nos projets auront tous une balise main */}
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={5} />
                <Button left={"/projet-4"} right={"/contact"} />
            </div>
        </main>
    );
};

export default Project4;
