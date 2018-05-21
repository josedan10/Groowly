import React from 'react';
import ReactDOM from 'react-dom';

class Arrow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			interval: null
		};
	}

	componentDidMount() {
		let body = document.getElementsByTagName('body')[0];
		let app = document.getElementById('app');
		let arrowBody = document.getElementById('arrowBody');

		document.onkeydown = (e) => {
			// console.log(document.getElementById('home'))
			if (!(document.getElementById('Home') === null || document.getElementById('Home') === undefined)) {
				console.log(e.keyCode);

				switch (e.keyCode) {
				case 40:
					// Key RowDown
					if (app.classList.contains('down')) {
						app.classList.remove('down');
					} else if (app.classList.contains('top')) {
						break;
					}
					app.classList.add('top');
					//this.stopArrowAnimation();
					
					break;
					
				case 38:
					// Key RowUp
					if (app.classList.contains('top')) {
						app.classList.remove('top');
						app.classList.add('down');
					}
	
					break;
	
				default:
					break;
				}
			}
		};
		
		arrowBody.classList.add('init');
		this.arrowAnimation();

		body.style.overflowY = 'hidden';
	}

	arrowAnimation() {
		let arrowBody = document.getElementById('arrowBody');
		
		this.setState({ interval: setInterval(() => {
			arrowBody.classList.remove('init');
			setTimeout(() => {
				arrowBody.classList.add('init');
			}, 1000);
		}, 5000) });
	}

	scrollTop() {
		let app = document.getElementById('app');

		if (app.classList.contains('down')) {
			app.classList.remove('down');
		}

		app.classList.add('top');		
	}

	render() {
		return (
			<div className='arrow' onClick={this.scrollTop}>
				<div className='line' id='arrowBody'/>
				<img className='head' src='/img/arrowhead.svg'/>
			</div>
		);
	}

}

ReactDOM.render(
	<Arrow />,
	document.getElementById('arrow')
);
