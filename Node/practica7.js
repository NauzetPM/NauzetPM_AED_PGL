const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

// Importa la función escribir desde manejarTabla.js
const { escribir } = require('./manejarTabla');
// Importa la función crearTabla desde crearTabla.js
const { crearTabla } = require('./crearTabla');





const numero = argv.tabla;

const tabla = crearTabla(numero);

async function main() {
  try {
    await escribir('tabla.txt', tabla);
    console.log('ok grabado');
  } catch (error) {
    console.log(error);
  }
}

main();