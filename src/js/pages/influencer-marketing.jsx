import React from 'react';
import { SubMenuMarketing } from '../nav/nav-menu';

export default class InfluencerMarketing extends React.Component {

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
							<h2>INFLUENCER <br/> MARKETING</h2>
						</div>
						<div className='info'>
							<p>
								<b>Qui exercitation occaecat amet nulla elit pariatur culpa tempor excepteur. Nostrud cillum minim voluptate aliquip Lorem enim dolore duis Lorem commodo anim anim. Amet anim nisi ad eu culpa eiusmod consequat et sit irure nisi dolor. Fugiat do eiusmod ut amet enim anim mollit. Officia cillum id Lorem voluptate laboris qui in eu ut laboris. Amet aute non do ullamco tempor culpa. Esse commodo consequat culpa est cillum excepteur sint proident consequat.</b>
							</p>
						</div>
					</div>
					<SubMenuMarketing />
				</section>
			</div>
		);
	}

}