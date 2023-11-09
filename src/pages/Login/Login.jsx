import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo_dark from '../../../assets/logo-final-dark.png';

import './Login.css';

export default function Login() {
	const [signUp, setSignUp] = useState(false);
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleSubmit = (e) => {};

	const handleClick = (e) => {
		e.preventDefault();

		setUser({
			username: '',
			email: '',
			password: '',
		});

		if (e.target.name === 'signUp') {
			setSignUp(true);
		} else if (e.target.name === 'signIn') {
			setSignUp(false);
		}
	};

	return (
		<div className='container_login'>
			<div className='cover_login'>
				<div className='box img_box'>
					<Link to='/'>
						<img src={logo_dark} alt='estudio-juridico' />
					</Link>
				</div>

				<div className='box info_box'>
					{signUp ? (
						<form className={`login_form ${signUp ? 'active' : ''}`}>
							<h2>Registrarse</h2>

							<div className='input_box'>
								<input
									type='text'
									name='username'
									value={user.username}
									onChange={(e) => {
										handleChange(e);
									}}
									required
								/>
								<label htmlFor='username'>Nombre y apellido</label>
							</div>

							<div className='input_box'>
								<input
									type='text'
									name='email'
									value={user.email}
									onChange={(e) => {
										handleChange(e);
									}}
									required
								/>
								<label htmlFor='email'>Email</label>
							</div>

							<div className='input_box'>
								<input
									type='password'
									name='password'
									value={user.password}
									onChange={(e) => {
										handleChange(e);
									}}
									required
								/>
								<label htmlFor='password'>Contraseña</label>
							</div>

							<button
								type='submit'
								onSubmit={(e) => {
									handleSubmit(e);
								}}
							>
								Registrarse
							</button>

							<p>
								¿Ya tienes cuenta?{' '}
								<a href='' name='signIn' onClick={(e) => handleClick(e)}>
									Iniciar
								</a>
							</p>
						</form>
					) : (
						<form className='login_form'>
							<h2>Iniciar sesión</h2>

							<div className='input_box'>
								<input
									type='text'
									name='email'
									value={user.email}
									onChange={(e) => {
										handleChange(e);
									}}
									required
								/>
								<label htmlFor='email'>Email</label>
							</div>

							<div className='input_box'>
								<input
									type='password'
									name='password'
									value={user.password}
									onChange={(e) => {
										handleChange(e);
									}}
									required
								/>
								<label htmlFor='password'>Contraseña</label>
							</div>

							<button
								type='submit'
								onSubmit={(e) => {
									handleSubmit(e);
								}}
							>
								Iniciar
							</button>

							<p>
								¿No tienes cuenta?{' '}
								<a href='' name='signUp' onClick={(e) => handleClick(e)}>
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
