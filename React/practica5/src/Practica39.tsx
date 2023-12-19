import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Practica31 from './Practica31'
import Practica20 from './Practica20'

type Props = {}

const Practica39 = (props: Props) => {
    function Navbar() {
        return (
            <nav className="Minavbar">
                <Link to="/"> Inicio </Link>
                <Link to="/Memory"> Memory </Link>
                <Link to="/AcertarNumero"> AcertarNumero</Link>
            </nav>
        )
    }
    return (
        <div className="App">
            <BrowserRouter>

                <h3>Mi primer router</h3>
                <Navbar/>
                <Routes>
                    <Route path="/"/>
                    <Route path="/Memory" element={<Practica31 />} />
                    <Route path="/AcertarNumero" element={<Practica20 />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Practica39