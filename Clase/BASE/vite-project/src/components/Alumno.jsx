function Alumno(props){
    return (
    <p>
        Legajo {props.legajo}, Nombre: {props.nombre}, 
        {(props.condicion  == 'Inscripto' && 'Mail: ' + props.mail)}
    </p>
    )

}
export default Alumno