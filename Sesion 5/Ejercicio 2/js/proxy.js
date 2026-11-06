const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

// ------------------------------
// Manejador usando includes()
// ------------------------------
// Este manejador valida que solo se puedan asignar propiedades permitidas.
// Si alguien intenta agregar una propiedad que no existe, se mostrará un error.
const manejadorIncludes = {
  set(obj, prop, valor) {
    const propiedadesPermitidas = ["nombre", "apellido", "edad"];

    // includes() revisa si la propiedad está dentro de la lista permitida.
    if (propiedadesPermitidas.includes(prop)) {
      obj[prop] = valor; // Si es válida, se asigna.
    } else {
      console.error(`❌ La propiedad "${prop}" no está permitida en el objeto persona.`);
    }

    // Los proxies requieren que el método set retorne true para indicar que todo salió bien.
    return true;
  }
};

const manejador = {
  set(obj, prop, valor) {
    const propiedadesPermitidas = ["nombre", "apellido", "edad"];

    if (propiedadesPermitidas.indexOf(prop) === -1) {
      console.error(
        `La propiedad "${prop}" no está permitida en el objeto persona.`,
      );
      return false;
    }

    obj[prop] = valor;
    return true;
  },
};

const manejadorExpresionesRegulares = {
  set(obj, prop, valor) {
    const propiedadesValidas = ["nombre", "apellido", "edad"];

    // Validar que la propiedad exista en el objeto
    if (propiedadesValidas.indexOf(prop) === -1) {
      console.error(`❌ La propiedad "${prop}" no existe en el objeto persona.`);
      return;
    }

    // Validación para nombre y apellido: solo letras y espacios.
    // La expresión regular revisa que NO haya números ni símbolos.
    if ((prop === "nombre" || prop === "apellido") &&
        !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor)) {
      console.error(`❌ El valor de "${prop}" no es válido ("${valor}"). Solo se permiten letras y espacios.`);
      return;
    }

    if(prop === "edad" && (typeof valor !== "number")) {
        console.error(`❌ El valor de "edad" no es válido ("${valor}"). Debe ser un número`);
        return;
    }

    // Si todo es válido, se asigna el valor.
    obj[prop] = valor;
  }
};

const juan = new Proxy(persona, manejadorExpresionesRegulares);

juan.nombre = "9879879";
juan.apellido = "Pérez";
juan.edad = 35;
juan.twitter = "@juanperez"; // Esto generará un error en la consola

console.info("Proxy juan:", juan);
console.info("Objeto persona:", persona);
