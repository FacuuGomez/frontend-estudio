import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export default function footer() {
	return (
		<footer>
			<div className='wave_2'>
				<svg viewBox='0 0 500 150' preserveAspectRatio='none'>
					<path d='M-11.00,46.87 C244.64,191.93 306.71,-41.93 512.69,82.40 L500.00,150.00 L0.00,150.00 Z'></path>
				</svg>
			</div>

			<div className='container_footer'>
				<div className='cover_footer'>
					<div className='cards'>
						<div className='card img_card'>
							<img
								src='../../../assets/logo-final-light.png'
								alt='estudio jurídico'
							/>
						</div>

						<div className='card areas_card'>
							<h3>Áreas de práctica</h3>

							<ul>
								<li>
									<Link to='/areas#penal'>
										<p>▸ Penal</p>
									</Link>
								</li>
								<li>
									<Link to='/areas#laboral'>
										<p>▸ Laboral</p>
									</Link>
								</li>
								<li>
									<Link to='/areas#familia'>
										<p>▸ Familia</p>
									</Link>
								</li>
							</ul>
						</div>

						<div className='card contact_card'>
							<h3>Contactos</h3>

							<ul>
								<li>
									<img src='../../../assets/phone-icon-light.png' alt='phone' />
									<span></span>
									4441 - 8678
								</li>
								<li>
									<a
										href='mailto:martinezojedayasoc@gmail.com'
										target='_blank'
										rel='noopener noreferrer'
									>
										<img
											src='../../../assets/email-icon-light.png'
											alt='email'
										/>
										martinezojedayasoc@gmail.com
									</a>
								</li>
							</ul>

							<div className='social_medias'>
								<ul>
									<li>
										<a
											href='https://api.whatsapp.com/send?phone=1154935036'
											target='_blank'
											title='Whatsapp'
										>
											<img
												src='../../../assets/whatsapp-icon-light.png'
												alt='Whatsapp'
											/>
										</a>
									</li>
									<li>
										<a
											href='https://www.facebook.com/martinez.ojeda.gomezibarlucea.y.asoc'
											target='_blank'
											title='Facebook'
										>
											<img
												src='../../../assets/facebook-icon-light.png'
												alt='Facebook'
											/>
										</a>
									</li>
									<li>
										<a
											href='https://www.instagram.com/martinez_ojeda_gomezibarlucea/'
											target='_blank'
											title='Instagram'
										>
											<img
												src='../../../assets/instagram-icon-light.png'
												alt='Instagram'
											/>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='ubi_card'>
						<h3>Nuestras oficinas</h3>

						<div className='cover_ubi'>
							<div className='ubi'>
								<p>Arieta 2809, San Justo, Buenos Aires</p>
								<p>4441-8678</p>

								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1538133813438!2d-58.56659472549342!3d-34.67606726132062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc62e42276df5%3A0x4190efc310e17020!2sDr.%20Ignacio%20Arieta%202809%2C%20B1754APW%20San%20Justo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1685508697776!5m2!1ses!2sar'
									loading='lazy'
								></iframe>
							</div>

							<div className='ubi'>
								<p>Calle 26 Nº545, Gral. Pico, La Pampa</p>
								<p>02302-323641</p>


								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.8436114703663!2d-63.75478882543033!3d-35.65622451384127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c37d592b74ec9d%3A0x46cf814609ecbfc3!2sC.%2026%20545%2C%20Gral.%20Pico%2C%20La%20Pampa!5e0!3m2!1ses!2sar!4v1685559563647!5m2!1ses!2sar'
									loading='lazy'
								></iframe>
							</div>

							<div className='ubi'>
								<p>Bv. 25 de Mayo N°101, Quemú-Quemú, La Pampa</p>
								<p>2302-454512</p>


								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.8436114703663!2d-63.75478882543033!3d-35.65622451384127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c37d592b74ec9d%3A0x46cf814609ecbfc3!2sC.%2026%20545%2C%20Gral.%20Pico%2C%20La%20Pampa!5e0!3m2!1ses!2sar!4v1685559563647!5m2!1ses!2sar'
									loading='lazy'
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='last_line'>
				<p>Estudio Jurídico Martinez • Ojeda • Gómez Ibarlucea © 2023</p>
			</div>
		</footer>
	);
}
