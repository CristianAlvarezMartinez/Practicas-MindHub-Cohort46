
const notasContenedor = document.getElementById('notas-contenedor-id')
let arrayNotas = [{
                    id: 1,
                    titulo: 'Sacar la basura',
                    texto: 'mi mamá me reta si no lo hago',
                    realizada: false
                },
                {
                    id: 2,
                    titulo: 'Lavar los platos',
                    texto: 'mi mamá me reta si no lo hago',
                    realizada: false
                },
                {
                    id: 3,
                    titulo: 'Pasear el perro',
                    texto: 'mi mamá me reta si no lo hago',
                    realizada: false
                }]
let idGlobal = 3
let valueTitulo = ''
let valueTexto = ''
const botonGuardar = document.getElementById('guardar')
const resetBtn = document.getElementById('borrar')
const searchInput = document.getElementById('searcher-btn')
const switchInput = document.getElementById('flexSwitchCheckDefault')

// EVENTOS

botonGuardar.addEventListener('click', () => {
    valueTitulo = document.getElementById('nota-tiutlo').value
    valueTexto = document.getElementById('textarea-card').value
    if(valueTitulo != '' && valueTexto != '') {
        pushearNota(valueTitulo, valueTexto)
       notasContenedor.innerHTML =  crearNota(arrayNotas)
    }    
})

resetBtn.addEventListener('click', () => {
    document.getElementById('nota-tiutlo').value = ''
    document.getElementById('textarea-card').value = ''
    
})

searchInput.addEventListener('keyup',() => {
    let value = ''
    value += searchInput.value
    let newArray = filtarPorTexto(arrayNotas, value)
    let imprimir = crearNota(newArray)
    notasContenedor.innerHTML = imprimir
    
})

switchInput.addEventListener('change', () => {
    let newArray = filtrarPorEstado(arrayNotas)
    let imprimir = crearNota(newArray)
    notasContenedor.innerHTML = imprimir
})

// FUNCIONES

const plantillaNotas = nota => {
    return `<div class="card-container bg-light col-xxl-2 col-md-3 col-4 d-flex flex-column align-items-center">
                <div class="title-container d-flex justify-content-center gap-2">
                <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada?"checked":""}>
                    <label for="checkbox-card">${nota.titulo}</label>
                </div>
                <p class="text-center p-cards">${nota.texto}</p>
                <button onclick="borrarNota(${nota.id})" class="bg-danger btn-card">Borrar nota</button>
            </div>
    `
    
}

const crearNota = (array) => {
    let cadenaNotas =  array.map(objeto => plantillaNotas(objeto))
    return cadenaNotas.join('')
}
let notasHechas = crearNota(arrayNotas)
notasContenedor.innerHTML = notasHechas

const pushearNota = (titulo, texto) => {
    let nota = {
                id: ++idGlobal,
                titulo: titulo,
                texto: texto,
                realizada: false
               }
    
    arrayNotas.push(nota)
} 

const borrarNota = id => {
    let newTemplate = ''
    let index = arrayNotas.findIndex(objeto => objeto.id === id)
    if(index >= 0) {
        arrayNotas.splice(index, 1)
        newTemplate = arrayNotas.map(plantillaNotas).join('')
    }
    notasContenedor.innerHTML = newTemplate
}

const marcarRealizada = id => {
    let objetoEncontrado = arrayNotas.find(card => card.id == id)
    objetoEncontrado.realizada = !objetoEncontrado.realizada
}

const filtrarPorEstado = (array) => {
    if(switchInput.checked == false ) { 
        return array
    }
    return array.filter(card => card.realizada == true)
}

const filtarPorTexto = (array, txt) => {
    if(!txt) {
        return array
    }
    const txtMinus = txt.toLowerCase()
    return array.filter(card => card.titulo.toLowerCase().includes(txtMinus) || card.texto.toLowerCase().includes(txtMinus)) 
}