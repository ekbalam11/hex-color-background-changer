// Implementar solución aquí
//1. Recuperar elemento del DOM al que aplicar el evento click

function generateHexColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var redHex = red.toString(16).padStart(2, '0');
    var greenHex = green.toString(16).padStart(2, '0');
    var blueHex = blue.toString(16).padStart(2, '0');

    var hexColor = '#' + redHex + greenHex + blueHex;
    return hexColor;
}

function changeColor() {
    console.log('Esto es un clic');


    document.querySelector('#btn').style.backgroundColor = generateHexColor();
}


const btn = document.querySelector('#btn');
//2. Comprobar que se puede aplicar, haciendo que la consola muestre el mensaje al hacer clic.
btn.onclick = changeColor;


//3. Al hacer clic, body cambia de color



//4. Usa 2 funciones: una para generar un colo hex aleatorio, y otra para gestionar el evento clic



//5. Buscar por internet como generar un código hex de forma aleatoria.
