import React from 'react';
import { SubMenuRelaciones } from '../nav/nav-menu';

export default class PosicionamientoMedios extends React.Component {

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
							<h2>POSICIONAMIENTO<br/>EN MEDIOS</h2>
						</div>
						<div className='info'>
							<p>
								<b>Enim laborum id eu reprehenderit. Dolore qui laborum nulla nostrud anim irure culpa aute aliqua tempor nostrud non dolore. Veniam id labore culpa non. Mollit nostrud officia nisi deserunt anim magna id ad magna cillum qui sunt.</b>
							</p>
						</div>
					</div>
					<SubMenuRelaciones />
				</section>
			</div>
		);
	}

}
