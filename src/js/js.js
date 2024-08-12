document.addEventListener("DOMContentLoaded", () => {
    const notas = document.querySelectorAll(".nota");
    const submit = document.querySelector(".enviar");

    const contenedorUno = document.querySelector(".contenedor-principal-uno");
    const contenedorDos = document.querySelector(".contenedor-principal-dos");
    const nuevaNota = document.querySelector("#añadir-nota");

    let notaGuardada = null;

    for (let i = 0; i < notas.length; i++) {

        notas[i].addEventListener("click", (e) => {

            for (let j = 0; j < notas.length; j++) {
                notas[j].classList.remove("nota-activa");
                notas[j].classList.add("nota");
            }


            notas[i].classList.remove("nota");
            notas[i].classList.add("nota-activa");

            notaGuardada = e.target.textContent;

            nuevaNota.textContent = notaGuardada;


        })
    }

    submit.addEventListener("click", (e) => {
        e.preventDefault();

        if (notaGuardada != null) {
            contenedorUno.style.display = "none";
            contenedorDos.style.display = "flex";
        } else {
            const error = document.createElement("p");
            error.classList.add("error");
            error.textContent = "You must select a rating before submit.";

            contenedorUno.appendChild(error);

            setTimeout(() => {
                error.remove();
            }, 2000);

        }

    })
})