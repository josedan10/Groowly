import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {

	constructor(props) {
		super(props);
	}
	
	openNav() {
		document.getElementById('logo').classList.add('rotateLogoIn');
		document.getElementById('logo').classList.remove('rotateLogoOut');
	}

	closeNav() {
		document.getElementById('logo').classList.remove('rotateLogoIn');
		document.getElementById('logo').classList.add('rotateLogoOut');
	}

	render() {

		var nav;

		switch (this.props.tipo) {
		case 'nav-movil nav-left':

			nav = (
				<aside className='left' onMouseEnter={this.openNav} onMouseLeave={this.closeNav}>
					<nav className={this.props.tipo}>
						<Logo logo={this.props.logo}/>
						<Menu tipo={this.props.tipo} links={this.props.links}/>
						<Redes redes={this.props.redes}/>
					</nav>
				</aside>
			);

			break;

		default:

			nav = (
				<aside className='left' onTouchMove={this.openNav}>
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
			// <div>
			// 	<ul>
			// 		{
			// 			links.map(elemento => (
			// 				<li key={'li' + elemento}>
			// 					<NavLink to={(elemento === 'Home') ? '/testing/site/' : '/testing/site/' + elemento.replace(' ', '_')} activeClassName='selected'>
			// 						{elemento.toUpperCase()}  <span/>
			// 					</NavLink>
			// 				</li>)
			// 			)
			// 		}
			// 	</ul>
			// </div>

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
