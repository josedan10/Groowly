import React from 'react';
import { SubMenuMarketing } from '../nav/nav-menu';

export default class CreacionContenido extends React.Component {

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
							<h2>CREACIÓN <br/>DE CONTENIDO</h2>
						</div>
						<div className='info'>
							<p>
								<b>Eu nostrud in commodo consectetur eiusmod pariatur. Magna officia incididunt sunt ullamco occaecat commodo Lorem mollit fugiat mollit ea pariatur. Id eu et exercitation aliquip sint consectetur amet fugiat reprehenderit minim excepteur in deserunt. Do cupidatat aute ad cillum quis ad tempor non voluptate ipsum anim consequat ipsum. Ad in consequat consequat officia ea dolore do velit nulla duis consequat.</b>
							</p>
						</div>
					</div>
					<SubMenuMarketing />
				</section>
			</div>
		);
	}

}
