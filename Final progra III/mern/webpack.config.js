//para que webpack lea la configuracion
//se encargará de convertir un archivo
module.exports ={
    //entry es la entrada es decir el archivo que va a convertir
    entry: './src/app/index.js',
    //output es la salida qque es el código convertido
    output: {
        path: __dirname + '/srcpublic',
        filename: 'bundle.j s'
    }
};