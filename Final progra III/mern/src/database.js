const mongoose = require('mongoose');

//usamos una constante por si lo queremos cambiar
const URI = 'mongodb://localhost/mern-tasks'

mongoose.connect(URI)
    .then(db => console.log('db conectada')) //si se conecta bien
    .catch(err => console.error(err)); //capturo error

module.exports = mongoose;