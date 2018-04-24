import React from 'react';
import { SubMenuRelaciones } from '../nav/nav-menu';

export default class EstrategiasComunicacion extends React.Component {

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
							<h2>ESTRATEGIAS <br/>DE COMUNICACIÓN</h2>
						</div>
						<div className='info'>
							<p>
								<b>Commodo ex non commodo culpa amet do culpa aliqua. Exercitation ullamco reprehenderit nostrud id minim Lorem cillum est dolore occaecat consequat laborum. Ut aliqua nulla ullamco deserunt in qui exercitation sunt laboris. In consequat mollit amet velit deserunt mollit fugiat velit anim. Irure irure commodo ex sit Lorem reprehenderit.</b>
							</p>
						</div>
					</div>
					<SubMenuRelaciones />
				</section>
			</div>
		);
	}

}
