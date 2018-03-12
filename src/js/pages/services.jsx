import React from 'react';

export default class Services extends React.Component {
    constructor(props){
        super(props);
    }
    
	render() {
		const services = (
			<section className='services' id='Services'>
				<div className='flex-container'>
					<div className='flex-center'> 
						<h2> 1 </h2> 
						<div> Estrategias de <br /> comunicación</div>
					</div>
					<div className='flex-center'> 
						<h2> 2 </h2> 
						<div> Convocatoria <br /> de medios</div>
					</div>
					<div className='flex-center'> 
						<h2> 3 </h2> 
						<div> Posicionamiento <br /> en redes sociales</div>
					</div>
					<div className='flex-center'> 
						<h2> 4 </h2> 
						<div> Estrategia de <br /> Influencers</div>
					</div>
					<div className='flex-center'> 
						<h2> 5 </h2> 
						<div> Diseño Gráfico/Desarrollo <br /> de plataformas digitales</div>
					</div>
					<div className='flex-center'> 
						<h2> 6 </h2> 
						<div> Posicionamiento <br /> en medios</div>
					</div>
				</div>
			</section>
		);

		return services;
	}
}
