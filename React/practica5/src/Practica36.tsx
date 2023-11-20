import React, { Component } from 'react';
import './Practica36.css'; // Importa el archivo CSS

interface PersonaCardProps {
  persona: {
    id: number;
    nombre: string;
    edad: number;
    peso: number;
    altura: number;
  };
}

class Persona {
  id: number;
  nombre: string;
  edad: number;
  peso: number;
  altura: number;
  constructor(id: number, nombre: string, edad: number, peso: number, altura: number) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.altura = altura;
  }
}

class PersonaCard extends Component<PersonaCardProps, { nombre: string; edad: number }> {
  constructor(props: PersonaCardProps) {
    super(props);

    this.state = {
      nombre: this.props.persona.nombre,
      edad: this.props.persona.edad,
    };
  }

  handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ nombre: e.target.value });
  }

  handleEdadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ edad: parseInt(e.target.value) });
  }

  calcularIMC = () => {
    const { peso, altura } = this.props.persona;
    if (altura === 0) {
      return 'Altura inválida';
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    return `IMC: ${imc}`;
  }

  render() {
    return (
      <div className="person-card"> {/* Aplica la clase de estilo */}
        <h3>Persona {this.props.persona.id}</h3>
        <label>Nombre: 
          <input type="text" value={this.state.nombre} onChange={this.handleNombreChange} />
        </label>
        <label>Edad: 
          <input type="number" value={this.state.edad} onChange={this.handleEdadChange} />
        </label>
        {this.calcularIMC()}
      </div>
    );
  }
}

class Practica36 extends Component<{}, { personas: Persona[]; nuevaPersona: Persona | null; mostrarFormulario: boolean }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      personas: [],
      nuevaPersona: null,
      mostrarFormulario: false,
    };
  }

  toggleFormulario = () => {
    this.setState((prevState) => ({ mostrarFormulario: !prevState.mostrarFormulario }));
  }

  agregarPersona = () => {
    if (this.state.nuevaPersona) {
      const id = this.state.personas.length + 1;
      const nuevaPersona = { ...this.state.nuevaPersona, id };
      this.setState({
        personas: [...this.state.personas, nuevaPersona],
        nuevaPersona: null,
        mostrarFormulario: false,
      });
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      nuevaPersona: { ...prevState.nuevaPersona!, [name]: value },
    }));
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.toggleFormulario}>
          {this.state.mostrarFormulario ? 'Cancelar' : 'Agregar Persona'}
        </button>

        {this.state.mostrarFormulario && (
          <form>
            <label>Nombre:
              <input type="text" name="nombre" onChange={this.handleInputChange} />
            </label>
            <label>Edad:
              <input type="number" name="edad" onChange={this.handleInputChange} />
            </label>
            <label>Peso (kg):
              <input type="number" name="peso" onChange={this.handleInputChange} />
            </label>
            <label>Altura (m):
              <input type="number" name="altura" onChange={this.handleInputChange} />
            </label>
            <button onClick={this.agregarPersona}>Agregar Persona</button>
          </form>
        )}

        {this.state.personas.map((persona, index) => (
          <PersonaCard key={persona.id} persona={persona} />
        ))}
      </div>
    );
  }
}

export default Practica36;
