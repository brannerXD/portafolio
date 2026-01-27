    window.addEventListener("load", function () {
        const permiso = localStorage.getItem("playMusic");

        if (permiso === "yes") {
            const audio = document.getElementById("musica");
            audio.play();
            localStorage.removeItem("playMusic");
        }
    });

const titulos = document.querySelectorAll('.Despliegue-titulo');

    titulos.forEach(titulo => {
        titulo.addEventListener('click', () => {
            const contenido = titulo.nextElementSibling;

            if (contenido.style.maxHeight) {
                contenido.style.maxHeight = null; 
            } else {
                contenido.style.maxHeight = contenido.scrollHeight + "px";
            }
        });
    });
