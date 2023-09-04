const mongoose = require('mongoose');
const { Schema } = mongoose;
//mongoose.connect()

//defino el esquema de una tarea
// campo, tipo de dato, required (si es obligatorio)
//como lo guardo en una constante despues lo puedo reutilizar
const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

//exporto el modelo de la base de datos
module.exports = mongoose.model('Task', TaskSchema);