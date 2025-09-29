import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "../../pages/Home";
import Episode from "../../pages/Episode";
import About from "../../pages/About";
import Favorite from "../../pages/Favorite";
import Cast from "../../pages/Cast";
import Character from "../../pages/Character";
import Quiz from "../../pages/Quiz";
import { ScreenLogin } from "../../pages/ScreenLogin";
import { Dashboard } from "../../pages/Dashboard";
import DashboardTemplate from "../../templates/DashboardTemplate";
import MainTemplate from "../../templates/MainTemplate";
import { PublicLayout } from "../../layout/PublicLayout";

export function MainRouter() {
    const isAuthenticated = false;

    return (
        <BrowserRouter>
            <Routes>

                {/* Rotas públicas */}
                <Route element={<PublicLayout />}>
                    <Route path="/login" element={<ScreenLogin />} />
                </Route>

                {/* Rotas públicas */}
                <Route element={<MainTemplate />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/episodes" element={<Episode />} />
                    <Route path="/characters" element={<Character />} />
                    <Route path="/cast" element={<Cast />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/favorites" element={<Favorite />} />
                </Route>

                {/* Rotas privadas */}
                <Route
                path="/dashboard/*"
                element={isAuthenticated ? <PublicLayout /> : <Navigate to="/login" />}
                >
                <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
