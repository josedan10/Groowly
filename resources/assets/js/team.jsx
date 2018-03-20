import React from 'react';
import ReactDOM from 'react-dom';
import Team from './pages/team';

var config = require('./config');
config = config.config;

ReactDOM.render(
	<Team datos={config.getTeam()} />,
	document.getElementById('app')
);
