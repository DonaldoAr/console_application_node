// A program in how we can save a move data
const fs = require('fs');

const archivo = './db/data.json'; // This is a path our file

const guardarDB = (data)=>{
    data = JSON.stringify(data); // We change object to string
    fs.writeFileSync(archivo, data);
}
const leerdb = () =>{
    if(!fs.existsSync(archivo)){
      return null;  
    }
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' }); // Here it's a string 
    const data = JSON.parse( info ); // Here it's a object
    // console.log(data);
    return data;
}

module.exports = {
    guardarDB,
    leerdb
}
