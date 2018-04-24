import React from 'react';
import { SubMenuRelaciones } from '../nav/nav-menu';

export default class ProduccionEventos extends React.Component {

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
							<h2>PRODUCCIÓN<br/>DE EVENTOS</h2>
						</div>
						<div className='info'>
							<p>
								<b>Lorem aliquip elit minim officia enim sit nostrud labore labore tempor pariatur dolore. Eu sint cillum voluptate magna qui. Cillum enim in dolore est ut ea dolore. Lorem enim consectetur id ipsum commodo nisi est. Aliquip laborum dolore do nostrud ipsum ut aute sunt nisi anim sunt magna.</b>
							</p>
						</div>
					</div>
					<SubMenuRelaciones />
				</section>
			</div>
		);
	}

}
