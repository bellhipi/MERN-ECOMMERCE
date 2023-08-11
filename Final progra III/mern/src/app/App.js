import React, { Component } from 'react'; //importo el componenete

class App extends Component{

    constructor(){
        //hereda
        super();
        //creo dos estados uno para el titulo y una descripcion
        this.state = {
            //en principio los datos están en blanco
            title: '',
            description: ''
        };
        //Vinculo los métodos 
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //evento del formulario
    addTask(e){
        //console.log("adding task");
        //console.log(this.state);
        fetch('/api/tasks', {
            //a traves de este metodo envío la petición
            method: 'POST',
            //stringify es para convertir a string
            body: JSON.stringify(this.state),
            //objeto con el tipo de contenido que le voy a enviar
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            //muestro por consola lo que retorna
            //.then(res => console.log(res))
            //combierto la respuesta en formato json y lo muestro por consola
            .then(res => console.log(res.json))
            .then(data => console.log(data))
            //captura el error y muestra por consola
            .catch(err => console.error(err));
        //esto evita que la página refreshee cuando apreto el send
        e.preventDefault();
    }

    //evento para capturar los datos
    handleChange(e){
        //console.log(e.target.value);
        //console.log(e.target.name);
        //estructura de js
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    //utilizo el metodo render
    render() {
        return(
            <div>
                {/* Navegación */}
                {/* esto me determina el color de la navegación */}
                <nav className="light-blue darken-4">
                    {/* esto centra el contenido de la navegación */}
                    <div className="container">
                        <a className="brand-logo" href="/">MERN Strack</a>
                    </div>
                </nav>

                {/* Tabla */}
                <div className="container">
                    {/* Filas */}
                    <div className="row">
                        {/* Columnas */}
                        <div className="col s5">
                            {/* Creo una tarjeta (un cuadraro en blanco) */}
                            <div className="card">
                                <div className="card-content">
                                    {/* Formulario (para poder enviar los datos al servidor) */}
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            {/* Estilo del imput */}
                                            <div className="input-field col s12">
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="Task Title"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {/* Estilo del imput */}
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} placeholder="Task Description" className="materialize"></textarea>
                                            </div>
                                        </div>
                                        {/* Boton tipo submit para que dispare el evento del formulario */}
                                        <button type="submit" className="btn light-blue darken-4">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default App; //exporto el componente