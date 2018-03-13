import React from 'react';

export default class Clients extends React.Component {
    constructor(props){
        super(props);
    }
    
	render() {
		const clients = (
			<section className='clientes' id='Clients' onTouchMove={this.props.onTouchMove}>
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
		);

		return clients;
	}
}
