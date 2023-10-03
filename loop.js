// Función para contar asteriscos
function ContarAsteriscos(numero) {
    let resultado;
    for (let i = 0; i < numero; i++) {
        resultado = '*';
    }
    return resultado;
}

// Verificando
console.log(ContarAsteriscos(15));




// Filtrar números pares 
function FiltrarPares(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0)
            resultado = (array[i]);
    }
    return resultado;
}

//Corroborar
//console.log(FiltrarPares([1, 2, 3, 4, 5,]));

//funcion para multiplicar 
function GenerarTablaMultiplicar(numero) {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado = `${numero} x ${i} = ${numero * i}\n`;
    }
    return resultado;
}

// verificando
console.log(GenerarTablaMultiplicar(5))

//Condicional para contar vocales 
function ContadorVocales(string) {
    let contador = 0;
    let vocales = "aeiou";
    for (let i = 0; i < string.length; i++) {
        if (vocales.includes(string[i])) {
            contador++;
        }
    }
    return contador;
}
// comprobando
console.log(ContadorVocales("eucalipto"));


