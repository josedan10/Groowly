import React from 'react';

export default class Videos extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const style = {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		};

		const videos = (			
			<section style={style} className='videos' id='videos' onTouchMove={this.props.onTouchMove}> 
				<video autoPlay className='video'>
					<source src='videos/video1.mp4' type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			</section>
		);

		return videos;
	}
}
