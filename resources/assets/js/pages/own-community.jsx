import React from 'react';
import Community from '../community-container/community';

export default class OwnCommunity extends React.Component {
	constructor(props) {
		super(props);
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
