import React from 'react';
import { SubMenuMarketing } from '../nav/nav-menu';

export default class Estrategia extends React.Component {
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
					<SubMenuMarketing />
				</section>
			</div>
		);
	}
}
