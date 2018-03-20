import React from 'react';
import ReactDOM from 'react-dom';
import Clients from './pages/clients';

var config = require('./config');
config = config.config;

ReactDOM.render(
	<Clients config={config.getClientes()}/>,
	document.getElementById('app')
);
