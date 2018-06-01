import React from 'react';
import ReactDOM from 'react-dom';
import OwnCommunity from './pages/own-community';
import config from './config';

ReactDOM.render(
	<OwnCommunity config={config.getCommunities()}/>,
	document.getElementById('app')
);
