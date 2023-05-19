 const express = require('express');
 const app = express(); // servidor

 //Settings
 // pedios que tome el puerto del sistema operativo
 // cuando conecte con un servició de la nube tomará el puerto que me de ese servicio
 // o cuando estoy local que agarre el puerto 3000
 app.set('port', process.env.PORT || 3000)

 //Midddlewares

 //Routes
 
 //Static files

 //Ststing the server
 // inicializa el servidor y le pedimos que la funcion  nos muestre el mnsj
 //tomamos el valor seteado en el setting
 app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`); //comilla de mierda ` para concatenar texto + var
 });