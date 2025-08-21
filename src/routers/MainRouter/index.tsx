import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../../pages/Home";
import Episode from "../../pages/Episode";
import Characters from "../../pages/Characacters";
import About from "../../pages/About";

export function MainRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/episode" element={<Episode />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}