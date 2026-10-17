(function () {
  console.log("Código síncrono");
  console.log("Inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");

    dos();

    console.log("Tres");
  }

  uno();

  console.log("Fin");
})();