/*let nombre = "Patricia";
let apellido = "Delgadillo";
let edad = 30;
let colorFavorito = "lila";
let parrafo = "Mi nombre es " + nombre + " " + apellido + " tengo " + edad + " y mi color favorito es " + colorFavorito;
console.log(parrafo);*/

/*cliente0 - objeto*/
let clientearray =
    [
        {
            nombre: "Alicia Perez",
            edad: 19,
            ci: 987456,
            domicilio: "Calle Leoncio No. 333",
            mascotasarray:
                /*mascota1*/
                [
                    {
                        especie: "Gato",
                        nombre: "Juancho",
                        sexo: "Macho",
                        edad: 5,
                        color: "Negro"
                    }
                ]
        },
        /*Cliente1- objeto*/
        {
            nombre: "Beto Frias",
            edad: 24,
            ci: 765422,
            domicilio: "Avenida Panamericana No. 455",
            mascotasarray:
                /*mascota1*/
                [
                    {
                        especie: "Gato",
                        nombre: "Tiki",
                        sexo: "Hembra",
                        edad: 2,
                        color: "Blanco"
                    }
                ]
        },
        /*cliente2 - objeto*/
        {
            nombre: "Carla Quispe",
            edad: 33,
            ci: 645322,
            domicilio: "Avenida Guayacan No. 32",
            mascotasarray: [
                /*mascota1*/
                {
                    especie: "Perro",
                    nombre: "Boby",
                    sexo: "Macho",
                    edad: 12,
                    color: "Negro"
                },
                /*mascota2*/
                {
                    especie: "Gato",
                    nombre: "Lila",
                    sexo: "Hembra",
                    edad: 1,
                    color: "Naranja"
                }
            ]
        }

    ];

let parsedJSON = JSON.parse(stringJSON);
console.log(parsedJSON);
console.log(clientearray[0])
