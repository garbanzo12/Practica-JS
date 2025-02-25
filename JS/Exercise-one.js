/*

✅ Hecho por: Santiago Sanchez Hernandez
📅 Fecha: 22/02/25
🐈 Github: garbanzo12


📌 Tema: Objetos en JavaScript (object, métodos de objeto)
🔹 Instrucciones:

Crea un objeto Coche con las propiedades marca, modelo, año y un método describir() que devuelva una cadena con la información del coche.
Crea un array con al menos 3 coches y usa forEach() para imprimir la descripción de cada uno.


*/


//function describir creada ✅
function describir(marca,modelo,year){
    this.marca = marca
    this.modelo = modelo
    this.year = year
    console.log('Marca = '+marca+' Modelo = '+modelo,' Año = '+year)
}

//objeto Coche creado ✅
const Coche = new describir('Chevrolet','Aveo','2009')


const Coche1 = {
    marca : 'bmw',
    year : '2012'
    
}
const Coche2 = {
    marca : 'Toyota',
        year : '2022'
}

const Coche3 = {
    marca : 'Mazda',
        year : '2024'
}

var lista_coches = [Coche1,Coche2,Coche3]
lista_coches.forEach(element => {
    console.log(element)
});
