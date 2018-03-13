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

	}

	// handleClick(e) {
	// 	console.log(e.target.props.history);
	// 	e.preventDefault();
	// }

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
								<NavLink to={(elemento === 'Home') ? '/' : elemento.replace(' ', '_')} activeClassName='selected'>
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
