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
                                    <b>uestro enfoque de PR es completamente integral. Creamos estrategias de comunicación a la medida de cada marca, siempre siguiendo best practices.</b>
								</p>
							</div>
							<p>
                                <b>Contamos con equipos de trabajo especializados por industria y con las herramientas de distribución de contenido más modernas.</b>
							</p>
						</div>
						<div className='links'>
							<h1>RELA</h1>
							<h1>CIONES</h1>
							<p><b>PÚBLICAS</b></p>
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
							<li><a href='#/Estrategias'><b>ESTRATEGIAS <br /> DE COMUNICACIÓN</b></a></li>
							<li><a href='#/Estrategias'><b>CONVOCATORIA <br /> DE MEDIOS</b></a></li>
							<li><a href='#/Estrategias'><b>POSICIONAMIENTO <br /> EN MEDIOS</b></a></li>
							<li><a href='#/Estrategias'><b>CONTENIDO <br /> EDITORIAL</b></a></li>
							<li><a href='#/Estrategias'><b>PRODUCCIÓN <br /> DE EVENTOS</b></a></li>
						</ul>
					</nav>
				</section>
			</div>
		);
	}
}
