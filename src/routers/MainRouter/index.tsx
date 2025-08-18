import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../../pages/Home";
import Episode from "../../pages/Episode";

export function MainRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/episode" element={<Episode />} />
            </Routes>
        </BrowserRouter>
    );
}