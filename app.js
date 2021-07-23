require('colors');
const { inquirerMenu } = require('./helpers/inquirer');


//const { mostrarMenu, pause } = require('./helpers/mensajes');



console.clear();
const main = async() =>{
    let opt = '';

    do{
        //opt = await mostrarMenu();
        opt = await inquirerMenu();
        console.log( { opt } );
        //if( opt !== '0') await pause();
    }while(opt !== '0');
}

main();