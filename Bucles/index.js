/*Realizar un programa que permita el ingreso de un número y muestre su tabla de 
multiplicar (Los primeros 10 múltiplos). */
const multiplos = () => {
    let numero = parseInt(prompt('Ingrese un numero: '))
    let ArrayMultiplos = []
    for(i = 1; i <= 10; i++) {
        let resultado = numero * i
        ArrayMultiplos.push(resultado)
    }
    alert(`Los primeros 10 multiplos de ${numero} son:\n${ArrayMultiplos}`)
}

// multiplos()