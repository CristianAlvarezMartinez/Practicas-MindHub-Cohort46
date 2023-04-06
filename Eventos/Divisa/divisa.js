/*Crear una aplicación de conversion de divisa*/

const tasaActual = document.getElementById('tasa-input')
const dolar = document.getElementById('dolar')
const pesos = document.getElementById('peso')
const btn = document.getElementById('convertir-btn')

btn.addEventListener('click', () => {
    let operacion = tasaActual.value*dolar.value
    pesos.value = parseInt(operacion)
})