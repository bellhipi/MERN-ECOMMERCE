import alumnos from './data/alumnos.json'
import Alumno  from './components/Alumno'
function App() {

    return(
        <>
            <h1>Hola Clase de Programación III</h1>
            <h2>Aca deberiamos poner otras cosas</h2>
            <div>
                <p>"Legajo del primer alumno:" + {alumnos[0].legajo}</p>
                <p>"Legajo del primer alumno:" + {alumnos[1].legajo}</p>
                {console.log(alumnos.map(alu => alu.legajo))}
                {alumnos.map(alu => <p>"Legajo del primer alumno:" + {alu[0].legajo}</p>)}
                {alumnos.map(alu => <p>{`Legajo ${alu.legajo}, Nombre: ${alu.nombre}`}</p>)}
                {alumnos.map(alu => <Alumno legajo={alu.legajo}/>)}
                {alumnos.map(alu => <Alumno {...alu}/>)}
            </div>
            <div>
                {"Cantidad: " + alumnos.length }
            </div>
        </>
    )
}

export default App