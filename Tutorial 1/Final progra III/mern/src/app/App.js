import React, { Component } from 'react'; //importo el componenete

class App extends Component {

    constructor() {
        //hereda
        super();
        //creo dos estados uno para el titulo y una descripcion
        this.state = {
            //en principio los datos están en blanco
            title: '',
            description: '',
            tasks: [],
            _id: ''
        };
        //Vinculo los métodos 
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //evento del formulario
    addTask(e) {
        //si existe el id actualizo, sino agrego
        if (this.state._id) {
            fetch(`/api/tasks/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Tarea actualizada'});
                this.setState({title: '', description: '', _id: ''});
                this.fetchTasks();
            });
        } else {
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
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    //muestro un mensaje
                    M.toast({ html: 'Tarea guardada' });
                    //limpiamos y volvemos a poner en blanco el titulo y la desc
                    this.setState({ title: '', description: '' });
                    //pide las tareas desde el servidor para actualizar la aplicación
                    this.fetchTasks();
                })
                //captura el error y muestra por consola
                .catch(err => console.error(err));
        }
        //esto evita que la página refreshee cuando apreto el send
        e.preventDefault();
    }

    //cuando la aplicación cargue se ejecutará este método
    componentDidMount() {
        //console.log('componente fue montado')
        this.fetchTasks();
    }

    //metodo para obtener tareas
    fetchTasks() {
        //consulta al servidor de tipo get
        //no es necesario agregar una configuración ya que por ser un fetch por defecto hace un get
        fetch('/api/tasks')
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                this.setState({ tasks: data });
                console.log(this.state.tasks);
            });
    }

    //evento para eliminar
    deleteTask(id) {
        //esto es para confirmar si quiero eliminarlo
        if (confirm('¿Estas seguro que deseas eliminarlo?')) {
            //console.log('deleting: ', id);
            //fetch('/api/tasks/' + id)
            //nueva forma de concatenar en java script
            fetch(`/api/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    M.toast({ html: 'Tarea Eliminada' });
                    this.fetchTasks();
                });
        }
    }

    //evento para editar
    editTask(id) {
        fetch(`/api/tasks/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    title: data.title,
                    description: data.description,
                    _id: data._id
                })
            })
    }

    //evento para capturar los datos
    handleChange(e) {
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
        return (
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
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="Task Title" value={this.state.title} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            {/* Estilo del imput */}
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} placeholder="Task Description" className="materialize-textarea" value={this.state.description}></textarea>
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
                            {/* Tabla */}
                            <table>
                                {/* Encabezado de la tabla */}
                                <thead>
                                    {/* Una fila */}
                                    <tr>
                                        {/* Múltiples cabeceras */}
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                {/* Cuerpo de la tabla */}
                                <tbody>
                                    {/* Código en Java Script */}
                                    {
                                        //quiero recorrer las tareas
                                        this.state.tasks.map(task => {
                                            //por cada tarea por la que paso retorno
                                            return (
                                                //una fila de la tabla
                                                <tr key={task._id}>
                                                    {/*por cada fila creamos un elemento que utiliza la tarea que estoy recorriendo*/}
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        {/*agrego dos botones aunque podrían ser enlaces..*/}
                                                        <button className="btn light-blue darken-4" onClick={() => this.editTask(task._id)}>
                                                            {/*uso un elemento i para crear un icono*/}
                                                            <i className="material-icons">edit</i>
                                                        </button>
                                                        <button className="btn light-blue darken-4" style={{ margin: '4px' }} onClick={() => this.deleteTask(task._id)}>
                                                            <i className="material-icons">delete</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default App; //exporto el componente