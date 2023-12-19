import React, { useEffect } from "react";
import { Link, Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import Partida from "../components/Partida";
import EditarPartida from "../components/EditarPartida";
import MostrarPartidas from "../components/MostrarPartidas";
import BorrarPartida from "../components/BorrarPartida";
import 'bootstrap/dist/css/bootstrap.css'; 
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul
          style={{ display: "flex", justifyContent: "space-around" }}
          className="navbar-nav"
        >
          <li className="nav-item">
            <Link
              style={{ marginLeft: "15rem" }}
              className="nav-link"
              to="/jugar"
            >
              Jugar
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
              className="nav-link "
              to="/editar"
            >
              Editar
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ marginLeft: "15rem" }}
              className="nav-link"
              to="/mostrar"
            >
              Ver Partidas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
// <Route path="/borrar/:id" element={<BorrarPelicula />} />
export default function Menuhook() {
  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/jugar" element={<Partida/>} />
          <Route path="/editar/:id" element={<EditarPartida />} />
          <Route path="/editar" element={<EditarPartida />} />
          <Route path="/borrar/:id" element={<BorrarPartida />} />
          <Route path="/borrar" element={<BorrarPartida />} />
          <Route path="/mostrar" element={<MostrarPartidas />} />
        </Routes>
      </BrowserRouter>
    
  );
}
