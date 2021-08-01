const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: '¿Que desea hacer?',
        //choices: ['opt1', 'opt2', 'opt3']
        choices: [
            {
                value: '1',
                name: '1'.red+'. Crear tarea'
            },
            {
                value: '2',
                name: '2'.red+'. Listar tareas'
            },
            {
                value: '3',
                name: '3'.red+'. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4'.red+'. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5'.red+'. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6'.red+'. Borrar tarea'
            },
            {
                value: '0',
                name: '0'.red+'. Salir'
            },
        ]
    }
]

const inquirerMenu = async()=>{
    console.clear();
    console.log('======================================='.red);
    console.log(' Seleccione una opción '.white);
    console.log('======================================='.red);

    const { option } = await inquirer.prompt(menuOpts);

    return option;
}

const pause = async () =>{
    const press_intro = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${"Enter".green} to continue...`,
        }
    ]
    //console.clear();
    console.log('\n')
    const { input } = await inquirer.prompt(press_intro);
    return input;
}

const leerInput = async( message )=>{
    const question =[
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){ // We should write the data
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    
    const { desc } = await inquirer.prompt(question);
    return desc;
}

module.exports={
    inquirerMenu,
    pause,
    leerInput,
}