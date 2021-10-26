import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = (props) => {

	// State para las citas
	const [cita, setCita] = useState({
		mascota: "",
		propietario: "",
		fecha: "",
		hora: "",
		desc: ""
	});
	// State para error
	const [error, setError] = useState(false)

	// Funcion que se ejucuta por escribir
	const actualizar = e => {
		setCita({
			...cita,
			[e.target.name]: e.target.value
		})
	};

	// Extrae valores
	// Desestructurando
	const { mascota, propietario, fecha, hora, desc } = cita;

	// Funcion submit
	function submitCita(e) {
		// Prevenir comportamiento normal
		e.preventDefault();

		// Validar
		if (mascota.trim() === '' || propietario.trim() === ''||
			fecha.trim() === '' || hora.trim() === '' || desc.trim() === '') {
			setError(true);
			return;
		}
		setError(false);

		// Asignar ID
		cita.id = uuidv4();

		// Crear la cita
		props.crearCita(cita);
		// Reiniciar Form
		setCita({
			mascota: "",
			propietario: "",
			fecha: "",
			hora: "",
			desc: ""
		})	
	}

	return (
		<React.Fragment>
		<h2>Creat cita</h2>

		{ error ? <p className="text-danger mark fw-bold">Todos los campos son obligatorios </p> : null }

		<form 
		onSubmit={submitCita}
		>
		<div 
		className="mb-3"
		>
		<label 
		className="form-label"
		htmlFor="mascota"
		>
		Nombre Mascota</label>
		<input
		id="mascota"
		name="mascota"
		type="text"
		className="form-control"
		placeholder="peluche"
		value={mascota}
		onChange={actualizar}
		/>
		</div>
		<div 
		className="mb-3"
		>
		<label 
		className="form-label"
		htmlFor="propietario"
		>
		Nombre propietario</label>
		<input
		id="propietario"
		name="propietario"
		type="text"
		className="form-control"
		placeholder="dueño de peluche"
		value={propietario}
		onChange={actualizar}
		/>
		</div>
		<div 
		className="mb-3"
		>
		<label 
		className="form-label"
		htmlFor="fecha"
		>
		Fecha</label>
		<input
		id="fecha"
		name="fecha"
		type="date"
		className="form-control"
		value={fecha}
		onChange={actualizar}
		/>
		</div>
		<div 
		className="mb-3"
		>
		<label 
		className="form-label"
		htmlFor="hora"
		>
		Hora</label>
		<input
		id="hora"
		name="hora"
		type="time"
		className="form-control"
		value={hora}
		onChange={actualizar}
		/>
		</div>

		<label
		className="form-label"
		htmlFor="desc"

		>Descripción	
		</label>
		<textarea 
		className="form-control"
		id="desc"
		name="desc"
		rows="3"
		value={desc}
		onChange={actualizar}

		>
		</textarea>

		<button
		type="submit" 
		className="btn btn-primary mb-3 w-100 mt-1"
		>Submit
		</button>
		</form>

		</React.Fragment>

		)};

Formulario.propTypes = {
	crearCita: PropTypes.func.isRequired
}

export default Formulario;