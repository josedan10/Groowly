import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, hashHistory } from 'react-router-dom';
import Nav from './nav/nav-menu';
import Home from './pages/home';
import SelectedWorks from './pages/selected-works';
import Services from './pages/services';
import OwnCommunity from './pages/own-community';
import Team from './pages/team';
import Clients from './pages/clients';
import Contact from './pages/contact';

// Links para el menu y las redes
const links = ['Home', 'Services', 'Selected Works', 'Own Community', 'Team', 'Clients', 'Contact'];
// const redes = ['twitter', 'facebook', 'instagram', 'youtube'];

// Imagen del logo
const logo = 'src/img/logo.svg';

ReactDOM.render(	
	<BrowserRouter history={hashHistory}>
		<div>
			<Nav tipo='nav-left' logo={logo} links={links} />

			<aside className='right' id='social'>
				<ul>
					<li><a href='' target='_blank'><i className='icon icon-facebook' /></a></li>
					<li><a href='' target='_blank'><i className='icon icon-twitter' /></a></li>
					<li><a href='' target='_blank'><i className='icon icon-instagram' /></a></li>
				</ul>
			</aside>


			<Switch>
				<Route exact path='/testing/site/' component={Home} />
				<Route exact path='/testing/site/Services' component={Services} />
				<Route exact path='/testing/site/Selected_Works' component={SelectedWorks} />
				<Route exact path='/testing/site/Own_Community' component={OwnCommunity} />
				<Route exact path='/testing/site/Team' component={Team} />
				<Route exact path='/testing/site/Clients' component={Clients} />
				<Route exact path='/testing/site/Contact' component={Contact} /> 
			</Switch>
		</div>
	</BrowserRouter>
	, document.getElementById('app')
);
