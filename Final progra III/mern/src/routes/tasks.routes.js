const express = require('express');
const router = express.Router();

//aca defino mi rsapi
router.get('/', (req, res) => { //cuando llegue una peticion
    //res.send('Holis'); //respondo con holis
    res.json({  //en lugar de texto paso un json
        status: 'API Works!'
        //en la pag obtenemos esto {"status":"API Works!"}
        //que es un objeto de javascript
    });
});

module.exports = router;