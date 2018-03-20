import React from 'react';

export default class Clients extends React.Component {
	constructor(props) {
		super(props);
	}
    
	render() {
		const clients = (
			<section className='clientes' id='Clients' onTouchMove={this.props.onTouchMove}>
				<div className='flex-center'>
					<div className='flex-center'>
						<img src={'img/clientes/' + this.props.config[0] + '.png' }/>
					</div>
					<div className='flex-center'>
						<img src={'img/clientes/' + this.props.config[1] + '.png' }/>
					</div>
					<div className='flex-center'>
						<img src={'img/clientes/' + this.props.config[2] + '.png' }/>
					</div>
					<div className='flex-center'>
						<img src={'img/clientes/' + this.props.config[3] + '.png' }/>
					</div>
					<div className='flex-center'>
						<img src={'img/clientes/' + this.props.config[4] + '.png' }/>
					</div>
					<div className='flex-center'>
						<img src={'img/clientes/' + this.props.config[5] + '.png' }/>
					</div>
					<div className='flex-center'>
						<img src={'img/clientes/' + this.props.config[6] + '.png' }/>
					</div>
					<div className='flex-center'>
						<img src={'img/clientes/' + this.props.config[7] + '.png' }/>
					</div>
					<div className='flex-center'>
						<img src={'img/clientes/' + this.props.config[8] + '.png' }/>
					</div>
					<div className='flex-center'>
						<img src={'img/clientes/' + this.props.config[9] + '.png' }/>
					</div>
					<div className='flex-center'>
						<img src={'img/clientes/' + this.props.config[10] + '.png'}/>
					</div>
					<div className='flex-center'>
						<img src={'img/clientes/' + this.props.config[11] + '.png'}/>
					</div>
				</div>
			</section>
		);

		return clients;
	}
}
