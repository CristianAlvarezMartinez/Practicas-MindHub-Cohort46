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