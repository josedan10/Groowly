import React from 'react';

export default class Clients extends React.Component {
    constructor(props){
        super(props);
    }
    
	render() {
		const clients = (
			<section className='clientes' id='Clients' onTouchMove={this.props.onTouchMove}>
				<div className='flex-center'>
					<div className='flex-center'>
						<img src={'src/img/clientes/' + this.props.config.getClientes()[0] + '.png'} alt="" srcset=""/>
					</div>
					<div className='flex-center'>
						<img src={'src/img/clientes/' + this.props.config.getClientes()[1] + '.png'} alt="" srcset=""/>
					</div>
					<div className='flex-center'>
						<img src={'src/img/clientes/' + this.props.config.getClientes()[2] + '.png'} alt="" srcset=""/>
					</div>
					<div className='flex-center'>
						<img src={'src/img/clientes/' + this.props.config.getClientes()[3] + '.png'} alt="" srcset=""/>
					</div>
					<div className='flex-center'>
						<img src={'src/img/clientes/' + this.props.config.getClientes()[4] + '.png'} alt="" srcset=""/>
					</div>
					<div className='flex-center'>
						<img src={'src/img/clientes/' + this.props.config.getClientes()[5] + '.png'} alt="" srcset=""/>
					</div>
					<div className='flex-center'>
						<img src={'src/img/clientes/' + this.props.config.getClientes()[6] + '.png'} alt="" srcset=""/>
					</div>
					<div className='flex-center'>
						<img src={'src/img/clientes/' + this.props.config.getClientes()[7] + '.png'} alt="" srcset=""/>
					</div>
					<div className='flex-center'>
						<img src={'src/img/clientes/' + this.props.config.getClientes()[8] + '.png'} alt="" srcset=""/>
					</div>
					<div className='flex-center'>
						<img src={'src/img/clientes/' + this.props.config.getClientes()[9] + '.png'} alt="" srcset=""/>
					</div>
					<div className='flex-center'>
						<img src={'src/img/clientes/' + this.props.config.getClientes()[10] + '.png'} alt="" srcset=""/>
					</div>
					<div className='flex-center'>
						<img src={'src/img/clientes/' + this.props.config.getClientes()[11] + '.png'} alt="" srcset=""/>
					</div>
				</div>
			</section>
		);

		return clients;
	}
}
