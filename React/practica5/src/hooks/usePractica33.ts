import React, { useState } from 'react'


const usePractica33 = () => {
    const [primosEncontrados, setPrimosEncontrados] = useState<number[]>([]);
    function esPrimo(num:number) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
          if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
      }
      
    
      const buscarPrimos = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let formulario = e.currentTarget;
        const inicioNum = Number(formulario.inicio.value);
        const finNum = Number(formulario.fin.value);
    
        if (!isNaN(inicioNum) && !isNaN(finNum) && inicioNum < finNum) {
          const primos:number[] = [];
          for (let i = inicioNum; i <= finNum; i++) {
            if (esPrimo(i)) {
              primos.push(i);
            }
          }
          setPrimosEncontrados(primos);
        } else {
          setPrimosEncontrados([]);
        }
      };

    return { 
        buscarPrimos,
        primosEncontrados
    }   


}

export default usePractica33