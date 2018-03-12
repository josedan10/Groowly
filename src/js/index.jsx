import React from 'react';
import ReactDOM from 'react-dom';
// import Nav from './nav/nav';
import Nav from './nav/nav-menu';


// Links para el menu y las redes
const links = ['Home', 'Services', 'Selected Works', 'Own Community', 'Team', 'Clients', 'Contact'];
// const redes = ['twitter', 'facebook', 'instagram', 'youtube'];

// Imagen del logo
const logo = 'src/img/logo.svg'; 					

ReactDOM.render(
	<Nav tipo='nav-left' logo={logo} links={links} />,
	document.getElementById('nav')
);

/* <aside class="left">
			<div id="nav"></div>
		</aside>
		<aside id="social" class="right">
			<ul>
				<li><a href="" target="_blank"><i class="icon icon-facebook"></i></a></li>
				<li><a href="" target="_blank"><i class="icon icon-twitter"></i></a></li>
				<li><a href="" target="_blank"><i class="icon icon-instagram"></i></a></li>
			</ul>
		</aside> */

