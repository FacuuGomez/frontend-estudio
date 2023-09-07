import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

export default function Login() {
	const [singIn, setSingIn] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();

		if (e.target.name === 'singIn') {
			setSingIn(true);
		} else if (e.target.name === 'logIn') {
			setSingIn(false);
		}
	};

	return (
		<div className='container_login'>
			<div className='cover_login'>
				<div className='box img_box'>
					<img
						src='../../../assets/logo-final-dark.png'
						alt='estudio-juridico'
					/>
				</div>

				<div className='box info_box'>
					{singIn ? (
						<form className='login_form'>
							<h2>Registrarse</h2>

							<div className='input_box'>
								<input type='text' />
								<label htmlFor='username'>Nombre y apellido</label>
							</div>

							<div className='input_box'>
								<input type='text' />
								<label htmlFor='email'>Email</label>
							</div>

							<div className='input_box'>
								<input type='password' />
								<label htmlFor='password'>Contraseña</label>
							</div>

							<button type='submit'>Registrarse</button>

							<p>
								¿Ya tienes cuenta?{' '}
								<a href='' name='logIn' onClick={(e) => handleClick(e)}>
									Iniciar
								</a>
							</p>
						</form>
					) : (
						<form className='login_form'>
							<h2>Iniciar sesión</h2>

							<div className='input_box'>
								<input type='text' />
								<label htmlFor='email'>Email</label>
							</div>

							<div className='input_box'>
								<input type='password' />
								<label htmlFor='password'>Contraseña</label>
							</div>

							<button type='submit'>Iniciar</button>

							<p>
								¿No tienes cuenta?{' '}
								<a href='' name='singIn' onClick={(e) => handleClick(e)}>
									Registrarse
								</a>
							</p>
						</form>
					)}
				</div>
			</div>
		</div>
	);
}
