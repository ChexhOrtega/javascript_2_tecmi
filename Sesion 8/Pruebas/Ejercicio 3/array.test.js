// Importamos las funciones de array.js
var { estados, dias } = require("./array.js");

describe("Operaciones con arreglos", () => {
  test("Revisamos el contendido de los arreglos", () => {
    expect(estados).toContain("Aguascalientes");
    expect(new Set(estados)).toContain("Aguascalientes");
    expect(estados.length).toBe(new Set(estados).size);
  });
});
