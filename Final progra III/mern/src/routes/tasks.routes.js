const express = require('express');
const router = express.Router();

//guardo mi modelo de bd en la constante Task
//con Task voy a poder hacer consultas a la bd
const Task = require('../models/task');

//aca defino mi rsapi
//async es para la forma asincronica
router.get('/', async (req, res) => { //cuando llegue una peticion
    //consulto a la bd
    //await indico que me va a tomar tiempo
    //cuando termine la consulta guardo los datos en tasks
    const tasks = await Task.find();
    //console.log(tasks);
    //este console.log es lo que me devuelve el arreglo vacío []
    res.json(tasks);
});

//este get es para obtener un solo elemento de la consulta segun el id
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

//esto nos permite agregar datos
router.post('/', async (req, res) => {
    //recibo los datos que me envia el navegador
    //gracias al modulo que lee formato json usamos body
    //console.log(req.body);
    const { title, description } = req.body;
    //escribo en una sola linea para evitar redundancia
    //title: title,
    //description: description
    //esto indica que en titulo guardo el titulo del cliente
    const task = new Task({ title, description });
    //console.log(task);
    //guardo un dato en la bd
    await task.save();
    res.json({ status: 'Tarea guardada' });
});

//este metodo es para actualizar segun el id
router.put('/:id', async (req, res) => {
    //obtengo el titulo y la descripción del cliente
    const { title, description } = req.body;
    //creo una tarea con estos datos
    const newTask = { title, description };
    await Task.findByIdAndUpdate(req.params.id, newTask);
    //console.log(req .params.id);
    res.json({ status: 'Tarea actualizada' });
});

//este metodo es para eliminar
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({ status: 'Tarea eliminada' });
});

module.exports = router;