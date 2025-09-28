import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../../pages/Home";
import Episode from "../../pages/Episode";
import About from "../../pages/About";
import Favorite from "../../pages/Favorite";
import Cast from "../../pages/Cast";
import Character from "../../pages/Character";
import Quiz from "../../pages/Quiz";
import { ScreenLogin } from "../../pages/ScreenLogin";

export function MainRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/episodes" element={<Episode />} />
                <Route path="/characters" element={<Character />} />
                <Route path="/cast" element={<Cast />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/about" element={<About />} />
                <Route path="/favorites" element={<Favorite />} />
                <Route path="/login" element={<ScreenLogin />} />
            </Routes>
        </BrowserRouter>
    );
}