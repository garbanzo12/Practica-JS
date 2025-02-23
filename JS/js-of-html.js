/*
✅ Hecho por: Santiago Sanchez Hernandez
📅 Fecha: 22/02/25
🐙 Github: garbanzo12
*/
const buttons = document.querySelectorAll(".hover-btn");
const text_of_botton = document.getElementById("text_of_botton");

buttons.forEach(button => {
    button.addEventListener("mouseover", (event) => {
        text_of_botton.textContent = event.target.dataset.info; //⬅️Lo que hago aqui es tomar la informacion de data-info del boton actual por medio de dataset.info
        text_of_botton.style.display = "block"; //⬅️ Aqui cambio el style a block
        text_of_botton.style.top = `${10}%`;
        text_of_botton.style.left = `${5}%`;
        /*
        ✅offsetTop: Obtiene la posición vertical (Y) del botón.
        ✅offsetHeight: Obtiene la altura del botón.
        ✅offsetLeft: Obtiene la posición horizontal (X) del botón.
        ✅Esto posiciona el tooltip debajo del botón, alineado con su borde izquierdo.
        */

    });
    //⬇️Esta arrow function es para detectar cuando el mouse sale del boton
    button.addEventListener("mouseout", () => {
        text_of_botton.style.display = "none";
    });
    
});
