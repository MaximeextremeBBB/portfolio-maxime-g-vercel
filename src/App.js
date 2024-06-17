import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CV from "./pages/CV";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";
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
                    {/* <Route path="/projet-2" element={<Project2 />} />
                    <Route path="/projet-3" element={<Project3 />} />
                    <Route path="/projet-4" element={<Project4 />} /> */}
                    {/* <Route path="/projet-5" element={<Project5 />} /> */}
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    );
};

export default App;
