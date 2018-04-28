import React from 'react';
import { SubMenuRelaciones } from '../nav/nav-menu';

export default class ContenidoEditorial extends React.Component {

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
							<h2>CONTENIDO<br/>EDITORIAL</h2>
						</div>
						<div className='info'>
							<p>
								<b>Tempor id laboris ullamco commodo occaecat reprehenderit. Duis consectetur do qui cillum sit adipisicing ut sint nulla nulla minim. Cillum do in cillum non ipsum irure consequat ipsum anim cillum deserunt labore amet ipsum. Ipsum voluptate reprehenderit dolor aute sint dolore duis mollit ullamco. Reprehenderit non officia nostrud occaecat ut amet qui quis quis.</b>
							</p>
						</div>
					</div>
					<SubMenuRelaciones />
				</section>
			</div>
		);
	}

}
