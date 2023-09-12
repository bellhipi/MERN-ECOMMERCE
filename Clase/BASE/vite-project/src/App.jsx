import { useEffect } from 'react'
import { useState } from 'react'
import Alumno from './components/Alumno'
import alumnosDatos from './data/alumnos.json'

function App() {
  const [alumnos, setAlumnos] = useState(alumnosDatos)
  

  useEffect(() => {
    const timer = setTimeout () => {
    setAlumnos(alumnosDatos)
  }, 5000)
    return () => clearTimeout (timer)
  }, [])

  const OnFilterClicked = () => {
    if (alumnos.length == alumnosDatos.length) {
      const alus = alumnosDatos.filter(a => a.legajo > 150000)
      setAlumnos(alus)
    }else{
      setAlumnos(alumnosDatos)
    }
    
  }

  return (
    <>
      <h1>Hola Clase de Programación III</h1>
      <h2>Aca deberiamos poner otras cosas</h2>
      {alumnos.length == 0 ? <p>Cargando...</p>, 
      <div>
        <button onClick={filtrarLista}>{alumnos.length == alumnosDatos.length ? 'Filtrar' : 'Quitar filtros'}{' '}mayores a 150k</button>
        {alumnos.map(alu => (
          <Alumno key={alu.legajo} {...alu} />
        ))}
      </div>}

      <div>
        {"Cantidad: " + alumnos.length}
      </div>
    </>
  )
}

export default App