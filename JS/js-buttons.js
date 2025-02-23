/*
✅ Hecho por: Santiago Sanchez Hernandez
📅 Fecha: 22/02/25
🐙 Github: garbanzo12
*/


async function seleccionarScript(archivo) {
    try {
    const modulo = await import(`../JS/${archivo}`);

    } catch (error) {
    console.error(`Error cargando ${archivo}:`, error);
    }
    
}

