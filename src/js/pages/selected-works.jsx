import React from 'react';

export default class SelectedWorks extends React.Component {
    constructor(props){
        super(props);
    }

	render() {
		const selectedWorks = (
			<div>
				<section className='selected-works' id='Selected_Works' onTouchMove={this.props.onTouchMove}>
					<div className='flex-center'>
						<div className='flex-center' />
						<div className='flex-center' />
						<div className='flex-center' />
						<div className='flex-center' />
						<div className='flex-center' />
						<div className='flex-center' />
						<div className='flex-center' />
						<div className='flex-center' />
						<div className='flex-center' />
						<div className='flex-center' />
						<div className='flex-center' />
						<div className='flex-center' />
					</div>
				</section>
			</div>
		);
		return selectedWorks;
	}
}
