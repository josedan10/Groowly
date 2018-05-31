import React from 'react';
import Community from '../community-container/community';
import axios from 'axios';

export default class OwnCommunity extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		axios.get('/admin/communities').then(res => {
			console.log(res);
			// res.json();
		});
	}

	render() {
		const ownCommunity = (
			<section className='own-community flex-center' id='Own_Community' onTouchMove={this.props.onTouchMove}>
				<Community communities={this.props.config} />
			</section>
		);

		return ownCommunity;
	}
}
