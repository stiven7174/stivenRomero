// // punto 1
// let numero = parseInt(prompt("ingrese el numero"))
// for (let index = 0; index <= 10; index++) {
//     let multiplicacion = numero *index
//     console.log(multiplicacion);
//
// // punto 2
// let suma = 0;
// let numero = parseInt(prompt("Ingrese un número"));

// while (numero !== 0) { 
//     suma += numero;
//     numero = parseInt(prompt("Ingrese otro número"));
// }
// console.log("La suma acumulada es: " + suma);
// // punto 3
// const elNumero = 50
// let numeroDelUsuario = parseInt(prompt("ingrese el numero"))
// for (let index = 1; numeroDelUsuario!==elNumero; index++) {
//     alert("Vas "+ index + " intentos")
//     if (numeroDelUsuario<elNumero) {
//         alert("el numero que ingresaste es menor vuelve a intentar")
//     } else {
//         alert("el numero que ingresaste es mayor vuelve a intentar")
//     }
//     numeroDelUsuario = parseInt(prompt("ingrese otra vez un numero"))
// }
// alert("felicitaciones, adivinaste el numero")
// alert("tuviste "+ index + " intentos")
// // punto 4
// function esPrimo(numero) {
//     if (numero <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//         if (numero % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// let numero = parseInt(prompt("ingrese un numero"));

