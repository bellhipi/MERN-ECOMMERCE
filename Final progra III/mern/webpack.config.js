//para que webpack lea la configuracion
//se encargará de convertir un archivo
module.exports ={
    //entry es la entrada es decir el archivo que va a convertir
    entry: './src/app/index.js',
    //output es la salida qque es el código convertido
    output: {
        //_dirname es una constante de node
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    //module es un objeto que tiene rules que es un arreglo formado por multiples objetos
    //cada objeto es una configuración adicional a webpack
    module: {
        rules: [
            {
                //le pido que use babel loader (el modulo que instale)
                use: 'babel-loader',
                //le pido que teste todos los archivos que terminen .js
                //  /\.js$/ esto es una expresión regular
                test: /\.js$/,
                //pero no quiero que tome los archivos que están en node_modules
                exclude: /node_modules/
            }
        ]
    }
};