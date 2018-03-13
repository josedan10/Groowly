import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, hashHistory, browserHistory } from 'react-router-dom';
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


			{/* <Switch>
				<Route exact path='groowly.com/testing/site/' component={Home} />
				<Route exact path='groowly.com/testing/site/Services' component={Services} />
				<Route exact path='groowly.com/testing/site/Selected_Works' component={SelectedWorks} />
				<Route exact path='groowly.com/testing/site/Own_Community' component={OwnCommunity} />
				<Route exact path='groowly.com/testing/site/Team' component={Team} />
				<Route exact path='groowly.com/testing/site/Clients' component={Clients} />
				<Route exact path='groowly.com/testing/site/Contact' component={Contact} /> 
			</Switch> */}

			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/Services' component={Services} />
				<Route path='/Selected_Works' component={SelectedWorks} />
				<Route path='/Own_Community' component={OwnCommunity} />
				<Route path='/Team' component={Team} />
				<Route path='/Clients' component={Clients} />
				<Route path='/Contact' component={Contact} /> 
			</Switch>
		</div>
	</BrowserRouter>
	, document.getElementById('app')
);


// WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
// This can impact web performance.
// Assets:
//   nav.min.js (353 KiB)
//   index.min.js (789 KiB)

// WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
// Entrypoints:
//   index (789 KiB)
//       index.min.js
//   nav (353 KiB)
//       nav.min.js


// WARNING in webpack performance recommendations:
// You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
// For more info visit https://webpack.js.org/guides/code-splitting/