import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
	return(
		<React.Fragment>
			<div 
				className="cita"
			>
			<p>Mascota: <span>{cita.mascota}</span></p>
			<p>Dueño: <span>{cita.propietario}</span></p>
			<p>Fecha: <span>{cita.fecha}</span></p>
			<p>Hora: <span>{cita.hora}</span></p>
			<p>Descripción: <span>{cita.desc}</span></p>
				
			<button
				className="btn btn-danger w-100"
				onClick={ () => eliminarCita(cita.id) }
			>Eliminar &times;
			</button>
			</div>


		</React.Fragment>
	)
}


Cita.propTypes = {
	cita: PropTypes.object.isRequired,
	eliminarCita: PropTypes.func.isRequired
}

export default Cita;