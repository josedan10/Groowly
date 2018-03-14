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
	}

	render() {
		return (
			<div>
				<Nav tipo='nav-left' logo={config.getLogo()} links={config.getLinks()} />

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
