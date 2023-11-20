let { crearTabla } = require('./crearTabla');
let { escribir } = require('./manejarTabla');

async function main() {
  try {
    await escribir('tabla.txt', crearTabla(7));
    console.log('ok grabado');
  } catch (error) {
    console.log(error);
  }
}

main();
