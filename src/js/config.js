class Config {
	constructor(links, logo, baseURL, clientes, redes) {
		this.links = links;
		this.baseURL = baseURL;
		this.clientes = clientes;
        this.redes = redes;
        this.logo = logo;
	}
    
	getLinks() {
		return this.links;
	}

	getLogo() {
		return this.logo;
	}

	getBaseURL() {
		return this.baseURL;
	}

	getClientes() {
		return this.clientes;
	}
}

// Links para el menu y las redes
const links = ['Home', 'Services', 'Works', 'Community', 'Team', 'Clients', 'Contact'];
const redes = ['twitter', 'facebook', 'instagram', 'youtube'];

// Imagen del logo
const logo = 'src/img/logo.svg';

// URL
const baseURL = '/';

// Clientes
const clientes = ['bath', 'caro-mansabel', 'equilibrio370', 'expogrow', 'fiera', 'igpm', 'kathies', 'themeltinhot', 'unilever', 'vecoolstyle', 'alfonso'];

exports.config = new Config(links, logo, baseURL, clientes, redes);
