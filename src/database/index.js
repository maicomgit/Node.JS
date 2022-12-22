const mongoose = require('mongoose');
function connect(){

     const mongoose = require('mongoose');
     mongoose.set('strictQuery', true);
     mongoose.connect('mongodb://localhost:27017/projeto-crud')
     const db = mongoose.connection
     db.once('open',()=>{
          console.log('conectado ao banco')
     })
     db.on('error',console.error.bind(("Erro ao conectar")));
}

module.exports = {
     connect
}