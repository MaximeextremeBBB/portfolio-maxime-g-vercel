import React, { useEffect } from "react";

const DynamicText = () => {
    useEffect(() => {
        const target = document.getElementById("text-target");
        let array = ["simple", "clear", "smart", "strong"]; //1:00:28 Les mots ne doivent pas être trop long sinon ça casse un peu l'effet,l'effet n'est pads parfait non plus, il est fait à la main pour la compréhension des élèves, donc il faut mettre des mots de 4 ou 5 lettres sinon on peut faire tourner de slibrairies
        let wordIndex = 0;
        let letterIndex = 0;

        const createLetter = () => {
            const letter = document.createElement("span");
            target.appendChild(letter);

            letter.classList.add("letter");
            letter.style.opacity = "0";
            letter.style.animation = "anim 5s ease forwards";
            letter.textContent = array[wordIndex][letterIndex];

            setTimeout(() => {
                letter.remove();
            }, 2000);
        };
        // createLetter();
        //1:07:32 on va se créer une fonction récursive qui va s'apeller toute seule
        const loop = () => {
            setTimeout(() => {
                if (wordIndex >= array.length) {
                    wordIndex = 0;
                    letterIndex = 0;
                    loop();
                } else if (letterIndex < array[wordIndex].length) {
                    createLetter();
                    letterIndex++;
                    loop();
                } else {
                    letterIndex = 0;
                    wordIndex++;
                    setTimeout(loop, 2000);
                }
            }, 80);
        };
        loop();
        //
    }, []);
    return (
        <span className="dynamic-text">
            <span className="pres">Web developer (Front-End) </span>
            <span className="layout">simply :</span>
            <span id="text-target"></span>
        </span>
    );
};

export default DynamicText;
