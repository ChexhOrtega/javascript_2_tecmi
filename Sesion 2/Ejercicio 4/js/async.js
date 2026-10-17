function cuadradoAsincrona(valor) {
  return new Promise((resolve, reject) => {
    if (typeof valor !== "number") {
      reject(`Error, el valor "${valor}" ingresado no es un número`);

      return;
    }

    setTimeout(() => {
      resolve({ value: valor, resultado: valor * valor });
    }, Math.random() * 1000);
  });
}

// Función asíncrona declarada con async/await
async function funcionAsincronaDeclarada() {
  try {
    console.log("inicio Async Function");

    let obj = await cuadradoAsincrona(0);
    console.log(`Async Function: ${obj.value},${obj.resultado}`);

    obj = await cuadradoAsincrona(1);
    console.log(`Async Function: ${obj.value},${obj.resultado}`);

    obj = await cuadradoAsincrona(2);
    console.log(`Async Function: ${obj.value},${obj.resultado}`);

    obj = await cuadradoAsincrona(3);
    console.log(`Async Function: ${obj.value},${obj.resultado}`);

    obj = await cuadradoAsincrona(4);
    console.log(`Async Function: ${obj.value},${obj.resultado}`);

    obj = await cuadradoAsincrona(5);
    console.log(`Async Function: ${obj.value},${obj.resultado}`);

    console.log("Fin Async Function");
  } catch (error) {
    console.error(error);
  }
}

// Ejecuta la función asíncrona
funcionAsincronaDeclarada();