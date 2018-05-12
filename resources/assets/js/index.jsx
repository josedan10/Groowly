import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav/nav-menu';
// import { HashRouter, BrowserRouter, Route, Switch, hashHistory, browserHistory } from 'react-router-dom';
// import Home from './pages/home';
// import SelectedWorks from './pages/selected-works';
// import Services from './pages/services';
// import OwnCommunity from './pages/own-community';
// import Clients from './pages/clients';

// ReactDOM.render(
// 	<Home />,
// 	document.getElementById('app')
// );

var config = require('./config');
config = config.config;

ReactDOM.render(
	<Nav logo={config.getLogo()} links={config.getLinks()} decoration={config.getDecoration()} />
	, document.getElementById('nav')
);
