function responderDespuesDe2sec() {
    return new Promise(resolver => {
        setTimeout(() => {
            resolver("Respuesta");
        }, 2000);
    });
}

async function asyncCall() {
    console.log("Llamando a la función async", new Date().toLocaleTimeString());
    const resultado = await responderDespuesDe2sec();
    console.log("Resultado:", resultado, new Date().toLocaleTimeString());
}

asyncCall();