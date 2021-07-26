require('colors');
const { inquirerMenu, pause } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const { Tareas } = require('./models/tareas');
//const { mostrarMenu, pause } = require('./helpers/mensajes');

console.clear();

const main = async() =>{

    let opt = '';

    do{ 
        //opt = await inquirerMenu();
        //console.log( { opt } );

        //const tarea = new Tarea('Comprar comida');
        //console.log(tarea);

        const tareas = new Tareas();
        const tarea = new Tarea('Comprar comida');
        
        

        tareas._listado[tarea.id] = tarea;
        console.log(tareas);

        await pause();
    }while(opt !== '0');
}

main();