/*1. Crear una aplicación que calcule el índice de masa corporal.*/

let estatura = document.getElementById('estatura-input')
let peso = document.getElementById('peso-input')
let resultado = document.getElementById('resultado')
let button = document.getElementById('btn-envia')

button.addEventListener('click', () => {
    let alturaMetro = estatura.value/100
    let imc = peso.value / (alturaMetro**2)
    resultado.value = imc.toFixed(2)
})


/*Crear una aplicación de conversion de divisa*/

const tasaActual = document.getElementById('tasa-input')
const dolar = document.getElementById('dolar')
const pesos = document.getElementById('peso')
const btn = document.getElementById('convertir-btn')

btn.addEventListener('click', () => {
    let operacion = tasaActual.value*dolar.value
    pesos.value = parseInt(operacion)
})






/*Realizar una aplicación de notas (el front queda a gusto de cada uno).*/

const notasContenedor = document.getElementById('notas-contenedor-id')
const arrayNotas = []

const plantillaNotas = nota => {
    return `<div class="card-container bg-light col-xxl-2 col-xl-3 d-flex flex-column align-items-center">
                <div class="title-container d-flex justify-content-center gap-2">
                    <input type="checkbox" id="checkbox-card">
                    <label for="checkbox-card">${nota.titulo}</label>
                </div>
                <p class="text-center p-cards">${nota.texto}</p>
                <button onclick="borrarNota(${nota.id})" class="bg-danger btn-card">Borrar nota</button>
            </div>
    `
}


let cadenaNotas = ''  
const crearNota = (array) => {
    if(array.length == 1) {
        cadenaNotas = plantillaNotas(array[0])
    }
    cadenaNotas = plantillaNotas(array[array.length - 1])
}

const agregarNota = (tiutlo, texto) => {
    let nota = {

                id:'',
                titulo: tiutlo,
                texto: texto,
                realizada: false


           }
           
    if(arrayNotas.length == 0){
           nota.id = 1
    }
    else if (arrayNotas.length >= 1) {
         nota.id = arrayNotas[arrayNotas.length - 1].id + 1
    }
    arrayNotas.push(nota)
} 


const borrarNota = id => {
    let newTemplate = ''
    let index = arrayNotas.findIndex(objeto => objeto.id === id)
    if(index >= 0) {
        arrayNotas.splice(index, 1)
        for(i of arrayNotas) {
            newTemplate += plantillaNotas(i)
        }
        notasContenedor.innerHTML = newTemplate
    }
}

let valueTitulo = ''
let valueTexto = ''
const botonGuardar = document.getElementById('guardar')

botonGuardar.addEventListener('click', () => {
    valueTitulo = document.getElementById('nota-tiutlo').value
    valueTexto = document.getElementById('textarea-card').value
    if(valueTitulo != '' && valueTexto != '') {
        agregarNota(valueTitulo, valueTexto)
        crearNota(arrayNotas)
        notasContenedor.innerHTML += cadenaNotas
    }    
})

