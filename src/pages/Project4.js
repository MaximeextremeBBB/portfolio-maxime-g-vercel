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
                <Project projectNumber={4} />
                <Button left={"/projet-3"} right={"/projet-5"} />
            </div>
        </main>
    );
};

export default Project4;
