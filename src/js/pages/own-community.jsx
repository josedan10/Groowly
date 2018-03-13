import React from 'react';

export default class OwnCommunity extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		const ownCommunity = (
			<section className='own-community flex-center' id='Own_Community' onTouchMove={this.props.onTouchMove}>
				<h1>MEET OUR OWN DIGITAL COMMUNITY</h1>
				<div className='flex-presentation'>
					<div className='flex-center' />
					<div className='flex-center' />
					<div className='flex-center' />
					<div className='flex-center' />
					<div className='flex-center' />
					<div className='flex-center' />
				</div>
			</section>
		);

		return ownCommunity;
	}
}
