/*

✅ Hecho por: Santiago Sanchez Hernandez
📅 Fecha: 25/02/25
🐈 Github: garbanzo12


📌 Tema: Métodos de Arrays (map, filter, reduce)
🔹 Instrucciones:

Crea un array de productos con nombre, precio y categoria.
Usa map() para obtener un array con solo los nombres de los productos.
Usa filter() para obtener solo los productos de una categoría específica.
Usa reduce() para calcular el precio total de los productos.
*/
//⬇️ Limpio la consola
console.clear();
 const Manzana = {
    nombre: 'Manzana',
    precio: 1000,
    categoria: 'Frutas'
}
 const Pez = {
    nombre: 'Pez',
    precio: 2000,
    categoria: 'Marisco'
}
 const Salchichas = {
    nombre: 'Salchichas',
    precio: 3000,
    categoria: 'Enlatado'
}

var Productos =  [Manzana,Pez,Salchichas];
    



console.log('✅Metodo map(), se usa para obtener un array con solo los nombres de los productos')
console.log( Productos.map((nombre) => nombre.nombre));
console.log('✅Metodo filter(), se usa para obtener solo los productos de una categoría específica(Enlatado en este caso).')
console.log( Productos.filter((categoria) =>  categoria.categoria === 'Enlatado'))
console.log('✅Metodo reduce(), se usa para calcular el precio total de los productos.')
console.log(Productos.reduce((total,precio) =>  total += precio.precio ,0))


