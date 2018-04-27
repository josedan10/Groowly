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
					app.classList.add('top');
					
					break;
					
				case 38:
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

	removeClasses(tipo) {
		document.getElementById('app').classList.remove('top');

		if (document.getElementById('nav-menu').classList.contains('show')) {
			document.getElementById('nav-menu').classList.remove('show');
		}

		this.changeLinks(tipo);
	}

	changeLinks(tipo) {
		let links = document.querySelectorAll('nav ul li a');
		// Remove classes and add classes
		
		console.log(links);
		// if (tipo == 1) {
			
		// }
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
					<NavLink to='Marketing' onClick={(e) => this.removeClasses(e)} className='links'>
						<div>
							<h1 onClick={() => this.removeClasses(1)}>MAR</h1>
							<h1 onClick={() => this.removeClasses(1)}>KETING</h1>
							<h2 onClick={() => this.removeClasses(1)}><b>DIGITAL</b></h2>
						</div>
					</NavLink>
					<NavLink to='Relaciones' onClick={this.removeClasses.bind(this)} className='links'>
						<div>
							<h1 onClick={() => this.removeClasses(2)}>RELA</h1>
							<h1 onClick={() => this.removeClasses(2)}>CIONES</h1>
							<h2 onClick={() => this.removeClasses(2)}><b>PÚBLICAS</b></h2>
						</div>
					</NavLink>	
				</section>
			</div>
		);

		return home;
	}
}
