import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Nav from '../../components/Nav/Nav.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import './Areas.css';

export default function Areas() {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const element = document.getElementById(location.hash.slice(1));
			if (element) {
				// Desplazar hacia el elemento correspondiente al hash
				element.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			// Si no hay un hash en la URL, desplazarse al inicio de la página
			window.scrollTo(0, 0);
		}
	}, []);

	return (
		<div>
			<Nav />

			<div className='cover_areas'>
				<div className='cover_boxes'>
					<section id='penal'>
						<h2>Áreas de práctica</h2>

						<div className='cover_info'>
							<div className='cover_text'>
								<h3>Penal</h3>

								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Facere et obcaecati exercitationem praesentium molestias culpa
									ad rerum alias odit, sed dolore vero qui, repellendus vitae
									nesciunt saepe sapiente placeat temporibus doloribus fugiat
									ipsum mollitia dolor distinctio excepturi. Distinctio, impedit
									cumque! Blanditiis quis rem, praesentium, eligendi quisquam
									perferendis aperiam vel quod, quasi voluptas architecto! Sunt
									deleniti impedit itaque nihil dicta officiis earum quae optio
									non delectus at praesentium magni quis iste ut sapiente
									voluptatem pariatur explicabo ad vitae, sit natus. Enim beatae
									consectetur sequi quisquam repellat similique repudiandae,
									explicabo a officia tempora cumque necessitatibus aspernatur,
									cupiditate labore sapiente deserunt neque reprehenderit.
								</p>
							</div>

							<img src='../../../assets/judge.svg' alt='penal' />
						</div>
					</section>

					<section id='laboral'>
						<div className='cover_info'>
							<img src='../../../assets/worker.svg' alt='laboral' />

							<div className='cover_text'>
								<h3>Laboral</h3>

								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Facere et obcaecati exercitationem praesentium molestias culpa
									ad rerum alias odit, sed dolore vero qui, repellendus vitae
									nesciunt saepe sapiente placeat temporibus doloribus fugiat
									ipsum mollitia dolor distinctio excepturi. Distinctio, impedit
									cumque! Blanditiis quis rem, praesentium, eligendi quisquam
									perferendis aperiam vel quod, quasi voluptas architecto! Sunt
									deleniti impedit itaque nihil dicta officiis earum quae optio
									non delectus at praesentium magni quis iste ut sapiente
									voluptatem pariatur explicabo ad vitae, sit natus. Enim beatae
									consectetur sequi quisquam repellat similique repudiandae,
									explicabo a officia tempora cumque necessitatibus aspernatur,
									cupiditate labore sapiente deserunt neque reprehenderit.
								</p>
							</div>
						</div>
					</section>

					<section id='familia'>
						<div className='cover_info'>
							<div className='cover_text'>
								<h3>Familia</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Facere et obcaecati exercitationem praesentium molestias culpa
									ad rerum alias odit, sed dolore vero qui, repellendus vitae
									nesciunt saepe sapiente placeat temporibus doloribus fugiat
									ipsum mollitia dolor distinctio excepturi. Distinctio, impedit
									cumque! Blanditiis quis rem, praesentium, eligendi quisquam
									perferendis aperiam vel quod, quasi voluptas architecto! Sunt
									deleniti impedit itaque nihil dicta officiis earum quae optio
									non delectus at praesentium magni quis iste ut sapiente
									voluptatem pariatur explicabo ad vitae, sit natus. Enim beatae
									consectetur sequi quisquam repellat similique repudiandae,
									explicabo a officia tempora cumque necessitatibus aspernatur,
									cupiditate labore sapiente deserunt neque reprehenderit.
								</p>
							</div>

							<img src='../../../assets/family.svg' alt='familia' />
						</div>
					</section>
				</div>

				<Footer />
			</div>
		</div>
	);
}
