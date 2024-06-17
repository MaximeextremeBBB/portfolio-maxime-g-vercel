import React from "react";
import { NavLink } from "react-router-dom";

const Button = (props) => {
    console.log(props);
    return (
        <div className="scroll-bottom">
            {props.left && (
                <NavLink to={props.left} className="left hover">
                    <span>&#10092;</span>
                </NavLink>
            )}
            {props.right && (
                <NavLink to={props.right} className="right hover">
                    {/* 1:20:52 {props.right} est un chemin qu'on ne connait pas d'avance */}
                    <span>&#10093;</span>
                </NavLink>
            )}
        </div>
    );
};

export default Button;
