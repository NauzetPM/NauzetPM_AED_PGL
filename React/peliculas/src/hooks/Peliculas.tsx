import React, { useEffect } from "react";
import { Link, Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import PeliculasCardList from "../componentes/PeliculasCardList";
import BorrarPelicula from "../componentes/BorrarPelicula";
import AgregarPeliculas from "../componentes/AgregarPelicula";
import ModificarPelicula from "../componentes/ModificarPelicula";
import InfoPelicula from "../componentes/InfoPelicula";
import { PeliculaContext, useAppContext } from "../componentes/PeliculaContext";
import Ficheros from "../componentes/Ficheros";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul
          style={{ display: "flex", justifyContent: "space-around" }}
          className="navbar-nav"
        >
          <li className="nav-item">
            <Link style={{ marginLeft: "15rem" }} className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ marginLeft: "15rem" }}
              className="nav-link"
              to="/crear"
            >
              Crear
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ marginLeft: "15rem" }}
              className="nav-link "
              to="/borrar"
            >
              Borrar
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ marginLeft: "15rem" }}
              className="nav-link"
              to="/modificar"
            >
              Modificar
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ marginLeft: "15rem" }}
              className="nav-link"
              to="/fichero"
            >
              Fichero
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default function Peliculas() {
  return (
    
      <BrowserRouter>
      <PeliculaContext>
        <Navbar />
        <Routes>
          <Route path="/crear" element={<AgregarPeliculas />} />
          <Route path="/borrar" element={<BorrarPelicula />} />
          <Route path="/modificar" element={<ModificarPelicula />} />
          <Route path="/fichero" element={<Ficheros />} />
          <Route path="/" element={<PeliculasCardList />} />
          <Route path="/editar/:id" element={<ModificarPelicula />} />
          <Route path="/borrar/:id" element={<BorrarPelicula />} />
          <Route path="/info/:id" element={<InfoPelicula />} />
        </Routes>
        </PeliculaContext>
      </BrowserRouter>
    
  );
}
