import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component {
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

				switch (e.keyCode) {
				case 40:
					if (app.classList.contains('down')) {
						app.classList.remove('down');
					}
					this.stopArrowAnimation();
					app.classList.add('top');
					
					break;
					
				case 38:
					if (app.classList.contains('top')) {
						app.classList.remove('top');
						app.classList.add('down');
						this.arrowAnimation();
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

	stopArrowAnimation() {
		let arrowBody = document.getElementById('arrowBody');
		clearInterval(this.state.interval);
		arrowBody.classList.add('init');
	}

	scrollTop() {
		let app = document.getElementById('app');

		if (app.classList.contains('down')) {
			app.classList.remove('down');
		}

		app.classList.add('top');
		this.stopArrowAnimation();
		
	}

	removeClasses() {
		document.getElementById('app').classList.remove('top');

		if (document.getElementById('nav-menu').classList.contains('show')) {
			document.getElementById('nav-menu').classList.remove('show');
		}
	}

	render() {

		const home = (
			<div>
				<section className='home' id='Home'>
					<article>
						<h1>
							Somos la agencia líder en Relaciones <br/>
							Públicas y marketing digital en México.
						</h1>

						<p>
							<b>Estamos en constante evolución para romper paradigmas e ir más lejos. Re-imaginamos la forma de conectar personas en nuestra región y en otras partes del mundo a través de unidades de negocios especializados.</b>
						</p>

						<p>
							<b>Integramos un equipo de profesionales apasionados, críticos, proactivos y empáticos con las necesidades de nuestros clientes, de los medios de comunicación y de los consumidores. Los resultados hablan por sí mismos.</b>
						</p>
					</article>
					<div className='arrow' onClick={this.scrollTop}>
						<div className='line' id='arrowBody'/>
						<img className='head' src='src/img/arrowhead.svg'/>
					</div>
				</section>

				<section className='sections-links'>
					<NavLink to='Marketing' onClick={this.removeClasses} className='links'>
						<div>
							<h1>MAR</h1>
							<h1>KETING</h1>
							<h2><b>DIGITAL</b></h2>
						</div>
					</NavLink>
					<NavLink to='Relaciones' onClick={this.removeClasses} className='links'>
						<div>
							<h1>RELA</h1>
							<h1>CIONES</h1>
							<h2><b>PÚBLICAS</b></h2>
						</div>
					</NavLink>	
				</section>
			</div>
		);

		return home;
	}
}
