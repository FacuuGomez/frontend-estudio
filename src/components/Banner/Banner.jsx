import React from 'react';

import balanza_img from '../../../assets/balanza-justicia2.jpg';
import apellidos_img from '../../../assets/logo-estudio-apellidos-light.png';
import phone_light_img from '../../../assets/phone-icon-light.png';
import email_light_img from '../../../assets/email-icon-light.png';
import whatsapp_light_img from '../../../assets/whatsapp-icon-light.png';

import './Banner.css';

export default function Banner() {
	return (
		<section>
			<div className='container-home'>
				<img src={balanza_img} alt='balanza' />

				<div className='cover-home'>
					<img src={apellidos_img} alt='apellidos' />

					<div className='contactanos'>
						<ul>
							<li>
								<img src={phone_light_img} alt='telefono' />
								4441-8678
							</li>
							<li>
								<a
									href='mailto:martinezojedayasoc@gmail.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={email_light_img} alt='email' />
									martinezojedayasoc@gmail.com
								</a>
							</li>

							<li>
								<a
									href='https://api.whatsapp.com/send?phone=1154935036'
									target='_blank'
									title='Whatsapp'
								>
									<img src={whatsapp_light_img} alt='whatsapp' />
									whatsapp
								</a>
							</li>
						</ul>

						<a href='#contacto'>
							<button>Agendar turno</button>
						</a>
					</div>
				</div>
			</div>

			<div className='wave-1'>
				<svg viewBox='0 0 500 150' preserveAspectRatio='none'>
					<path d='M-7.05,115.95 C194.41,55.75 304.45,53.77 506.49,115.95 L500.00,150.00 L0.00,150.00 Z'></path>
				</svg>
			</div>
		</section>
	);
}
