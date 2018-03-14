import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var nav;

		switch (this.props.tipo) {
		case 'nav-movil':

			nav = (
				<nav className='nav-movil'>
					<Logo />
					<Menu tipo={this.props.tipo} />
				</nav>
			);

			break;

		default:

			nav = (
				<aside className='left'>
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
		return <img src={this.props.logo} />;
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
