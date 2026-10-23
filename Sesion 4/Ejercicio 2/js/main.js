const formEl = document.querySelector(".form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

  const formData = new FormData(formEl); // Obtener los datos del formulario
  const data = Object.fromEntries(formData); // Convertir los datos a un objeto

  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data);
    })
    .catch((error) => {
      console.error("Error al enviar los datos:", error);
    });
});
