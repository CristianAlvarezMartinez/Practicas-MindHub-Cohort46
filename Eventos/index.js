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

const arrayNotas = [
    {
        id: 1,
        titulo: 'Sacar la basura',
        texto: 'Mi mamá me reta si no lo hago',
        realizada: false 

    },
    {
        id: 2,
        titulo: 'Hacer la cama',
        texto: 'Mi mamá me reta si no lo hago',
        realizada: false 

    },
    {
        id: 3,
        titulo: 'Lavar los platos',
        texto: 'Mi mamá me reta si no lo hago',
        realizada: false 

    },
    {
        id: 4,
        titulo: 'Pasear el perro',
        texto: 'Mi mamá me reta si no lo hago',
        realizada: false 

    }]

let idGoblal = 4

const crearNota = () => {
    return `<div class="card-container bg-light col-xxl-2 col-xl-3 d-flex flex-column align-items-center">
                <div class="title-container d-flex justify-content-center gap-2">
                    <input type="checkbox" id="checkbox-card">
                    <label for="checkbox-card">Sacar la basura</label>
                </div>
                <p class="text-center p-cards">Mi mama me va a retar si no lo hago</p>
                <button class="bg-danger btn-card">Borrar nota</button>
            </div>
    `
}

const agregarNota = (tiutlo, texto) => {
    let nota = {

                id: 1,
                titulo: tiutlo,
                texto: texto,
                realizada: false


           }
    arrayNotas.push(nota)
} 

