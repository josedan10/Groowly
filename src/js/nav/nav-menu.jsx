import React from 'react';
import { NavLink } from 'react-router-dom';
import Swipeable from 'react-swipeable';

export default class Nav extends React.Component {

	constructor(props) {
		super(props);
	}
	
	rotateLogoIn() {
		document.getElementById('logo').classList.add('rotateLogoIn');
		document.getElementById('logo').classList.remove('rotateLogoOut');
	}

	rotateLogoOut() {
		document.getElementById('logo').classList.remove('rotateLogoIn');
		document.getElementById('logo').classList.add('rotateLogoOut');
	}

	swipeRight(e) {
		if (!e.target.classList.contains('open')) {
			e.target.classList.add('open');
			e.target.classList.remove('close');
		}
		this.rotateLogoIn();
		e.preventDefault();
	}

	swipeLeft(e) {
		if (!e.target.classList.contains('close')) {
			e.target.classList.add('close');
			e.target.classList.remove('open');
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
							<Menu tipo={this.props.tipo} links={this.props.links}/>
							<Redes redes={this.props.redes}/>
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
		const links = this.props.links;

		return (
			<div>
				<ul>
					{
						links.map(elemento => (
							<li key={'li' + elemento}>
								<NavLink to={(elemento === 'Home') ? '/' : elemento} onClick={this.changeLinkStyle.bind(this)} className={this.assignClass(elemento)}>
									{elemento.toUpperCase()}  <span/>
								</NavLink>
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
			<ul className='redes-nav'>
				<li><a href='https://www.facebook.com/groowly' target='_blank'><i className='icon icon-facebook' /></a></li>
				<li><a href='https://www.twitter.com/groowly' target='_blank'><i className='icon icon-twitter' /></a></li>
				<li><a href='https://www.instagram.com/groowly' target='_blank'><i className='icon icon-instagram' /></a></li>
			</ul>
		);
	}
}
