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

		const home = (
			<div>
				<section style={style} className='videos' id='videos' onTouchMove={this.props.onTouchMove}> 
					<div className='container' style={style}>
						<video autoPlay>
							<source src='src/videos/video1.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
						</video>
						<div className='cover-videos' />
					</div>

				</section>
			</div>
		);

		return home;
	}
}
