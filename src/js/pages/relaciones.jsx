import React from 'react';

export default class Relaciones extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<section className='marketing'>
					<div className='content'>
						<div className='info'>
							<div className='capitalize'>
								<span>N</span>
								<p>
                                    uestro enfoque de PR es completamente integral. Creamos estrategias de comunicación a la medida de cada marca, siempre siguiendo best practices.
								</p>
							</div>
							<p>
                                Contamos con equipos de trabajo especializados por industria y con las herramientas de distribución de contenido más modernas.
							</p>
						</div>
						<div className='links'>
							<h1>RELA</h1>
							<h1>CIONES</h1>
							<p>PÚBLICAS</p>
						</div>
					</div>
					<div className='text-decoration'>
						<span>S</span>
						<span>E</span>
						<span>R</span>
						<span>V</span>
						<span>I</span>
						<span>C</span>
						<span>I</span>
						<span>O</span>
						<span>S</span>
					</div>
					<nav className='submenu'>
						<ul>
							<li><a href='#/Estrategias'>ESTRATEGIAS <br /> DE COMUNICACIÓN</a></li>
							<li><a href='#/Estrategias'>CONVOCATORIA <br /> DE MEDIOS</a></li>
							<li><a href='#/Estrategias'>POSICIONAMIENTO <br /> EN MEDIOS</a></li>
							<li><a href='#/Estrategias'>CONTENIDO <br /> EDITORIAL</a></li>
							<li><a href='#/Estrategias'>PRODUCCIÓN <br /> DE EVENTOS</a></li>
						</ul>
					</nav>
				</section>
			</div>
		);
	}
}
