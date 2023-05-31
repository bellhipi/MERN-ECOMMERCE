const express = require('express');
const router = express.Router();

//guardo mi modelo de bd en la constante Task
//con Task voy a poder hacer consultas a la bd
const Task = require('../models/task');

//aca defino mi rsapi
router.get('/', (req, res) => { //cuando llegue una peticion
    //consulto a la bd
    //el find busca los documentos (puedo obtener los errores, o los documentos)
    //en el tutorial era así:
    //Task.find(function (err, tasks){
    //pero me dio err
    Task.find().then(function (err, tasks){
        //muestro las tareas que tengo
        console.log(tasks);
    });
    //res.send('Holis'); //respondo con holis
    res.json({  //en lugar de texto paso un json
        status: 'API Works!'
        //en la pag obtenemos esto {"status":"API Works!"}
        //que es un objeto de javascript
    });
});

module.exports = router;