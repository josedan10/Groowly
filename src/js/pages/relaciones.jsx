import React from 'react';
import { SubMenuRelaciones } from '../nav/nav-menu';

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
					<SubMenuRelaciones />
				</section>
			</div>
		);
	}
}
