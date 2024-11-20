function cambiarTexto(){
    const selectorTitulo = document.getElementById("titulo");
    const nombreUsuario = prompt("Ingrese su nombre:")
    const contenedor = document.getElementById("cont-general")


// CAMBIANDO CONTENIDO DE UNA ETIQUETA JS
    selectorTitulo.innerText = "SERGIO SARMIENTO";
    selectorTitulo.innerHTML = "<strong>USUARIO:</strong>" + nombreUsuario;
// CAMBIANDO ESTILOS DE UNAS ETIQUETA DE JS 
    selectorTitulo.style.backgroundColor = "white";
    selectorTitulo.style.color = "#000";
    selectorTitulo.style.padding = "20px";
// CAMBIANDO ESTRUCTURA DE UNA ETIQUETA DE JS 
    contenedor.classList.add("dia");
}

function circulo(){
    const selectorTitulo = document.getElementById("titulo");
    const circulo = document.getElementById("figura");
    const redondo = document.getElementById("cont-general");

    selectorTitulo.innerText = "Circulo";

    circulo.style.borderRadius = " 50% ";
    circulo.style.backgroundColor = "aquamarine";
}

function rombo(){
    const selectorTitulo = document.getElementById("titulo");
    const rombo = document.getElementById("figura");
    const triangulo = document.getElementById("cont-general");

    selectorTitulo.innerText = "Rombo";

    // rombo.style.width= "100px";
    // rombo.style.height = "100px";

    rombo.style.transform = "rotate(45deg)" ;
    rombo.style.backgroundColor = "red" ;
}

function color(){
    const selectorTitulo = document.getElementById("titulo");
    const color = document.getElementById("cont-general");
    const fondo = document.getElementById("cont-general");

    selectorTitulo.innerText = "Color";

    color.style.backgroundColor = "blue";
}

function imagen() {
    const selectorTitulo = document.getElementById("titulo");
    const imagen = document.getElementById("imagen");

    imagen.classList.add("imagen")

   
    selectorTitulo.innerText = "Imagen";

    figura.style.backgroundSize = "cover"; 
    figura.style.backgroundPosition = "center"; 
}

function panel_lateral(){
    const panel = document.getElementById("panel_lateral")
    panel.classList.toggle("active")

}

function fondoDegradado() {
    const selectorTitulo = document.getElementById("titulo");
    const imagen = document.getElementById("figura");

    selectorTitulo.innerText = "Fondo Degradado";
    imagen.classList.add('fondo-degradado');
    imagen.style.backgroundImage = "linear-gradient(135deg, #f06, #4a90e2)";
}

function animacion() {
    const selectorTitulo = document.getElementById("titulo");
    const imagen = document.getElementById("figura");

    selectorTitulo.innerText = "Animación";
    imagen.classList.add('animacion');
    imagen.style.animation = "rotate 2s infinite";
}

function estrella() {
    const selectorTitulo = document.getElementById("titulo");
    const imagen = document.getElementById("figura");

    selectorTitulo.innerText = "Estrella";
    imagen.classList.add('estrella');
    imagen.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    imagen.style.backgroundColor = "green";
}

function moverTop() {
    const selectorTitulo = document.getElementById("titulo");
    const imagen = document.getElementById("figura");

    selectorTitulo.innerText = "Mover Arriba (Top)";
    imagen.style.transform = "translateY(-50px)";
}

function moverLeft() {
    const selectorTitulo = document.getElementById("titulo");
    const imagen = document.getElementById("figura");

    selectorTitulo.innerText = "Mover Izquierda (Left)";
    imagen.style.transform = "translateX(-50px)";
}

function moverRight() {
    const selectorTitulo = document.getElementById("titulo");
    const imagen = document.getElementById("figura");

    selectorTitulo.innerText = "Mover Derecha (Right)";
    imagen.style.transform = "translateX(50px)";
}

function moverDiagonal() {
    const selectorTitulo = document.getElementById("titulo");
    const imagen = document.getElementById("figura");

    selectorTitulo.innerText = "Diagonal";
    imagen.style.transform = "translate(50px, 50px)";
}

function moverBotton() {
    const selectorTitulo = document.getElementById("titulo");
    const imagen = document.getElementById("figura");

    selectorTitulo.innerText = "Mover Abajo (Botton)";
    imagen.style.transform = "translateY(50px)";
}

window.onscroll = function() {
    let panel = document.getElementById("panel-superior");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        panel.classList.add("show");
    } else {
        panel.classList.remove("show");
    }
}

function panel_superior(){
    const panel = document.getElementById("panel_superior")
    panel.classList.toggle("active")

}

function panel_superior() {
    const panel = document.getElementById("panel_superior");
    panel.classList.toggle("active");  
}

document.getElementById("closeBtn").addEventListener("click", panel_superior); 


