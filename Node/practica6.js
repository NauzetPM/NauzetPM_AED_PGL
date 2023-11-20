let { crearTabla } = require('./crearTabla');
let { escribir } = require('./manejarTabla');

let numero = 7; // cambiar el numero

async function main() {
  try {
    let tabla = crearTabla(numero);
    await escribir('tabla.txt', tabla);
    console.log('ok grabado');
  } catch (error) {
    console.log(error);
  }
}

main();