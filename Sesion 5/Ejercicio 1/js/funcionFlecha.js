const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined) throw console.warn("No ingresaste un arreglo");

  if (!(arr instanceof Array))
    throw console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.warn("El arreglo está vacío");

  if (arr.length === 1)
    return console.error("El arreglo debe tener al menos dos elementos");

  console.info({
    original: arr,
    sinDuplicadosFilter: arr.filter((valor, indice, self) => self.indexOf(valor) === indice),
    sinDuplicadosSet: [...new Set(arr)],
  });
};

quitarDuplicados();
quitarDuplicados({});
quitarDuplicados([]);
quitarDuplicados([2]);
quitarDuplicados(["10", "X", "X", "2", "10", 10, true, true]);