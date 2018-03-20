import React from 'react';
import { NavLink } from 'react-router-dom';
import Swipeable from 'react-swipeable';
import { isUndefined } from 'util';

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
		let redes = document.getElementsByClassName('redes-nav')[0];
		let nav = document.getElementById('nav-movil');

		if (!nav.classList.contains('open')) {
			nav.classList.add('open');
			nav.classList.remove('close');
			redes.classList.add('In');
			redes.classList.remove('Out');
		}
		this.rotateLogoIn();
		e.preventDefault();
	}

	swipeLeft(e) {
		let redes = document.getElementsByClassName('redes-nav')[0];
		let nav = document.getElementById('nav-movil');

		if (!nav.classList.contains('close')) {
			nav.classList.add('close');
			nav.classList.remove('open');
			redes.classList.add('Out');
			redes.classList.remove('In');
		}

		this.rotateLogoOut();
		e.preventDefault();
	}

	render() {

		var nav;

		switch (this.props.tipo) {
		case 'nav-movil':

			nav = (
				<aside className='left'>
					<Swipeable onSwipingRight={this.swipeRight.bind(this)} onSwipingLeft={this.swipeLeft.bind(this)}>
						<nav id='nav-movil' className={this.props.tipo}>
							<Logo logo={this.props.logo}/>
							
							<Menu tipo={this.props.tipo} links={this.props.links} onSwipingRight={this.swipeRight.bind(this)} onSwipingLeft={this.swipeLeft.bind(this)} />

							<Redes redes={this.props.redes} />
						</nav>
					</Swipeable>
				</aside>
			);

			break;

		default:

			nav = (
				<aside className='left' onMouseEnter={this.rotateLogoIn} onMouseLeave={this.rotateLogoOut}>
					<nav className={this.props.tipo}>
						<Logo logo={this.props.logo}/>
						<Menu tipo={this.props.tipo} links={this.props.links}/>
					</nav>
				</aside>
			);

			break;
		}

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


class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			link: location.pathname
		};
		this.url = 'http://localhost:8000';

	}

	changeLinkStyle(e) {
		let nav = document.getElementById('nav-movil');
		let redes = document.getElementsByClassName('redes-nav')[0];

		this.setState({
			link: e.target.href.replace(this.url, '')
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
							<li key={'li' + elemento}>
								<Swipeable onSwipingRight={this.props.onSwipingRight} onSwipingLeft={this.props.onSwipingLeft}>
									<a href={(elemento === 'Home') ? '/' : elemento} onClick={this.changeLinkStyle.bind(this)} className={this.assignClass(elemento)}>
										{elemento.toUpperCase()}  <span/>
									</a>
								</Swipeable>
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
