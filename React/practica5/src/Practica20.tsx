import React, { Component } from 'react';
type Props = {}

class Practica20 extends Component{

  

      state = {
        numeroSecreto: this.generarNumeroSecreto(),
        intento: -2,
        mensaje: '',
        terminada: false
      };
    
    generarNumeroSecreto() {
      return Math.floor(Math.random() * 10);
    }
  
    apostar(numero: number) {
      const { numeroSecreto } = this.state;
  
      if (numero === numeroSecreto) {
        this.setState({ mensaje: '¡Has acertado! El número secreto es ' + numeroSecreto });
        this.setState({ terminada: true });
      } else if (numero < numeroSecreto) {
        this.setState({ mensaje: 'El número secreto es mayor que ' + numero });
      } else {
        this.setState({ mensaje: 'El número secreto es menor que ' + numero });
      }
    }
    cambiarSecreto() {
      this.setState({ numeroSecreto: Math.floor(Math.random() * 10)});
      this.setState({ terminada: false });
    }
    render() {
      return (
        <div>
          <h1>Juego de Acertar el Número Secreto</h1>
          <p>{this.state.mensaje}</p>
          <div>
            {this.state.terminada ? <button key="reiniciar" onClick={this.cambiarSecreto}>
                Crear Nuevo Numero
              </button> : <p></p>}
          </div>
          <div>
            {
            Array.from({ length: 10 }, (_, index) => (
              <button key={index} onClick={() => this.apostar(index)}>
                {index}
              </button>
            ))

            }

      
          </div>
        </div>
    );
    }
  }
  
  export default Practica20;