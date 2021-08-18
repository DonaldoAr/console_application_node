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

    borrarTarea( id = ''){
        if( this._listado[id] ){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray( tareas = [] ){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
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

    listarPendientesCompletadas1( completadas = true){
        console.log();

        let comple = this.listadoArr.filter(comp => comp.completadoEn === null);
        let no_comple = this.listadoArr.filter(comp => comp.completadoEn != null);

        const dato = (completadas) ? comple : no_comple;
        dato.forEach((tarea, i)=>{
            const idx = `${i + 1}`.green;
            const {desc, completadoEn} = tarea;
            console.log(`${ idx }.- ${desc.red}`);
        });        
    }

    listarPendientesCompletadas( completadas = true){
        console.log();
        let contador = 0;
        this.listadoArr.forEach((tarea, i)=>{
        
            const {desc, completadoEn} = tarea;

            const estado = ( completadoEn )? 'Completada'.green : 'Pendiente'.red;
            if( completadas ){
                // Show the task completed
                if( completadoEn ){
                    contador += 1;
                    console.log(`${ contador + '.' } ${desc} :: ${completadoEn}` )
                }
            } else{
                // to Show a no complete task
                if( !completadoEn ){
                    contador += 1;
                    console.log(`${ contador + '.'} ${desc} :: ${estado}` )
                }
            }
        });
    }

    toggleCompletadas( ids = []){
        ids.forEach( id => {
            const tarea = this._listado[id];
            if( !tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
                
            }
        });

        this.listadoArr.forEach( tarea =>{ 
            if( !ids.includes(tarea.id) ){
                //const tarea = this._listado[tarea.id];
                //tarea.completadoEn = null;
                this._listado[tarea.id].completadoEn = null;
            }

        });
    }

}

module.exports = {
    Tareas
}