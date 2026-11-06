var str = "Copa de Futbol"

console.log(str.includes("Copa")); // true
console.log(str.includes("Torneo")); // false

// Parte 2
class miClase {
  constructor(a, b) {
    this.result = a + b;
  }
}

const miFuncion = (a, b) => a + b;
const resultado = [1, 2].reduce((a, b) => a + b, 0);