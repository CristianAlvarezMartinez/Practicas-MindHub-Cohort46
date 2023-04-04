/*1- Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la propiedades nombre, alcohol (abv) y "amargor" (ibu)*/
const arrayCervezas = beers;

const filtroEtilico = (array, valorAlcohol) => {
    let arrayFiltrado = array.filter(cerveza => cerveza.abv < valorAlcohol )
    let arrayFinal = arrayFiltrado.map(cerveza => {
        return {
            "nombre": cerveza.name,
            "alcohol": cerveza.abv,
            "amargor": cerveza.ibu
        }
    })
    return arrayFinal
}

// console.log(filtroEtilico(arrayCervezas, 5))


/*2- Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas más alcohólicas*/

const copiaArray = arrayCervezas.map(cerveza => cerveza)
const masAlcoholicas = array => { return array.sort((a,b) => b.abv - a.abv).slice(0, 10) }

// console.log(masAlcoholicas(copiaArray))


/*3- Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas menos amargas*/

const copiaArray2 = arrayCervezas.map(cerveza => cerveza)
const menosAmrgas = (array) => { return array.sort((a,b) => a.ibu - b.ibu).slice(0, 10)}

// console.log(menosAmrgas(copiaArray2))


/*4- Generar una función que reciba como parámetro un array de cervezas, un nombre de propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento, de manera ascendente si el tercero es true o descendente si es false*/

const copiaArray3 = arrayCervezas.map(cerveza => cerveza)
const cervezasOrdenadas = (array, nPropiedad, boolean) => {
    if (boolean) {
        array.sort((a,b) => a[nPropiedad] - b[nPropiedad])
    } else {
        array.sort((a,b) => b[nPropiedad] - a[nPropiedad])
    }
    return array.slice(0, 10)
}

// console.log(cervezasOrdenadas(copiaArray3, 'abv', false))


/*5- Generar una función que reciba como parámetro un array de cervezas y un id. La función debe renderizar (renderear, dibujar, pintar, llenar, etc) en un archivo html una tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del array. Cada fila debe tener los datos que se piden de cada una de las cervezas.*/

const dataTable = (array, id) => {
    let data = array.reduce((acu, act) => {
        return acu + `<tr>
                        <td>${act.name}</td>
                        <td>${act.abv}</td>
                        <td>${act.ibu}</td>
                      </tr>`
    }, '')
    let contenedor = document.getElementById(id)
    contenedor.innerHTML = data
}

dataTable(arrayCervezas, 'tbody')