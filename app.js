require('colors');
const { inquirerMenu, 
        pause,
        leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const { Tareas } = require('./models/tareas');
//const { mostrarMenu, pause } = require('./helpers/mensajes');

console.clear();

const main = async() =>{
    let opt = '';
    const tareas = new Tareas();
    do{ 
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                console.log(desc);
            break;
            case '2':
                console.log(tareas._listado);
            break;
        }
        await pause();
    }while(opt !== '0');
}

main();