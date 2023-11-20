function crearTabla(n) {
    let tabla = '';
    for (let i = 1; i <= 10; i++) {
      tabla += `${n} x ${i} = ${n * i}\n`;
    }
    return tabla;
  }
  
  module.exports = {
    crearTabla
  };