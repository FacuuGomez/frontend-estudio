import React, { useState } from 'react';

import contactos_img from '../../../assets/contactos.png';
import phone_green_img from '../../../assets/phone-icon-green.png';
import email_green_img from '../../../assets/email-icon-green.png';
import whatsapp_green_img from '../../../assets/whatsapp-icon-green.png';
import reloj_img from '../../../assets/reloj.png';
import seguir_img from '../../../assets/seguir.png';
import facebook_img from '../../../assets/facebook-icono.png';
import instagram_img from '../../../assets/instagram-icono.png';

import './Contact.css';

export default function Contact() {
	const [successContact, setSuccessContact] = useState(false);

	const handleSumbit = (e) => {
		e.preventDefault();

		const form = new FormData(e.target);

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(form).toString(),
		})
			.then(() => {
				setSuccessContact(true);

				setTimeout(function () {
					setSuccessContact(false);
				}, 2000);

				e.target.reset();
			})
			.catch((error) => alert(error));
	};

	return (
		<div id='contacto'>
			<div className='container-contacto'>
				<h2>Contacto</h2>

				<div className='cover-info'>
					<div className='cover-datos'>
						<div className='contactos'>
							<div className='title-img'>
								<img src={contactos_img} alt='contactos' />
								<h3>Medios de contacto</h3>
							</div>

							<ul>
								<li>
									<img src={phone_green_img} alt='phone' />
									4441 - 8678
								</li>
								<li>
									<a
										href='mailto:martinezojedayasoc@gmail.com'
										target='_blank'
										rel='noopener noreferrer'
									>
										<img src={email_green_img} alt='email' />
										martinezojedayasoc@gmail.com
									</a>
								</li>
								<li>
									<a
										href='https://api.whatsapp.com/send?phone=1154935036'
										target='_blank'
										title='Whatsapp'
									>
										<img src={whatsapp_green_img} alt='whatsapp-green' />
										whatsapp
									</a>
								</li>
							</ul>
						</div>

						<div className='horarios'>
							<div className='title-img'>
								<img src={reloj_img} alt='reloj' />

								<h3>Nuestro horario</h3>
							</div>
							<ul>
								<li>Lunes a Viernes 13:00 a 17:00 hs</li>
							</ul>
						</div>
						<div className='redes'>
							<div className='title-img'>
								<img src={seguir_img} alt='redes' />

								<h3>Seguinos</h3>
							</div>
							<ul>
								<li>
									<a
										href='https://www.facebook.com/martinez.ojeda.gomezibarlucea.y.asoc'
										target='_blank'
										title='Facebook'
									>
										<img src={facebook_img} alt='Facebook' />
										Facebook
									</a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/martinez_ojeda_gomezibarlucea/'
										target='_blank'
										title='Instagram'
									>
										<img src={instagram_img} alt='instagram' />
										Instagram
									</a>
								</li>
							</ul>
						</div>
					</div>

					<form
						id='form'
						name='contact'
						method='POST'
						data-netlify='true'
						onSubmit={(e) => handleSumbit(e)}
					>
						<label htmlFor='name'>Nombre</label>
						<input type='text' name='name' autoComplete='off' />

						<label htmlFor='email'>Correo electronico</label>
						<input type='email' name='email' />

						<label htmlFor='subject' autoComplete='off'>
							Asunto
						</label>
						<input type='text' name='subject' />

						<label htmlFor='text'>Mensaje</label>
						<textarea name='message'></textarea>

						<div className='cover-submit'>
							<button type='submit'>Enviar</button>
						</div>
					</form>
				</div>
			</div>

			<div id={successContact ? 'success-contact' : 'none'}>
				<div id='modal-contact'>
					<p>¡ Gracias por contactarnos !</p>
				</div>
			</div>
		</div>
	);
}
