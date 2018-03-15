import React from 'react';
import Works from '../works/works';

export default class SelectedWorks extends React.Component {
    constructor(props){
        super(props);
    }

	render() {
		const selectedWorks = (
			<div>
				<section className='selected-works' id='Selected_Works' onTouchMove={this.props.onTouchMove}>
					<Works works={this.props.config.works}/>
				</section>
			</div>
		);
		return selectedWorks;
	}
}
