import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Route, Switch, hashHistory, browserHistory } from 'react-router-dom';
import Nav from './nav/nav-menu';
import Home from './pages/home';
import SelectedWorks from './pages/selected-works';
import Services from './pages/services';
import OwnCommunity from './pages/own-community';
import Team from './pages/team';
import Clients from './pages/clients';
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

	render() {
		window.addEventListener('resize', this.chooseNav.bind(this), false);
		
		return (
			<div>
				<Nav tipo={this.state.nav} logo={config.getLogo()} links={config.getLinks()} />

				<aside className='right' id='social'>
					<ul>
						<li><a href='https://www.facebook.com/groowly' target='_blank'><i className='icon icon-facebook' /></a></li>
						<li><a href='https://www.twitter.com/groowly' target='_blank'><i className='icon icon-twitter' /></a></li>
						<li><a href='https://www.instagram.com/groowly' target='_blank'><i className='icon icon-instagram' /></a></li>
					</ul>
				</aside>

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
				<Route path='/Services' render={ () => <Services config={config} />} onTouchMove={noScroll} />
				<Route path='/Works' render={ () => <SelectedWorks config={config} />} onTouchMove={noScroll} />
				<Route path='/Community' render={ () => <OwnCommunity config={config} />} onTouchMove={noScroll} />
				<Route path='/Team' render={ () => <Team config={config} />} onTouchMove={noScroll} />
				<Route path='/Clients' render={ () => <Clients config={config} />} onTouchMove={noScroll} />
				<Route path='/Contact' render={ () => <Contact config={config} />} onTouchMove={noScroll} /> 
			</Switch>
		</App>
		
	</HashRouter>
	, document.getElementById('app')
);
