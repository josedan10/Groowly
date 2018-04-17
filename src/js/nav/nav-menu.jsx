import React from 'react';
import { NavLink } from 'react-router-dom';
import Swipeable from 'react-swipeable';
// import { isUndefined } from 'util';

export default class Nav extends React.Component {

	constructor(props) {
		super(props);
	}
	
	rotateLogoIn() {
		let redes = document.getElementsByClassName('redes-nav')[0];
		let logo = document.getElementById('logo');

		logo.classList.add('rotateLogoIn');
		logo.classList.remove('rotateLogoOut');

		if (redes !== undefined) {
			redes.classList.add('In');
			redes.classList.remove('Out');
		}
	}

	rotateLogoOut() {
		let redes = document.getElementsByClassName('redes-nav')[0];
		let logo = document.getElementById('logo');

		logo.classList.remove('rotateLogoIn');
		logo.classList.add('rotateLogoOut');

		if (redes !== undefined) {
			redes.classList.add('Out');
			redes.classList.remove('In');
		}
	}

	swipeRight(e) {
		// let redes = document.getElementsByClassName('redes-nav')[0];
		let nav = document.getElementById('nav-movil');

		if (!nav.classList.contains('open')) {
			nav.classList.add('open');
			nav.classList.remove('close');
			// redes.classList.add('In');
			// redes.classList.remove('Out');
		}
		this.rotateLogoIn();
		e.preventDefault();
	}

	swipeLeft(e) {
		// let redes = document.getElementsByClassName('redes-nav')[0];
		let nav = document.getElementById('nav-movil');

		if (!nav.classList.contains('close')) {
			nav.classList.add('close');
			nav.classList.remove('open');
			// redes.classList.add('Out');
			// redes.classList.remove('In');
		}

		this.rotateLogoOut();
		e.preventDefault();
	}

	render() {

		var nav;

		// 	switch (this.props.tipo) {
		// 	case 'nav-movil':

		// 		nav = (
		// 			<aside className='left'>
		// 				<Swipeable onSwipingRight={this.swipeRight.bind(this)} onSwipingLeft={this.swipeLeft.bind(this)}>
		// 					<nav id='nav-movil' className={this.props.tipo}>
		// 						<Logo logo={this.props.logo}/>
							
		// 						<Menu tipo={this.props.tipo} links={this.props.links} onSwipingRight={this.swipeRight.bind(this)} onSwipingLeft={this.swipeLeft.bind(this)} />

		// 						<Redes redes={this.props.redes} />
		// 					</nav>
		// 				</Swipeable>
		// 			</aside>

		// 			// <aside className='left'>
		// 			// 	<Swipeable>
		// 			// 		<nav id='nav-movil' className={this.props.tipo}>
		// 			// 			<Logo logo={this.props.logo}/>
							
		// 			// 			<Menu tipo={this.props.tipo} links={this.props.links} />

		// 			// 			<Redes redes={this.props.redes} />
		// 			// 		</nav>
		// 			// 	</Swipeable>
		// 			// </aside>
		// 		);

		// 		break;

		// 	default:

		
		// 	break;
		// }
		nav = (
			// <aside className='left'>
			// 	<nav className={this.props.tipo}>
			// 		<Logo logo={this.props.logo}/>
			// 		<Menu tipo={this.props.tipo} links={this.props.links}/>
			// 	</nav>
			// </aside>

			// <aside className='left' >
			<nav id='nav-menu' className='flex-center hide-nav'>
				{/* <Logo logo={this.props.logo}/> */}
				<Menu animation={this.props.animation} tipo={this.props.tipo} links={this.props.links}/>
			</nav>
			// </aside>
		);

		return nav;
	}

}


class Logo extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return <img src={this.props.logo} id='logo'/>;
	}
}


export class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			link: location.hash.replace('#', '')
		};

	}

	changeLinkStyle(e) {
		let nav = document.getElementById('nav-movil');
		let redes = document.getElementsByClassName('redes-nav')[0];

		this.setState({
			link: e.target.hash.replace('#', '')
		});

		if (nav.classList.contains('open')) {
			nav.classList.add('close');
			nav.classList.remove('open');
			redes.classList.add('Out');
			redes.classList.remove('In');
		}
	}

	assignClass(elemento) {
		let classState;

		switch (elemento) {
		case 'Home':
			classState = (this.state.link === '/') ? 'selected' : '';
			break;

		default:
			classState = (this.state.link === '/' + elemento) ? 'selected' : '';
			break;
		}

		return classState;
	}

	render() {
		const links = this.props.links;

		return (
			<div>
				<ul>
					{
						links.map(elemento => (
							<li key={'li' + elemento} onClick={this.props.animation}>
								{/* <Swipeable onSwipingRight={this.props.onSwipingRight} onSwipingLeft={this.props.onSwipingLeft}> */}
								<NavLink to={(elemento === 'Home') ? '/' : elemento} onClick={this.changeLinkStyle.bind(this)} className={this.assignClass('Estrategias')}>
									<span/>
									{elemento.toUpperCase()}  
								</NavLink>
								{/* </Swipeable> */}
							</li>)
						)
					}
				</ul>
			</div>
		);
	}
}