// if (esPrimo(numero)) {
//     console.log(numero + " es un número primo");
// } else {
//     console.log(numero + " no es un número primo");
// }
// // punto 5
// function encontrarDivisores(numero) {
//     if (numero === 0 || numero === 1) {
//         console.log("El número " + numero + " no tiene divisores propios.");
//         return;
//     }
//     let divisores = [];
//     for (let i = 1; i <= numero; i++) {
//         if (numero % i === 0) {
//             divisores.push(i);
//         }
//     }
//     console.log("Los divisores del número " + numero + " son:");
//     console.log(divisores.join(", "));
// }
// let numeroUsuario = parseInt(prompt("Ingrese un número entero:"));
// encontrarDivisores(numeroUsuario);
// // punto 6
// let numerosUZD = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
// function obtenerPosicionAbecedario(letra) {
//   return letra.charCodeAt() - "a".charCodeAt() + 1;
// }
// for (let i = 0; i < numerosUZD.length; i++) {
//   let letra = numerosUZD[i];
//   let posicion = obtenerPosicionAbecedario(letra);
//   console.log(${letra} está en la posición ${posicion} del abecedario);
// }
// // punto 7
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let numero of numeros) {
//   let doble = numero * 2;
//   console.log(El doble de ${numero} es ${doble});
// }
// // punto 8
// let arrayFamilia = [
//     {
//         nombre: "Stiven",
//         apellido: "Romero",
//         edad: 17,
//         altura: 174,
//         peso: 64,
//         soyEl: "hijo mayor"
//     },
//     {
//         nombre: "Julian",
//         apellido: "Romero",
//         edad: 15,
//         altura: 169,
//         peso: 56,
//         soyEl: "hijo del medio"
//     },
//     {
//         nombre: "Thomas",
//         apellido: "Romero",
//         edad: 10,
//         altura: 148,
//         peso: 42,
//         soyEl: "hijo menor"
//     },
//     {
//         nombre: "Almer",
//         apellido: "Romero",
//         edad: 35,
//         altura: 170,
//         peso: 60,
//         soyEl: "papá"
//     },
//     {
//         nombre: "Karen",
//         apellido: "Zarate",
//         edad: 30,
//         altura: 168,
//         peso: 64,
//         soyEl: "mamá"
//     }
// ];

// for (let miembro of arrayFamilia) {
//     let mensaje = Hola, mi nombre es ${miembro.nombre} ${miembro.apellido}. Tengo ${miembro.edad} años, mido ${miembro.altura} cm y peso ${miembro.peso} kg. Soy el/la ${miembro.soyEl} de la familia.;
//     console.log(mensaje);
// }
// // punto 9
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let numero of numeros) {
//   if (numero % 2 !== 0) {
//     console.log(numero);
//   }
// }
// // punto 10
// let sumaPares = 0;
// let sumaImpares = 0;
// while (true) {
//     let numero = parseInt(prompt("Ingrese un número (0 para finalizar): "));
//     if (numero === 0) {
//         break; 
//     }
//     if (numero % 2 === 0) {
//         sumaPares += numero;
//     } else {
//         sumaImpares += numero;
//     }
// }
// console.log(Suma de pares: ${sumaPares});
// console.log(Suma de impares: ${sumaImpares});
// // punto 11 
// const numeros = [1, 5, 2, 4, 1, 6, 3, 8, 9, 11];
// let numeroMaximo = numeros[0];
// console.log(numeros.length);
// for (let i = 1; i < numeros.length; i++) {
//   if (numeros[i] > numeroMaximo) {
//     numeroMaximo = numeros[i];
//   }
// }
// console.log("El número máximo es:", numeroMaximo);
// // punto 12
// let numeros = [10, 5, 2, 4, 3, 6, 3, 8, 9, 11];
// let numeroMinimo = numeros[0];
// console.log(numeros.length);
// for (let i = 1; i < numeros.length; i++) {
//   if (numeros[i] < numeroMinimo) {
//     numeroMinimo = numeros[i];
//   }
// }
// console.log("El número minimo es:", numeroMinimo);
// // punto 13
// function obtenerEleccionJugador(nombreJugador) {
//     let eleccion;
//     do {
//         eleccion = prompt(`${nombreJugador}, elige (piedra, papel o tijera): `).toLowerCase();
//     } while (!["piedra", "papel", "tijera"].includes(eleccion));
//     return eleccion;
// }
// function determinarGanador(eleccionJugador1, eleccionJugador2) {
//     if (eleccionJugador1 === eleccionJugador2) {
//         return "Empate";
//     } else {
//         const reglas = {
//             piedra: "tijera",
//             papel: "piedra",
//             tijera: "papel"
//         };

//         if (reglas[eleccionJugador1] === eleccionJugador2) {
//             return Jugador 1 (${eleccionJugador1});
//         } else {
//             return Jugador 2 (${eleccionJugador2});
//         }
//     }
// }
// function jugarRonda() {
//     const jugador1 = obtenerEleccionJugador("Jugador 1");
//     const jugador2 = obtenerEleccionJugador("Jugador 2");

//     console.log(Jugador 1 eligió ${jugador1});
//     console.log(Jugador 2 eligió ${jugador2});

//     const ganador = determinarGanador(jugador1, jugador2);
//     console.log(ganador === "Empate" ? "¡Empate! Se juega otra ronda." : ${ganador} gana esta ronda!);
// }
// function main() {
//     while (true) {
//         jugarRonda();
//         const continuar = prompt("¿Desean jugar otra ronda? (sí/no): ").toLowerCase();
//         if (continuar !== "sí") {
//             break;
//         }
//     }
//     console.log("¡Gracias por jugar!");
// }
// main();
// // punto 14
// let asteriscos = 5;
// for (let i = 1; i <= asteriscos; i++) {
//     let triangulo = '';

//     for (let j = 1; j <= asteriscos - i; j++) {
//         triangulo += ' ';
//     }

//     for (let k = 1; k <= 2 * i - 1; k++) {
//         triangulo += '*';
//     }
//     console.log(triangulo);
// }
// // punto 15
// let asteriscosInvertidos = 5;
// for (let i = asteriscosInvertidos; i >= 1; i--) {
//     let row = '';

//     for (let j = 1; j <= asteriscosInvertidos - i; j++) {
//         row += ' ';
//     }

//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '*';
//     }

//     console.log(row);
// }
// punto 16
function ordenarArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
}
let numerosDesordenados = [5, 2, 4, 1, 3, 9, 7, 8, 6, 0];
console.log("Array desordenado: ", numerosDesordenados);
ordenarArray(numerosDesordenados);
console.log("Array ordenado: ", numerosDesordenados);