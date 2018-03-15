import React from 'react';

export default class Works extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			work: null
		};
	}
    
	showWork(e) {
		let workImages = document.getElementsByClassName('work-image');
		let i;

		e.target.classList.add('target');
        
		for (i = 0; i < workImages.length; i++) {
			if (workImages[i].classList.contains('target')) break;
		}

		this.setState({
			work: i
		});
	}
    
	closeWork(e) {
		e.target.classList.add('slideOutUp');

		document.getElementsByClassName('target')[0].classList.remove('target');

		setTimeout(() => {
			this.setState({
				work: null
			});
		}, 800);
	}

	render() {
		let workDisplay;

		if (this.state.work !== null)
			workDisplay = (
				<div className='flex-center work-display slideInDown' id='work' onClick={this.closeWork.bind(this)}>
					<div/>
				</div>
			);
		else
			workDisplay = <div className='flex-center work-display' id='work'/>;
        

		return (
			<div className='flex-center'>

				<div className='flex-center works-container'>
					
					{this.props.works.map((work, index) => <div className='flex-center' key={'work-' + index}><img onClick={this.showWork.bind(this)} className='work-image' src={'src/img/works/' + work.images[0] } /></div>)}
					
					{/* <div className='flex-center'>
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
					</div> */}

				</div>

                {workDisplay}

			</div>
		);
	}
}