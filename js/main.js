
document.addEventListener("DOMContentLoaded", () => {

    // BOTÓN HAMBURGUESA
    const btnMenu = document.querySelector("#btnMenu");
    const menu = document.querySelector(".menu");

    if (btnMenu && menu) {

        btnMenu.addEventListener("click", () => {
            menu.classList.toggle("abierto");
            btnMenu.classList.toggle("activo");

            btnMenu.setAttribute(
                "aria-expanded",
                menu.classList.contains("abierto")
            );
        });

        // Cerrar al pulsar un enlace
        menu.querySelectorAll("a").forEach(enlace => {
            enlace.addEventListener("click", () => {
                menu.classList.remove("abierto");
                btnMenu.classList.remove("activo");
                btnMenu.setAttribute("aria-expanded", "false");
            });
        });
    }

    // ACORDEÓN
    const titulos = document.querySelectorAll(".accordion .titulo");

    titulos.forEach(titulo => {
        titulo.addEventListener("click", () => {

            const item = titulo.parentElement;

            document.querySelectorAll(".accordion .item").forEach(otro => {
                if (otro !== item) {
                    otro.classList.remove("activo");
                }
            });

            item.classList.toggle("activo");
        });
    });

});
