import React from 'react';
import ReactDOM from 'react-dom';
import SelectedWorks from './pages/selected-works';

var config = require('./config');
config = config.config;

ReactDOM.render(
	<SelectedWorks config={config.getWorks()}/>,
	document.getElementById('app')
);
