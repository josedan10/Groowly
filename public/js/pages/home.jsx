import React from 'react';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const style = {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		};

		const home = (
			<div>
				<section style={style} className='home' id='Home' onTouchMove={this.props.onTouchMove}> 
					<video autoPlay className='video'>
						<source src='src/videos/video1.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
					</video>
				</section>
			</div>
		);

		return home;
	}
}
