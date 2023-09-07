import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Nav.css';

export default function Nav() {
	const [isScrolling, setIsScrolling] = useState(0);
	const [options, setOptions] = useState(false);

	const location = useLocation();
	const currentPath = location.pathname;

	const handleScroll = () => {
		let scroll = window.scrollY;

		setIsScrolling(scroll);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isScrolling]);

	useEffect(() => {
		if (currentPath === '/areas') {
			setOptions(true);
		}
	}, []);

	return (
		<header className={isScrolling > 30 ? 'scroll-nav' : 'start'}>
			{options ? (
				<div className='cover-nav'>
					<div className='cover-logo'>
						<Link to='/'>
							<img src='../../../assets/logo-estudio-light.png' alt='logo' />
						</Link>
					</div>

					<nav>
						<ul>
							<li className='dropdown'>
								<p>Áreas de práctica</p>

								<div className='dropdown-content'>
									<a className='link-top' href='#penal'>
										<p>Penal</p>
									</a>
									<a className='link link-medium' href='#laboral'>
										<p>Laboral</p>
									</a>
									<a className='link link-down' href='#familia'>
										<p>Familia</p>
									</a>
								</div>
							</li>

							<li className='user-icon'>
								<Link to='/login'>
									<img src='../../../assets/user-icon-light.png' alt='user' />
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			) : (
				<div className='cover-nav'>
					<div className='cover-logo'>
						<a href='#'>
							<img src='../../../assets/logo-estudio-light.png' alt='logo' />
						</a>
					</div>

					<nav>
						<ul>
							<li>
								<a href='#nosotros'>Nosotros</a>
							</li>
							<li className='dropdown'>
								<a href='#áreas-de-práctica'>Áreas de práctica</a>

								<div className='dropdown-content'>
									<Link className='link-top' to='/areas#penal'>
										<p>Penal</p>
									</Link>
									<Link className='link link-medium' to='/areas#laboral'>
										<p>Laboral</p>
									</Link>
									<Link className='link link-down' to='/areas#familia'>
										<p>Familia</p>
									</Link>
								</div>
							</li>
							<li>
								<a href='#servicios'>Servicios</a>
							</li>
							<li className='contacto-li'>
								<a href='#contacto'>Contacto</a>
							</li>
							<li className='user-icon'>
								<Link to='/login'>
									<img src='../../../assets/user-icon-light.png' alt='user' />
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			)}
		</header>
	);
}
