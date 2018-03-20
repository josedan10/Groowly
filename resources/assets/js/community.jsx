import React from 'react';
import ReactDOM from 'react-dom';
import OwnCommunity from './pages/own-community';

var config = require('./config');
config = config.config;

ReactDOM.render(
	<OwnCommunity config={config.getCommunities()}/>,
	document.getElementById('app')
);
