/*

✅ Hecho por: Santiago Sanchez Hernandez
📅 Fecha: 22/02/25
🐈 Github: garbanzo12

📌 Tema: Clases y Prototipos (class, constructor, prototype)
🔹 Instrucciones:

Crea una clase Animal con propiedades nombre y edad, y un método emitirSonido().
Crea una subclase Perro que herede de Animal y sobrescriba el método emitirSonido() para que diga "Guau!".
Crea una instancia de Perro y llama al método emitirSonido().
*/

//⬇️ Limpio la consola
console.clear();
//↘️✅Creé una clase Animal 
class Animal{
    constructor(nombre,edad){ //✅Propiedades nombre y edad
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido(){//✅Un método emitirSonido().
        return '...';
    }
    }

//↘️✅Creé una subclase Perro que herede de Animal
class Perro extends Animal{
    constructor(nombre,edad){
        super(nombre,edad);   
    }
    emitirSonido(){//✅Sobrescriba el método emitirSonido() para que diga "Guau!".
        return 'Guau!';
    }
}

const chiguagua = new Perro('Milu',6); //✅Creé una instancia de Perro 
console.log(chiguagua);
console.log(chiguagua.nombre+' hace '+chiguagua.emitirSonido())//✅Llamé al método emitirSonido().