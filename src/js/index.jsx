import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Route, Switch, hashHistory, browserHistory, NavLink } from 'react-router-dom';
import Nav from './nav/nav-menu';
import Home from './pages/home';
import Marketing from './pages/marketing';
import Relaciones from './pages/relaciones';
import Estrategia from './pages/estrategia';
import SelectedWorks from './pages/selected-works';
// import Services from './pages/services';
import OwnCommunity from './pages/own-community';
// import Team from './pages/team';
import Videos from './pages/videos';
// import Clients from './pages/clients';
import Contact from './pages/contact';

var config = require('./config');
config = config.config;

function noScroll(e) {
	e.preventDefault();
}


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nav: null
		};
	}

	componentWillMount() {
		this.chooseNav();
	}

	chooseNav() {
		let navType;

		if (window.innerWidth < 768) {
			navType = 'nav-movil';
		} else {
			navType = 'nav-left';
		}

		this.setState({
			nav: navType
		});
	}

	toogleMenu() {
		let nav = document.getElementById('nav-menu');
		let icon = document.getElementById('menu-icon');

		if (nav.classList.contains('show-nav')) {
			nav.classList.remove('show-nav');
			nav.classList.add('hide-nav');
			icon.classList.remove('active');
			
		} else {
			nav.classList.remove('hide-nav');
			nav.classList.add('show-nav');
			icon.classList.add('active');
		}
	}

	render() {
		window.addEventListener('resize', this.chooseNav.bind(this), false);
		return (
			
			<div>
<<<<<<< HEAD
				{/* <Nav tipo={this.state.nav} logo={config.getLogo()} links={config.getLinks()} />
=======
				<header>
					<div className='icons'>
						<img src='src/img/logo.svg' alt='' />
						<span className='icon icon-menu8' onClick={this.toogleMenu}/>
					</div>
>>>>>>> 02d311160af43af3c24ef1b1df8d1892bd799169

				<aside className='right' id='social'>
					<ul>
						<li><a href='https://www.facebook.com/groowly' target='_blank'><i className='icon icon-facebook' /></a></li>
						<li><a href='https://www.twitter.com/groowly' target='_blank'><i className='icon icon-twitter' /></a></li>
						<li><a href='https://www.instagram.com/groowly' target='_blank'><i className='icon icon-instagram' /></a></li>
					</ul>
				</aside> */}

				{/* {this.props.children}  */}
				<header>
					<Nav animation={this.toogleMenu.bind(this)} tipo={this.state.nav} logo={config.getLogo()} links={config.getLinks()} />
					<div className='icons'>
						<div className='logo'>
							<img src='src/img/logo.svg' alt='' />
						</div>
						<div className='icon' onClick={this.toogleMenu}>
							<span className='icon icon-dehaze' id='menu-icon'/>
						</div>
					</div>
				</header>
				{this.props.children}
			</div>
		);
	}
}

ReactDOM.render(	
	<HashRouter history={hashHistory}>
		<App>
			<Switch>
				<Route path='/' exact render={ () => <Home config={config} />} onTouchMove={noScroll} />
				<Route path='/Marketing' exact render= { () => <Marketing /> } />
				<Route path='/Relaciones' exact render= { () => <Relaciones /> } />
				<Route path='/Estrategia' exact render= { () => <Estrategia /> } />
				{/* <Route path='/Services' render={ () => <Services config={config} />} onTouchMove={noScroll} /> */}
				<Route path='/Works' render={ () => <SelectedWorks config={config} />} onTouchMove={noScroll} />
				<Route path='/Community' render={ () => <OwnCommunity config={config} />} onTouchMove={noScroll} />
				{/* <Route path='/Team' render={ () => <Team config={config} />} onTouchMove={noScroll} /> */}
				{/* <Route path='/Clients' render={ () => <Clients config={config} />} onTouchMove={noScroll} /> */}
				<Route path='/Videos' render={ () => <Videos config={config} />} onTouchMove={noScroll} />
				<Route path='/Contact' render={ () => <Contact config={config} />} onTouchMove={noScroll} />
			</Switch>
		</App>
	</HashRouter>
	, document.getElementById('app')
);
