const sum = require("./suma");

describe("Sumar", () => {
  test("Suma 1+2 es igual a 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("Probar dos más dos", () => {
    const value = 2 + 2;

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    // toBe y toEqual son equivalentes al usar números
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test("Existe una a en la palabra Equipo", () => {
    expect("equipo").not.toMatch(/a/);
  });

  test('Aparece la palabra "stop" en el nombre Christoph', () => {
    expect("Christoph").toMatch(/stop/);
  });
});
