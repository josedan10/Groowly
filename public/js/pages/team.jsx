import React from 'react';
import PresentationFrame from '../presentation-container/presentation';

export default class Team extends React.Component {
    constructor(props){
        super(props);
    }
    
	render() {
		const team = (
			<section className='team flex-center' id='Team' onTouchMove={this.props.onTouchMove}>
				<PresentationFrame datos={this.props.config.getTeam()}/>
			</section>
		);
		return team;
	}
}


