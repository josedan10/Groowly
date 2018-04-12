import React from 'react';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		const home = (
			<div>
				<section className='home' id='Home'>
					<article>
						<h1>
							Somos la agencia líder en Relaciones <br/>
							Públicas y marketing digital en México.
						</h1>

						<p>
							Estamos en constante evolución para romper paradigmas e ir más lejos. Re-imaginamos la forma de conectar personas en nuestra región y en otras partes del mundo a través de unidades de negocios especializados.
						</p>

						<p>
							Integramos un equipo de profesionales apasionados, críticos, proactivos y empáticos con las necesidades de nuestros clientes, de los medios de comunicación y de los consumidores. Los resultados hablan por sí mismos.
						</p>
					</article>
					<div className='row'>
						<div className='line' />
						<div className='head' />
					</div>
				</section>

				<section className='sections-links'>
					<a href='#/Marketing' className='links'>
						<div>
							<h1>MAR</h1>
							<h1>KETING</h1>
							<p>DIGITAL</p>
						</div>
					</a>
					<a href='#/Relaciones' className='links'>
						<div>
							<h1>RELA</h1>
							<h1>CIONES</h1>
							<p>PÚBLICAS</p>
						</div>
					</a>	
				</section>
			</div>
		);

		return home;
	}
}
