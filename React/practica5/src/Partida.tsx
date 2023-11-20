import React, { useState, useEffect } from 'react';
class Partida {
    numeros: number[];
    count: number;
    intentos: number;
    lvl: number;
    selectedNumbers: number[];
    showAllNumbers: boolean;
    isVictory: boolean;
    victoryCount: number;
    finallvl: number;
    constructor(lvl:number) {
      this.numeros = [];
      this.count = 1;
      this.intentos = 0;
      this.lvl = lvl;
      this.selectedNumbers = [];
      this.showAllNumbers = true;
      this.isVictory = false;
      this.victoryCount = 0;
      this.finallvl = 2;

    }
    crearArray(){
        if(this.lvl===1){
            this.numeros = [1, 2, 3, 4, 5, 6, 7, 8];    
        }else{
            this.numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        }
        this.numeros=this.desordenar(this.numeros);
        this.victoryCount = this.numeros.length;
    }
  
    desordenar(array:number[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  
    handleButtonClick(number:number) {
      if (number === this.count && !this.selectedNumbers.includes(number)) {
        this.selectedNumbers.push(number);
        this.count++;
  
        if (this.count === this.victoryCount) {
          if (this.lvl !== this.finallvl) {
            this.lvl++;
            this.selectedNumbers = [];
            this.count = 1;
            this.intentos = 0;
            this.showAllNumbers = true;
          } else {
            this.isVictory = true;
          }
        }
      }
      this.intentos++;
  
      if (this.intentos > this.numeros.length * 2) {
        alert("¡Has perdido el juego!");
      }
    }
  
    restartGame() {
      this.lvl = 1;
      this.showAllNumbers = true;
      this.count = 1;
      this.selectedNumbers = [];
      this.intentos = 0;
      this.isVictory = false;
      this.crearArray();
    }
  
    isEvenLevel() {
      return this.lvl % 2 !== 0;
    }
  }
  export default Partida;