document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#vinted-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const vintedLink = document.getElementById("vinted_link_input").value;
        if (vintedLink !== "") {
            fetch("/procesar_link", {
                method: "POST",
                body: JSON.stringify({ vintedLink }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.text())
                .then(resultado => {
                    console.log(resultado); // Aquí obtienes la respuesta del servidor
                })
                .catch(error => {
                    console.error("Error al enviar la solicitud al servidor:", error);
                });
        } else {
            console.log("Formulario vacío");
        }
    });
});
