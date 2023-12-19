import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Practica27 from './Practica27'
import Reloj from './Reloj'

type Props = {}

const Practica38 = (props: Props) => {
    function Navbar() {
        return (
            <nav className="Minavbar">
                <Link to="/"> Inicio </Link>
                <Link to="/cronometro"> Cronómetro </Link>
                <Link to="/relojesmundiales"> Relojes mundiales </Link>
            </nav>
        )
    }
    return (
        <div className="App">
            <BrowserRouter>
                <h3>Mi primer router</h3>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Practica27 />} />
                    <Route path="/relojesmundiales" element={<Reloj />} />
                    <Route path="/cronometro" element={<Practica27 />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Practica38