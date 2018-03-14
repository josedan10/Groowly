import React from 'react';

export default class SelectedWorks extends React.Component {
    constructor(props){
        super(props);
    }

	render() {
		const selectedWorks = (
			<div>
				<section className='selected-works' id='Selected_Works' onTouchMove={this.props.onTouchMove}>
					<div className='flex-center'>
						<div className='flex-center'>
							<img src='src/img/works/Carolinawork.jpg'/>
						</div>

						<div className='flex-center'>
							<img src='src/img/works/Equilibriowork.jpg'/>
						</div>

						<div className='flex-center'>
							<img src='src/img/works/Fierawork.jpg'/>
						</div>

						<div className='flex-center'>
							<img src='src/img/works/Gabrielawork.jpg'/>
						</div>

						<div className='flex-center'>
							<img src='src/img/works/Kathieswork.jpg'/>
						</div>

						<div className='flex-center'>
							<img src='src/img/works/Venuswork.jpg'/>
						</div>

						<div className='flex-center'>
							<img src='src/img/works/'/>
						</div>

						<div className='flex-center'>
							<img src='src/img/works/'/>
						</div>

						<div className='flex-center'>
							<img src='src/img/works/'/>
						</div>

						<div className='flex-center'>
							<img src='src/img/works/'/>
						</div>

						<div className='flex-center'>
							<img src='src/img/works/'/>
						</div>

						<div className='flex-center'>
							<img src='src/img/works/'/>
						</div>

					</div>
				</section>
			</div>
		);
		return selectedWorks;
	}
}
