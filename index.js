function parimpar(num) {
    let resultado;
    if (num % 2 === 0) {
        resultado = "es un número par";
    } else {
        resultado = "es un número impar";
    }
    return resultado;
}
// comprobando
let numero = 324;
let resultadofinal = parimpar(numero);
console.log(resultadofinal);


// Función de aprobación
function aprobarMateria(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    let resultado;
    if (promedio >= 51) {
        resultado = "aprobado";
    } else {
        resultado = "reprobado";
    }
    return resultado;
}
//comprobando
let nota = 85;
let resultadofinal2 = aprobarMateria(nota);
console.log(resultadofinal2);