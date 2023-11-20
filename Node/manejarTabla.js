let fs = require('fs');

function escribir(nombreDelFichero, textoEscribir) {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFileSync(nombreDelFichero, textoEscribir);
      resolve('ok grabado');
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  escribir
};