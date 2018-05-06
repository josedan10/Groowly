import React from 'react';
import { SubMenuMarketing } from '../nav/nav-menu';

export default class DesarrolloWebApps extends React.Component {

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
							<h2>DESARROLLO <br/> WEB / APPS</h2>
						</div>
						<div className='info'>
							<p>
								<b>Incididunt reprehenderit excepteur fugiat voluptate ipsum aliqua occaecat velit ut reprehenderit irure. Dolore nostrud incididunt est elit commodo excepteur excepteur. Esse anim nisi magna eu. Laboris nostrud minim magna eu minim ut laborum mollit sint cillum sit. Ullamco sint cillum laborum qui amet fugiat in cupidatat. Quis ullamco culpa cupidatat ex dolore sit voluptate sit cillum sunt non eiusmod tempor.</b>
							</p>
						</div>
					</div>
					<SubMenuMarketing />
				</section>
			</div>
		);
	}

}
