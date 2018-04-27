import React from 'react';
import Community from '../community-container/community';

export default class OwnCommunity extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		document.getElementsByTagName('header')[0].classList.add('list2');
	}

	componentWillUnmount() {
		document.getElementsByTagName('header')[0].classList.remove('list2');
	}

	render() {
		const ownCommunity = (
			<section className='own-community flex-center' id='Own_Community' onTouchMove={this.props.onTouchMove}>
				<Community communities={this.props.config.communities} />
			</section>
		);

		return ownCommunity;
	}
}
