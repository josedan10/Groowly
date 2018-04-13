import React from 'react';
import { SubMenuMarketing } from '../nav/nav-menu';

export default class Estrategias extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<section className='subsection'>
					<div className='content'>
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
						<div className='links'>
							<h2>ESTRATEGIA</h2>
						</div>
						<div className='info'>
							<p>
                                <b>Nuestro enfoque sobre marketing digital es holístico. Permítenos contactarte y descubre cómo hemos ayudado a empresas como la tuya.</b>
							</p>
						</div>
					</div>
<<<<<<< HEAD
					<SubMenuMarketing />
=======
					<nav className='submenu'>
						<ul>
							<li><a href=''><b>ESTRATEGIA</b></a></li>
							<li><a href=''><b>DESARROLLO <br/> WEB / APPS</b></a></li>
							<li><a href=''><b>MANEJO <br/> RRSS</b></a></li>
							<li><a href=''><b>INFLUENCER <br/> MARKETING</b></a></li>
							<li><a href=''><b>CREACIÓN <br/> DE MARCAS</b></a></li>
							<li><a href=''><b>CREACIÓN <br/> DE CONTENIDO</b></a></li>
						</ul>
					</nav>
>>>>>>> be9876bc332292a4e7b170087a23f35f18d5996d
				</section>
			</div>
		);
	}
}
