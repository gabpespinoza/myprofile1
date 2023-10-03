// 1 Función que calcula el área de un círculo
function calcularAreaCirculo(radio) {
    let area = Math.PI * Math.pow(radio, 2);
    return area;
}

// comprobando
let radioCirculo = 5;
let areaCirculo = calcularAreaCirculo(radioCirculo);
console.log("Área del círculo:" + areaCirculo);


// 2 Función para el Índice de Masa Corporal (IMC)
function calcularIMC(peso, altura) {
    let alturaMt = altura / 100; // Convertir altura de cm a metros
    let imc = peso / (alturaMt * alturaMt);
    return imc;
}
//comprobando 
let pesoPersona = 70;
let alturaPersona = 170;
let imcPersona = calcularIMC(pesoPersona, alturaPersona);
console.log("IMC de la persona:", imcPersona);


//3 Función que cuenta la cantidad de palabras en un string
function contarPalabras(cadena) {
    let palabras = cadena.split(" ");
    return palabras.length;
}
//Comprobando 
let texto = "Este es un ejemplo de una cadena de palabras.";
let cantidadPalabras = contarPalabras(texto);
console.log("Cantidad de palabras:", cantidadPalabras);
