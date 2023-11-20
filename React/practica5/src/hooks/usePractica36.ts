import React, { Component } from 'react'
export{};
/*
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
        <div>
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
const usePractica36 = () => {
    

  return (
    Persona

  )
}
*
export default usePractica36*/