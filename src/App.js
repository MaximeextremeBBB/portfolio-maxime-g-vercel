import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CV from "./pages/CV";
import Project1 from "./pages/Project1";
import { AnimatePresence } from "framer-motion";

const App = () => {
    return (
        <BrowserRouter>
            <AnimatePresence>
                {/* 2:18:10 on peut le mettre où on veut sur des petits composants etc...  */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/CV" element={<CV />} />
                    <Route path="/projet-1" element={<Project1 />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    );
};

export default App;
