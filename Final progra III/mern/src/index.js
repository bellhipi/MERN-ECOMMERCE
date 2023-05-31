 const express = require('express');
 const morgan = require('morgan');
 const path = require('path');

 const { mongoose } = require ('./database');
 const app = express(); // servidor

 //Settings
 // pedios que tome el puerto del sistema operativo
 // cuando conecte con un servició de la nube tomará el puerto que me de ese servicio
 // o cuando estoy local que agarre el puerto 3000
 app.set('port', process.env.PORT || 3000)

 //Middlewares
app.use(morgan('dev')); 
app.use(express.json()); //comprueba si es un formato json

 //Routes
app.use('/api/tasks', require('./routes/tasks.routes')); //llamo al archivo
 // agrego el prefico /api/tasks en el url

 //Static files
 //aca queremos lograr que en la url inicial se vea index.html
//console.log(__dirname + '/public') //dirname me muestra toda la ruta hasta src
//console.log(path.join(__dirname, 'public')); //esto sirve para concatenar las direcciones sin problemas de / \
 app.use(express.static(path.join(__dirname, 'public')))

 //Ststing the server
 // inicializa el servidor y le pedimos que la funcion  nos muestre el mnsj
 //tomamos el valor seteado en el setting
 app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`); //comilla de mierda ` para concatenar texto + var
 });