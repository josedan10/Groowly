import React from 'react';
import Swipeable from 'react-swipeable';

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

		document.getElementsByTagName('body')[0].style.overflow = 'hidden';
	}
    
	closeWork() {
		let workDisplay = document.getElementById('work');
		workDisplay.classList.add('slideOutUp');

		document.getElementsByClassName('target')[0].classList.remove('target');

		setTimeout(() => {
			this.setState({
				work: null
			});

			if (window.innerWidth <= 768)
				document.getElementsByTagName('body')[0].style.overflow = 'scroll';
		}, 800);
	}

	render() {
		let workDisplay;

		if (this.state.work !== null)
			workDisplay = (
				<Swipeable onSwipingUp={this.closeWork.bind(this)}>	
					<div className='flex-center work-display slideInDown' id='work' onClick={this.closeWork.bind(this)}>
						<Swipeable onSwipingUp={this.closeWork.bind(this)}>
							<img src={'src/img/works/' + this.props.works[this.state.work].image} />
						</Swipeable>
						<Swipeable onSwipingUp={this.closeWork.bind(this)}>
							<div className='info flex-center'>
								<h2>{this.props.works[this.state.work].name}</h2>
								<p>{this.props.works[this.state.work].description}</p>
								<p><a href={'http://' + this.props.works[this.state.work].website}>{this.props.works[this.state.work].website}</a></p>
							</div>
						</Swipeable>
					</div>
				</Swipeable>
			);
		else
			workDisplay = <div className='flex-center work-display' id='work'/>;
        

		return (
			<div className='flex-center'>

				<div className='flex-center works-container'>
					
					{this.props.works.map((work, index) => <div className='flex-center' key={'work-' + index}><img onClick={this.showWork.bind(this)} className='work-image' src={'src/img/works/' + work.image } /></div>)}
					
				</div>

				{workDisplay}

			</div>
		);
	}
}
