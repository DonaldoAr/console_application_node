const { v4: uuidv4 } = require('uuid');

class Tarea{
    id = '';
    desc = '';
    completadoEn = null;
    
    constructor( desc ){    // desc: Description
        this.id = uuidv4();
        this.desc = desc;
    }
}

module.exports = Tarea;