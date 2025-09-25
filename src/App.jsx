// src/App.jsx
import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";

// Páginas Info
import Home from "./pages/Info/Home";
import Location from "./pages/Info/Location";
import History from "./pages/Info/History";
import Cooperadora from "./pages/Info/Cooperadora";
import Contacts from "./pages/Info/Contacts";

// Páginas Alumno
import Subjects from "./pages/Alumno/Subjects";
import VirtualTour from "./pages/Alumno/VirtualTour";
import Reglamento from "./pages/Alumno/Reglamento";

export default function App() {
  const location = useLocation();

  return (
    <div className="app">
          <header className="header" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img
                  src="/la35.png"   // coloca el archivo logo.png dentro de /public
                  alt="Logo Escuela"
                  style={{ height: "60px" }}
              />
              <h1>Escuela Técnica N°35 - Ingeniero Eduardo Latzina</h1>

              <nav className="nav" style={{ marginLeft: "auto" }}>
                  <Link to="/">Inicio</Link>
                  <Link to="/info/location">Localización</Link>
                  <Link to="/info/history">Historia</Link>
                  <Link to="/info/cooperadora">Cooperadora</Link>
                  <Link to="/info/contacts">Contactos</Link>
                  <div className="dropdown">
                      <span>Alumno ▾</span>
                      <div className="dropdown-content">
                          <Link to="/alumno/subjects">Asignaturas</Link>
                          <Link to="/alumno/virtual-tour">Recorrida Virtual</Link>
                          <Link to="/alumno/reglamento">Reglamento Interno</Link>
                      </div>
                  </div>
              </nav>
          </header>


      <main className="main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/info/location" element={<PageTransition><Location /></PageTransition>} />
            <Route path="/info/history" element={<PageTransition><History /></PageTransition>} />
            <Route path="/info/cooperadora" element={<PageTransition><Cooperadora /></PageTransition>} />
            <Route path="/info/contacts" element={<PageTransition><Contacts /></PageTransition>} />

            <Route path="/alumno/subjects" element={<PageTransition><Subjects /></PageTransition>} />
            <Route path="/alumno/virtual-tour" element={<PageTransition><VirtualTour /></PageTransition>} />
            <Route path="/alumno/reglamento" element={<PageTransition><Reglamento /></PageTransition>} />

            <Route path="*" element={<PageTransition><div>404 - Página no encontrada</div></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Escuela Secundaria - Todos los derechos
      </footer>
    </div>
  );
}
