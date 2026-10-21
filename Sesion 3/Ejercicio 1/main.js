function CargaDocumento() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerText = this.responseText;
    }
  };

  xhttp.open("GET", "archivo.txt", true);
  xhttp.send();
}

function CargaDocumento() {
  fetch("archivo.txt")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Archivo no disponible");
      }
      return res.text();
    })
    .then((data) => {
      document.getElementById("demo").innerText = data;
    })
    .catch((error) => {
      console.error("Error al cargar el documento:", error);
    });
}
