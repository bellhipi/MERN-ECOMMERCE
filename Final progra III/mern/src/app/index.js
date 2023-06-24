//alert ('react va acá');

//Importo los módulos de react
import React, { Component } from 'react'; //importo el componenete
//import ReactDOM from 'react-dom'; en lugar de llamar a ReactDom
import { render } from 'react-dom'; //importo render directamente
//esta facilidad se llama restrucsturing y se puede hacer gracias a las nuevas versiones de js

class App extends Component{
    //utilizo el metodo render
    render() {
        return(
            <h1>Holita</h1>
        )
    }
}

//voy a renderizar este componente
//es decir que voy a montar el h1 Holita en donde está el id app
render (<App/>,document.getElementById('app'))