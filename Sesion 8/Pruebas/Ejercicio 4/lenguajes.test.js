const lenguajePagina = require("./lenguajes");

test("Revisamos el valor de retorno del lenguaje selecionado", () => {
  expect(lenguajePagina("en-US")).toBe("/about-us");
  expect(lenguajePagina("es-ES")).toBe("/acerca-de-nosotros");
  expect(lenguajePagina("fr-FR")).toBe("/a-propos");
});
