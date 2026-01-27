    window.addEventListener("load", function () {
        const permiso = localStorage.getItem("playMusic");

        if (permiso === "yes") {
            const audio = document.getElementById("musica");
            audio.play();
            localStorage.removeItem("playMusic");
        }
    });
