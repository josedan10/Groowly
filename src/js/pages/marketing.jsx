import React from 'react';

export default class Marketing extends React.Component {
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
								<span>P</span>
								<p>
                                    otencializamos el impacto de tu marca a través de poderosas estrategias de marketing digital.
								</p>
							</div>
							<p>
                                Nuestro enfoque sobre marketing digital es holístico. Permítenos contactarte y descubre cómo hemos ayudado a empresas como la tuya.
							</p>
						</div>
						<div className='links'>
							<h1>MAR</h1>
							<h1>KETING</h1>
							<p>DIGITAL</p>
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
							<li><a href=''>ESTRATEGIA</a></li>
							<li><a href=''>DESARROLLO <br /> WEB / APPS</a></li>
							<li><a href=''>MANEJO <br /> RRSS</a></li>
							<li><a href=''>INFLUENCER <br /> MARKETING</a></li>
							<li><a href=''>CREACIÓN <br /> DE MARCAS</a></li>
							<li><a href=''>CREACIÓN <br /> DE CONTENIDO</a></li>
						</ul>
					</nav>
				</section>
			</div>
		);
	}
}
