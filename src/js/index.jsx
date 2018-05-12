import React from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
// import { HashRouter, BrowserRouter, Route, Switch, hashHistory, browserHistory, NavLink } from 'react-router-dom';
import Nav from './nav/nav-menu';
// import Home from './pages/home';
// import SelectedWorks from './pages/selected-works';
// import OwnCommunity from './pages/own-community';
// import Videos from './pages/videos';
// import Contact from './pages/contact';
// import Marketing from './pages/marketing';
// import Relaciones from './pages/relaciones';
// import Services from './pages/services';
// import Team from './pages/team';
// import Clients from './pages/clients';

// SubMenu Marketing
// import Estrategia from './pages/estrategia';
// import DesarrolloWebApps from './pages/desarrollo-web-apps';
// import ManejoRRSS from './pages/manejo-rrss';
// import InfluencerMarketing from './pages/influencer-marketing';
// import CreacionMarcas from './pages/creacion-marcas';
// import CreacionContenido from './pages/creacion-contenido';

// SubMenu Relaciones
// import EstrategiasComunicacion from './pages/estrategias-comunicacion';
// import ConvocatoriaMedios from './pages/convocatoria-medios';
// import PosicionamientoMedios from './pages/posicionamiento-medios';
// import ContenidoEditorial from './pages/contenido-editorial';
// import ProduccionEventos from './pages/produccion-eventos';

var config = require('./config');
config = config.config;

function noScroll(e) {
	e.preventDefault();
}


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nav: null
		};
	}

	componentWillMount() {
		this.chooseNav();
	}

	chooseNav() {
		let navType;

		if (window.innerWidth < 768) {
			navType = 'nav-movil';
		} else {
			navType = 'nav-left';
		}

		this.setState({
			nav: navType
		});
	}

	render() {
		window.addEventListener('resize', this.chooseNav.bind(this), false);
		const logo = (
			<div className='flex-center logo'>
				<a href='#/'>
					<ReactSVG
						path='./src/img/logo.svg'
						className='flex-center'
						wrapperClassName='flex-center'
					/>
				</a>
			</div>
		);
		return (
			
			<div>
				{/* <header>
					<div className='icons'>
						<img src='src/img/logo.svg' alt='' />
						<span className='icon icon-menu8' onClick={this.toogleMenu}/>
					</div>
				</header>

				<aside className='right' id='social'>
					<ul>
						<li><a href='https://www.facebook.com/groowly' target='_blank'><i className='icon icon-facebook' /></a></li>
						<li><a href='https://www.twitter.com/groowly' target='_blank'><i className='icon icon-twitter' /></a></li>
						<li><a href='https://www.instagram.com/groowly' target='_blank'><i className='icon icon-instagram' /></a></li>
					</ul>
				</aside> */}

				{/* {this.props.children}  */}
				<header>
					<Nav animation={this.toogleMenu.bind(this)} tipo={this.state.nav} logo={config.getLogo()} links={config.getLinks()} decoration={config.getDecoration()} />
					<div className='icons'>
						{logo}
						<span className='icon icon-dehaze' onClick={this.toogleMenu} id='menu-icon'/>
						
					</div>
				</header>
				{/* {this.props.children} */}
			</div>
		);
	}
}

ReactDOM.render(	
	<Nav animation={this.toogleMenu.bind(this)} tipo={this.state.nav} logo={config.getLogo()} links={config.getLinks()} decoration={config.getDecoration()} />
	, document.getElementById('nav')
);
