import React, {useState, useEffect } from 'react'
import Formulario from './components/Formulario.js'
import Cita from './components/Cita.js'

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // State de arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales)

  // actualiza cada rendderizado
  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas')); 
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas] )

  // Mostrar cita creada
  function crearCita(cita){
    guardarCitas([ ...citas, cita ]);
  }

  // Funcion elimina cita (id)
  const eliminarCita = id => {
    const updateCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(updateCitas);
  }

  return (
    <React.Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          
          <div className="col">
            <h2>
              {citas.length === 0 
                ? "No hay citas"
                : "Administra tus citas"
                }
              </h2>
              {citas.map(cita=>(
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                  />
                  ))}
            </div>
          </div>
        </div>
        </React.Fragment>
        );
}

export default App;
