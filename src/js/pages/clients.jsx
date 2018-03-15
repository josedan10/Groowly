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
						<div className='img' style={{ backgroundImage: 'url(src/img/clientes/' + this.props.config.getClientes()[0] + '.png)' }}/>
					</div>
					<div className='flex-center'>
						<div className='img' style={{ backgroundImage: 'url(src/img/clientes/' + this.props.config.getClientes()[1] + '.png)' }}/>
					</div>
					<div className='flex-center'>
						<div className='img' style={{ backgroundImage: 'url(src/img/clientes/' + this.props.config.getClientes()[2] + '.png)' }}/>
					</div>
					<div className='flex-center'>
						<div className='img' style={{ backgroundImage: 'url(src/img/clientes/' + this.props.config.getClientes()[3] + '.png)' }}/>
					</div>
					<div className='flex-center'>
						<div className='img' style={{ backgroundImage: 'url(src/img/clientes/' + this.props.config.getClientes()[4] + '.png)' }}/>
					</div>
					<div className='flex-center'>
						<div className='img' style={{ backgroundImage: 'url(src/img/clientes/' + this.props.config.getClientes()[5] + '.png)' }}/>
					</div>
					<div className='flex-center'>
						<div className='img' style={{ backgroundImage: 'url(src/img/clientes/' + this.props.config.getClientes()[6] + '.png)' }}/>
					</div>
					<div className='flex-center'>
						<div className='img' style={{ backgroundImage: 'url(src/img/clientes/' + this.props.config.getClientes()[7] + '.png)' }}/>
					</div>
					<div className='flex-center'>
						<div className='img' style={{ backgroundImage: 'url(src/img/clientes/' + this.props.config.getClientes()[8] + '.png)' }}/>
					</div>
					<div className='flex-center'>
						<div className='img' style={{ backgroundImage: 'url(src/img/clientes/' + this.props.config.getClientes()[9] + '.png)' }}/>
					</div>
					<div className='flex-center'>
						<div className='img' style={{ backgroundImage: 'url(src/img/clientes/' + this.props.config.getClientes()[10] + '.png)' }}/>
					</div>
					<div className='flex-center'>
						<div className='img' style={{ backgroundImage: 'url(src/img/clientes/' + this.props.config.getClientes()[11] + '.png)' }}/>
					</div>
				</div>
			</section>
		);

		return clients;
	}
}
