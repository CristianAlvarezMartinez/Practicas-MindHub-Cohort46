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

/*Realizar un programa que permita el ingreso de números los cuales se tienen que ir 
acumulando. El ingreso de datos terminará cuando el usuario ingrese un valor 0. */

const numerosAcumulados = () => {
    let arrayNuemrosAcumulados = []
    while(true) {
    let numeroIngresado = parseInt(prompt('Ingrese un número: '))
        if (numeroIngresado == 0){
            alert(`Los datos ingresados son: \n ${arrayNuemrosAcumulados}`)
            break;
        }
        arrayNuemrosAcumulados.push(numeroIngresado)
    }
    
} 

    

// numerosAcumulados()


/*Realizar en juego de adivinar el número de los ejercicios del tema anterior, en una
variable guardar un número que esté en el rango 1 - 100. La persona deberá poder ingresar
números hasta adivinar el valor que se encuentre en dicha variable. Si el valor es menor al
número secreto, avisarle al usuario lo sucedido y pedirle nuevamente el ingreso de otro
número, realizar la misma acción pero en lugar de cuando es menor, si es que el número
ingresado es mayor. Así sucesivamente hasta que el usuario adivine el número secreto. Por
último mostrar un mensaje de felicitaciones y decirle en cuantos intentos lo ha realizado. */

const adivinaElNumero = () => {
    let numeroIncognito = 22
    let intentos = []
    while(true) {
        let numeroIngresado = parseInt(prompt('Ingrese un número: '))
        if (numeroIngresado == numeroIncognito) {
            alert(`Felicidades! Haz adivinado el número oculto!\nTu número de intentos ha sido ${intentos.length}`)
            break;
        }
        else if (numeroIngresado < numeroIncognito) {
            intentos.push(numeroIngresado)
            alert(`El valor ingresado es menor al número oculto`)
        }

        intentos.push(numeroIngresado)
        alert(`El valor ingresado es mayor al número oculto`)
    }
}

// adivinaElNumero()

/*Realizar un programa que permita decir si un número es primo. Un número es primo si solo es divisible
por el valor 1 y por sí mismo. Ayuda: Usar la operación de módulo. Los números solo poseen divisores hasta la
mitad del valor del mismo. Ej: 50 tiene como divisores 1, 2, 5, 10 y 25. No es primo. Con tener más de 2
divisores el número ya no es primo.*/

// const numeroPrimo = () => {
    
// }