require('colors');
const { inquirerMenu, 
        pause,
        leerInput } = require('./helpers/inquirer');
const { guardarDB, leerdb } = require('./helpers/saveFile');        
const Tarea = require('./models/tarea');
const { Tareas } = require('./models/tareas');
//const { mostrarMenu, pause } = require('./helpers/mensajes');

console.clear();
const main = async() =>{
    let opt = '';
    const tareas = new Tareas();
    // Here we can read ur task 
    const tareasDB = leerdb();
    if( tareasDB ){
        // set the tasks
        tareas.cargarTareasFromArray(tareasDB);
    }
    //await pause();
    do{ 
        // Show a menu 
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: '); // Ask a message
                //console.log(desc);
                tareas.crearTarea( desc );
                break;
            case '2':
                //console.log(tareas.listadoArr);
                tareas.listadoCompleto();
                break;
            case '3':
                console.log('Pendientes');
                break;
        }
        // Save a database
        guardarDB(tareas.listadoArr)
        await pause();
    }while(opt !== '0');
}
main();