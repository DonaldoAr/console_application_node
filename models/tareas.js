require('colors');
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

    cargarTareasFromArray( tareas = [] ){
        tareas.forEach(tarea => {
            this._listado[tareas.id] = tarea;
        })
    }

    crearTarea(desc = ''){ // Description
        const tarea = new Tarea(desc); 
        this._listado[ tarea.id ] = tarea;
    }

    listadoCompleto2(){ // This is my solution
        let a = 0;
        Object.keys(this._listado).forEach( key =>{
            a = a + 1; 
            let comp = [this._listado[key].completadoEn, this._listado[key].desc];
            ( comp[0] )? 
                console.log(a + '.- ' +  comp[1] + ' :: ' + 'Completada'.green) : 
                    console.log(a + '.- ' +  comp[1] + ' :: ' + 'Pendiente'.red);
        });
    }

    listadoCompleto(){
        console.log();
        this.listadoArr.forEach((tarea, i)=>{
            const idx = `${i + 1}`.green;
            const {desc, completadoEn} = tarea;
            const estado = ( completadoEn )? 'Completada'.green : 'Pendiente'.red;
            console.log(`${ idx }.- ${desc} :: ${estado}` )

        })
    }
}

module.exports = {
    Tareas
}