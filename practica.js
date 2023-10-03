function perimetrocuadrado(lado1, lado2, lado3, lado4) {
    let resultado = lado1 + lado2 + lado3 + lado4;
    return resultado;
}

let miperimetro = {
    lado1: 10,
    lado2: 10,
    lado3: 10,
    lado4: 10
}
let perimetrototal = perimetrocuadrado(miperimetro.lado1, miperimetro.lado2, miperimetro, lado3, miperimetro.lado4)

console.log(perimetrototal);
