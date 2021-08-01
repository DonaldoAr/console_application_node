const Tarea = require("./tarea");

class Tareas{
    _listado = {}; // A property
    
    // implement a getter for how see a list 
    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach( key =>{
            const tarea = this._listado[ key ];
            listado.push( tarea );
        })

        return listado;
    }

    constructor(){
        this._listado = {}
    }

    crearTarea(desc = ''){ // Description
        const tarea = new Tarea(desc); 
        this._listado[ tarea.id ] = tarea;
    }
}

module.exports = {
    Tareas
}