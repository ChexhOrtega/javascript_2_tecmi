const xhr = new XMLHttpRequest();

function onRequestHandler() {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response); // Parsear JSON a objeto JS
    mostrarTabla(data);
  }
}

function mostrarTabla(comentarios) {
  let contentHTML = `
        <h1>Comentarios desde API JSONPlaceholder</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Comentario</th>
            </tr>
          </thead>
          <tbody>
      `;

  comentarios.forEach((c) => {
    contentHTML += `
          <tr>
            <td>${c.id}</td>
            <td>${c.name}</td>
            <td>${c.email}</td>
            <td>${c.body}</td>
          </tr>
        `;
  });

  contentHTML += `</tbody></table>`;

  document.getElementById("app").innerHTML = contentHTML;
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", "https://jsonplaceholder.typicode.com/comments");
xhr.send();
