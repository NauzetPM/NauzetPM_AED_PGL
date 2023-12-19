
import React from 'react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import AgregarCapital from './AgregarCapital';
import ProvinciaCardList from './ProvinciaCardList';
import BorrarCapital from './BorrarCapital';
import ModificarCapital from './ModificarCapital';
import Login from './Login';
import { LoginContext, useAppContext } from './LoginContext';
import NombreLogin from './NombreLogin';





function Navbar() {
  return (
    <nav>
      <Link to="/"> Inicio </Link>
      <Link to="/login"> Login </Link>
      <Link to="/crear"> Crear </Link>
      <Link to="/borrar"> Borrar </Link>
      <Link to="/mostrar"> Mostrar </Link>
      <Link to="/modificar"> Modificar </Link>
    </nav>
  );
}


function Inicio() {
  return <div>Página de Inicio</div>;
}

export default function ProvinciaController() {
  const { stateNombre, setstateNombre } = useAppContext();
  function mostrarNombre() {
    if (stateNombre != null) {
      return <div> Hola {stateNombre}</div>
    } else {
      return <div>No se logeado</div>
    }
  }

  return (
    <LoginContext>
      <BrowserRouter>
        <NombreLogin/>
        <p>Menu:</p>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crear" element={<AgregarCapital />} />
          <Route path="/crear/:unaprueba" element={<AgregarCapital />} />
          <Route path="/borrar" element={<BorrarCapital />} />
          <Route path="/modificar" element={<ModificarCapital />} />
          <Route path="/mostrar" element={<ProvinciaCardList />} />
        </Routes>
      </BrowserRouter>
    </LoginContext>
  );
}

