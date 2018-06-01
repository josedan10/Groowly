import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav/nav-menu';
import config from './config';

console.log(config);

// var config = require('./config');
config = config.config;

export default class Main extends React.Component {
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

				{/* {this.props.children} */}
			</div>
		);
	}
}


ReactDOM.render(	
	<Main />
	, document.getElementById('main')
);
