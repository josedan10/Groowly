import React from 'react';
import { SubMenuMarketing } from '../nav/nav-menu';

export default class ManejoRRSS extends React.Component {

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
							<h2>MANEJO <br/> RRSS</h2>
						</div>
						<div className='info'>
							<p>
								<b>Laboris nulla id anim minim adipisicing est sunt esse non Lorem duis adipisicing aliquip fugiat. Cupidatat qui cillum laborum elit. Mollit nostrud sunt qui esse labore occaecat sit aliqua deserunt velit dolor consequat.</b>
							</p>
						</div>
					</div>
					<SubMenuMarketing />
				</section>
			</div>
		);
	}

}
