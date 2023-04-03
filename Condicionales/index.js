// SOLUCION EJERCICIOS CONDICIONALES (Cristian Álvarez)

/*Realizar un programa que dado 2 números imprima por consola si el primer numero es
mayor que el segundo*/

function numMayor(num1, num2) {
    if (num1 > num2) {
        console.log('El primer número es mayor')
    }
    else {
        console.log('El segundo numero es mayour')
    }
}

numMayor(10, 5)
numMayor(5, 10)

/*Realizar un programa que dado 2 números imprima por consola si los numeros son
iguales o si son diferentes.*/

function numsIguales(num1, num2) {
    if (num1 != num2) {
        console.log('Estos numeros son diferentes')
    }
    else {
        console.log ('Estos numeros son iguales')
    }
}

numsIguales(10, 10)
numsIguales(10, 15)
 
/*Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros
es el mas grande o si son iguales.*/

function numMayorIgual (num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} es el número mayor `)
    }
    else if (num2 > num1) {
        console.log(`${num2} es el número mayor`)
    }
    else {
        console.log('Los números son iguales')
    }
}

numMayorIgual(7, 12)
numMayorIgual(12, 12)

/*Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas
chico.*/

function numMasChico(num1, num2, num3) {
    if (num3 && num2 > num1) {
        console.log(`${num1} es el número mas chicho de todos`)
    }
    else if (num3 && num1 > num2) {
        console.log(`${num2} es el número mas chico de todos`)
    }
    else {
        console.log(`${num3} es el número mas chico`)
    }
}

numMasChico(28, 65,110 )

/*Realizar un programa que dado 2 objetos representando personas con las propiedades
nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual
es la de mayor edad.*/

let persona1 = {
    nombre: 'Marta',
    edad: 40,
    estura: 1.70
}
                            //Marta es mas alta y Carlos tiene mas edad
let persona2 = {
    nombre: 'Carlos',
    edad: 54,
    estatura: 1.62
}

let estaturaP1 = persona1.estura
let estaturaP2 = persona2.estatura
let edadP1 = persona1.edad
let edadP2 = persona2.edad

function masAlta_masEdad(estaturaP1, estaturaP2, edadP1, edadP2) {
  if (estaturaP1 > estaturaP2 && edadP1 > edadP2) {
    console.log(`${persona1.nombre} es mas alta y tiene mas edad que ${persona2.nombre}`) //Marta es mas alta y tiene mas edad que Carlos
  }
  else if (estaturaP2 > estaturaP1 && edadP2 > edadP1) {
    console.log(`${persona2.nombre} es mas alto y tiene mas edad que ${persona1.nombre}`) //Carlos es mas alto y tiene mas edad que Marta
  }
  else if (estaturaP1 > estaturaP2 && edadP1 < edadP2) {
    console.log(`${persona1.nombre} es mas alta y ${persona2.nombre} tiene mas edad`) //Marta es mas alta y Carlos tiene mas edad
  }
  else if (estaturaP2 > estaturaP1 && edadP1 > edadP2) {
    console.log(`${persona2.nombre} es mas alto y ${persona1.nombre} tiene mas edad`) // Carlos es mas alto y Marta tiene mas edad
  }
  else {
    console.log(`${persona1.nombre} y ${persona2.nombre} tiene la misma estatura y edad`)
  }
}

masAlta_masEdad(estaturaP1, estaturaP2, edadP1, edadP2)


/*Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión
y permita determinar si estas capacitado para conducir. La persona deberá cumplir con
una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como
mínimo.*/




function licenciaDeConducir() {
    let nombre = prompt('Ingresa tu nombre: ')
    let edad = parseInt(prompt('Ingresa tu edad: '))
    let estatura = parseInt(prompt('Ingresa tu estatura: '))
    let vision = parseInt(prompt('Ingresa tu nivel de visión: '))

    if (edad > 18 && estatura > 150 && vision > 8) {
        console.log(`${nombre} se encuentra capacitad@ para conducir`)
    }
    else
    {
        console.log(`${nombre} NO se encuentra capacitad@ para conducir`)
    }
 }


// DESCOMENTAR PARA PROBAR LA FUNCION ANTERIOR
// licenciaDeConducir()


/*Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip
o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu
mismo nombre tienen ingreso libre así como también los que posean un pase vip,
mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en
caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el
mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso
afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta
de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en
caso contrario a no querer comprar, mostrar mensaje de despedida*/


function programaDeIngreso() {
    let nombreCliente = prompt('Ingresa tu nombre: ')
    let tipoDePase = prompt('Ingresa tu tipo de pase: ')
    let entrada = prompt('Tienes entrada?: ')
    if (nombreCliente === 'Cristian' || tipoDePase === 'vip') {
        alert('Bienvenido')
    }
    else if (entrada === 'si') {
        let usoDeEntrada = prompt('Deseas usar tu entrada?: ')
        if (usoDeEntrada === 'si') {
            alert('Bienvenido')
        }
        else {
            alert('Fue un placer servirte')
        }
    } else if (entrada === 'no') {
        let compra = prompt('Desea comprar una entrada?: ')
        if (compra === 'si') {
            let dineroDisponible = parseInt(prompt('Digita tu dinero disponible: '))
            if (dineroDisponible >= 1000) {
                alert('Compra exitosa')
                alert('Bienvenido')
            }
            else {
                alert('Saldo insuficiente')
                alert('fue un placer servirte')
            }
        }
        else {
            alert('Fue un placer servirte')
        }
    }
}




/*Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario
deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
guardar en una variable llamada numeroIngresado, y en cada intento deberás
mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si
usas mucho código repetido, mas adelante veraz como realizar este juego de manera
mas eficiente.*/

const numeroIncognito = 2
let intentos = 3

function juegoAdivinanza() {
    let numeroIngresado = parseInt(prompt('Ingrese un número entre 1 - 10: '))
    if (numeroIngresado === numeroIncognito) {
        alert('Ganaste, haz adivinado el número')
    } else {
        intentos--
        
        if (numeroIngresado > numeroIncognito) {
            alert('El número ingresado es mayor, vuelve a intentarlo')
        } else {
            alert('El número ingresado es menor, vuelve a intentarlo')
        }

        if (intentos === 0) {
            alert('Te haz quedado sin intentos')
        } else {
            adivinanza()
        }
    } 
}




/*Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12
años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de
45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje
preguntando si en realidad tiene esa edad.*/

function queEres() {
    let edad = parseInt(prompt('Ingresa tu edad: '))
    switch (true) {
        case edad <= 12:
            alert('Eres un infante')
            break;
        case edad >= 13 && edad <= 18:
            alert('Eres un adolecente')
            break;
        case edad >= 19 && edad <= 45:
            alert('Eres un mayor joven')
            break;
        case edad > 45 && edad < 100:
            alert('Eres un anciano')
            break;
        case edad >= 100:
            alert('¿En realidad tienes esa edad?')
            break;
    }
}



/*Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de
algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
trampa.*/

function ppt() {
    let entradaJugador1 = prompt('Player 1 (Piedra, papel, tijera): ')
    let entradaJugador2 = prompt('Player 2 (Piedra, papel, tijera): ')

    switch (true) {
        case entradaJugador1 === entradaJugador2:
            alert('¡Empate!')
        break;
        case entradaJugador1 === 'piedra' && entradaJugador2 === 'tijera':
            alert('Jugador 1 Gana')
        break;
        case entradaJugador1 === 'papel' && entradaJugador2 === 'piedra':
            alert('Jugador 1 Gana')
        break;
        case entradaJugador1 === 'tijera' && entradaJugador2 === 'papel':
            alert('Jugador 1 Gana')
        break;
        case entradaJugador1 === 'tijera' && entradaJugador2 === 'piedra':
            alert('Jugador 2 Gana')
        break;
        case entradaJugador2 === 'papel' && entradaJugador1 === 'piedra':
            alert('Jugador 2 Gana')
        break;
        case entradaJugador1 === 'papel' && entradaJugador2 === 'tijera':
            alert('Jugador 2 Gana')
        break;
        default:
            alert('Un jugador ha hecho trampa')
        break;
    }

}




/*Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color,
Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo:
El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente
elección, no lo teníamos pensado*/

function colores() {
    let color = prompt('Ingresa un color: ')
    switch (true) {
        case color === 'blanco' || color === 'negro':
            alert('Falta de color')
            break;
        case color === 'verde':
            alert('El color de la naturaleza')
            break;
        case color === 'azul':
            alert('El color del agua')
            break;
        case color === 'amarillo':
            alert('El color del sol')
            break;
        case color === 'rojo':
            alert('El color del fuego')
            break;
        case color === 'marron':
            alert('El color de la tierra')
            break;
        default:
            alert('Excelente eleccion, no lo habiamos pensado')
            colores()
            break; 
    }
}




/*Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
ERROR si el divisor ingresado fue 0.*/

function operaciones() {
    let numero1 = parseInt(prompt('Ingrese el primer número '))
    let numero2 = parseInt(prompt('Ingrese el segundo número '))
    let operacion = prompt('Ingrese el tipo de operación a realizar')
    switch (true) {
        case numero2 == 0 && operacion === 'division':
            alert('ERROR')
            break;
        case operacion === 'suma' || operacion === '+':
            alert(`El resultado de la operación es: ${numero1 + numero2}`)
            break;
        case operacion === 'resta' || operacion === '-':
            alert(`El resultado de la operación es: ${numero1 - numero2}`)
            break;
        case operacion === 'multiplicacion' || operacion === '*' || operacion === 'multi':
            alert(`El resultado de la operación es: ${numero1 * numero2}`)
            break;
        case operacion === 'division' || operacion === '/':
            alert(`El resultado de la operación es: ${numero1/numero2}`)
            break;
    }
}




/*Crear un programa que permita ingresar todos los datos de tu documento nacional de
identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni
con todos los datos ingresados y mostrarlos por consola con console.table() mas un
mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.*/

function datosNacionales() {
    let nombreCompleto = prompt('Nombre Completo: ')
    let fechaNacimiento = prompt('Fecha de nacimiento: ')
    let lugarNacimiento = prompt('Lugar de nacimiento: ')
    let confirmarDatos = prompt(`¿Son correctos los siguientes datos? \n ${nombreCompleto} \n ${fechaNacimiento} \n ${lugarNacimiento}.\n Ingresar (si / no)`)
    const dni = {}

    if (confirmarDatos === 'si') {
        dni.nombre = nombreCompleto;
        dni.fechaDeNacimiento = fechaNacimiento;
        dni.lugarDeNacimiento =  lugarNacimiento;
        console.table(dni)
        alert('Registro exitoso')
    }
    else if (confirmarDatos === 'no') {
        alert('Vuelve a intentarlo en 1 mes')
    }
}