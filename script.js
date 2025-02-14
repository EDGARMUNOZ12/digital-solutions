function mostrarMensaje() {
    alert("Gracias por tu interés en Digital Solutions. ¡Contáctanos para más información!");

    // Crear un nuevo título grande
    let titulo = document.createElement("h1");
    titulo.textContent = "Gracias por visualizar el proyecto";
    titulo.style.color = "#0044cc";
    titulo.style.fontSize = "32px";
    titulo.style.marginTop = "20px";

    // Crear un subtítulo con el nombre
    let nombre = document.createElement("h2");
    nombre.textContent = "Edgar Muñoz Ruiz";
    nombre.style.color = "#222";
    nombre.style.fontSize = "24px";

    // Agregar los elementos al cuerpo de la página
    let main = document.querySelector("main");
    main.appendChild(titulo);
    main.appendChild(nombre);
}
