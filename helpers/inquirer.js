const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: '¿Que desea hacer?',
        choices: ['opt1', 'opt2', 'opt3']
    }
]

const inquirerMenu = async()=>{
    //console.clear();
    console.log('======================================='.red);
    console.log(' Seleccione una opción '.red);
    console.log('======================================='.red);

    const opt = await inquirer.prompt(menuOpts);

    return opt;
}

module.exports={
    inquirerMenu
}