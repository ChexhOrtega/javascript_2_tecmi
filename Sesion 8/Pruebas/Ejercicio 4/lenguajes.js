const idiomaIngles = "en-US";
const idiomaEspañol = "es-ES";
const idiomaFrances = "fr-FR";

function lenguajePagina(language) {
  switch (language.toLowerCase()) {
    case idiomaIngles.toLocaleLowerCase():
      return "/about-us";
    case idiomaEspañol.toLocaleLowerCase():
      return "/acerca-de-nosotros";
    case idiomaFrances.toLocaleLowerCase():
      return "/a-propos";
  }

  return "";
}

module.exports = lenguajePagina;