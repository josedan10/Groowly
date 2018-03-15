class Config {
	constructor(links, logo, baseURL, clientes, communities) {
		this.links = links;
		this.baseURL = baseURL;
		this.clientes = clientes;
		this.redes = ['twitter', 'facebook', 'instagram', 'youtube'];
		this.logo = logo;
		this.communities = communities;
		this.works = [
			{
				images: ['Carolinawork.jpg']
			},
			{
				images: ['Equilibriowork.jpg']
			},
			{
				images: ['Fierawork.jpg']
			},
			{
				images: ['Gabrielawork.jpg']
			},
			{
				images: ['Kathieswork.jpg']
			},
			{
				images: ['Venuswork.jpg']
			}
		];
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
    
	getCommunities() {
		return this.communities;
	}
}

// Links para el menu y las redes
const links = ['Home', 'Services', 'Works', 'Community', 'Team', 'Clients', 'Contact'];
// const redes = ['twitter', 'facebook', 'instagram', 'youtube'];

// Imagen del logo
const logo = 'src/img/logo.svg';

// URL
const baseURL = '/';

// Clientes
const clientes = ['mundoejecutivo', 'alfonso', 'igpm', 'expogrow', 'bath', 'themeltinhot', 'fiera', 'vecoolstyle', 'kathies', 'equilibrio370', 'caro-mansabel', 'unilever'];

// Comunidades
const communities = [
	{
		name: 'Groowly',
		followers: 78.9,
		posts: 41,
		img: 'src/img/communities/groowly-community.jpg',
		description: 'Groowly Mindful Marketing.'
	},
	{
		name: 'DibujosEs',
		followers: 971,
		posts: 4.377,
		img: 'src/img/communities/dibujoses-community.jpg',
		description: 'DibujosEs.com | ART, CONNECT. Dibujoses is one platform for sharing artwork worldwide.' 
	},
	{
		name: 'RecetasEs',
		followers: 392,
		posts: 642,
		img: 'src/img/communities/recetases-community.jpg',
		description: 'Nos gusta cocinar y conocer contigo.'
	},
	{
		name: 'Travel',
		followers: null,
		posts: null,
		img: 'src/img/communities/travel-community.jpg',
		description: ''
	},
	{
		name: 'Celine',
		followers: null,
		posts: null,
		img: 'src/img/communities/celine-community.jpg',
		description: ''
	}
];


exports.config = new Config(links, logo, baseURL, clientes, communities);
