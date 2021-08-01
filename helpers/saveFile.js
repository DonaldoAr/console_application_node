// A program in how we can save a move data
const fs = require('fs');

const guardarDB = (data)=>{
    const archivo = './db/data.json';
    data = JSON.stringify(data); // We change object to string
    fs.writeFileSync(archivo, data);
}

module.exports = {
    guardarDB
}