class Redes extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className='redes-nav Out'>
				<li><a href='https://www.facebook.com/groowly' target='_blank'><i className='icon icon-facebook' /></a></li>
				<li><a href='https://www.twitter.com/groowly' target='_blank'><i className='icon icon-twitter' /></a></li>
				<li><a href='https://www.instagram.com/groowly' target='_blank'><i className='icon icon-instagram' /></a></li>
			</ul>
		);
	}
}

export class SubMenuMarketing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			link: location.hash.replace('#', '')
		};

	}

	changeLinkStyle(e) {
		this.setState({
			link: e.target.hash.replace('#', '')
		});
	}

	assignClass(elemento) {
		let classState;

		switch (elemento) {
		case 'Home':
			classState = (this.state.link === '/') ? 'selected' : '';
			break;

		default:
			classState = (this.state.link === '/' + elemento) ? 'selected' : '';
			break;
		}

		return classState;
	}

	render() {
		return (
			<nav className='submenu'>
				<ul>
					<li><NavLink to='/Estrategia' onClick={this.changeLinkStyle.bind(this)} className={this.assignClass('Estrategia')}><b>ESTRATEGIA</b></NavLink></li>
					<li><NavLink to='/Estrategia' onClick={this.changeLinkStyle.bind(this)} className={this.assignClass('Desarrollo')}><b>DESARROLLO<br/>WEB / APPS</b></NavLink></li>
					<li><NavLink to='/Estrategia' onClick={this.changeLinkStyle.bind(this)} className={this.assignClass('Manejo_RSS')}><b>MANEJO<br/>RRSS</b></NavLink></li>
					<li><NavLink to='/Estrategia' onClick={this.changeLinkStyle.bind(this)} className={this.assignClass('Influencer_Marketing')}><b>INFLUENCER<br/>MARKETING</b></NavLink></li>
					<li><NavLink to='/Estrategia' onClick={this.changeLinkStyle.bind(this)} className={this.assignClass('Creacion_Marcas')}><b>CREACIÓN<br/>DE MARCAS</b></NavLink></li>
					<li><NavLink to='/Estrategia' onClick={this.changeLinkStyle.bind(this)} className={this.assignClass('Creacion_Contenido')}><b>CREACIÓN<br/>DE CONTENIDO</b></NavLink></li>
				</ul>
			</nav>
		);
	}
}

export class SubMenuRelaciones extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			link: location.hash.replace('#', '')
		};

	}

	changeLinkStyle(e) {

		this.setState({
			link: e.target.hash.replace('#', '')
		});

	}

	assignClass(elemento) {
		let classState;

		switch (elemento) {
		case 'Home':
			classState = (this.state.link === '/') ? 'selected' : '';
			break;

		default:
			classState = (this.state.link === '/' + elemento) ? 'selected' : '';
			break;
		}

		return classState;
	}

	render() {
		return (
			<nav className='submenu'>
				<ul>
					<li><NavLink to='/Estrategia' onClick={this.changeLinkStyle.bind(this)} className={this.assignClass('Estrategias_Comunicacion')}><b>ESTRATEGIAS <br />DE COMUNICACIÓN</b></NavLink></li>
					<li><NavLink to='/Estrategia' onClick={this.changeLinkStyle.bind(this)} className={this.assignClass('Convocatoria_Medios')}><b>CONVOCATORIA <br />DE MEDIOS</b></NavLink></li>
					<li><NavLink to='/Estrategia' onClick={this.changeLinkStyle.bind(this)} className={this.assignClass('Posicinamiento_Medios')}><b>POSICIONAMIENTO <br />EN MEDIOS</b></NavLink></li>
					<li><NavLink to='/Estrategia' onClick={this.changeLinkStyle.bind(this)} className={this.assignClass('Contenido_Editorial')}><b>CONTENIDO <br />EDITORIAL</b></NavLink></li>
					<li><NavLink to='/Estrategia' onClick={this.changeLinkStyle.bind(this)} className={this.assignClass('Produccion_Eventos')}><b>PRODUCCIÓN <br />DE EVENTOS</b></NavLink></li>
				</ul>
			</nav>
		);
	}
}
