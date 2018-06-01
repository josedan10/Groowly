import axios from 'axios';
class Config {
	constructor(links, logo, baseURL, clientes, communities) {
		this.links = links;
		this.baseURL = baseURL;
		this.clientes = clientes;
		this.redes = ['twitter', 'facebook', 'instagram', 'youtube'];
		this.logo = logo;
		this.communities = communities;
		this.decoration = ['Who we are', 'What we do', 'How we connect', 'Enjoy', 'Where we are', 'Also we'];
		this.team = [
			{
				nombre: 'Jose Quintero',
				cargo: 'Web Developer',
				img: 'src/img/meCaricautre.jpg',
				descripcion: 'Excepteur culpa dolor labore reprehenderit nisi do id ipsum culpa. Occaecat dolore reprehenderit cillum dolor enim anim ex qui sit duis enim. Fugiat cupidatat laborum ex aute ullamco.'
			},
			{
				nombre: 'Jose Quintero',
				cargo: 'Web Developer',
				img: 'src/img/meCaricautre.jpg',
				descripcion: 'Cupidatat occaecat commodo laborum nostrud. Irure velit amet Lorem proident tempor ut sunt. Velit tempor mollit ad fugiat dolore sint Lorem non voluptate.'
			},
			{
				nombre: 'Jose Quintero',
				cargo: 'Web Developer',
				img: 'src/img/meCaricautre.jpg',
				descripcion: 'Enim ea commodo excepteur adipisicing. Enim enim do sunt sit sit sunt commodo. Velit esse voluptate anim sint laborum duis. Qui Lorem exercitation consectetur mollit consequat ullamco. Id ad in minim ullamco laborum incididunt occaecat aliqua dolor amet eu. Aute nostrud reprehenderit dolor laboris commodo duis incididunt culpa minim excepteur eiusmod nisi exercitation.'
			},
			{
				nombre: 'Jose Quintero',
				cargo: 'Web Developer',
				img: 'src/img/meCaricautre.jpg',
				descripcion: 'Commodo id ea aliquip aute eiusmod in laboris aliquip incididunt aliqua et ullamco. Aliqua qui esse dolor ea laboris proident reprehenderit culpa excepteur dolore cupidatat. Eiusmod voluptate sunt minim irure amet in. Dolor excepteur Lorem eu occaecat mollit dolor elit aute ullamco ut veniam commodo voluptate.'
			},
			{
				nombre: 'Jose Quintero',
				cargo: 'Web Developer',
				img: 'src/img/meCaricautre.jpg',
				descripcion: 'Consequat esse velit reprehenderit cillum sunt consequat voluptate cupidatat voluptate amet eu. Eu quis anim anim voluptate laboris minim deserunt. Non aliquip dolor sunt eu proident et laborum eiusmod proident pariatur laborum laboris. Quis laborum cupidatat nulla consequat officia incididunt consectetur occaecat in. Labore reprehenderit elit proident aliquip velit ea.'
			},
			{
				nombre: 'Jose Quintero',
				cargo: 'Web Developer',
				img: 'src/img/meCaricautre.jpg',
				descripcion: 'Sit ex esse fugiat cupidatat ullamco nostrud eiusmod proident veniam ea consectetur eiusmod incididunt quis. Sint proident duis et est ullamco adipisicing esse nisi. Anim excepteur tempor duis id incididunt duis enim consequat cupidatat. Ad et sunt id Lorem labore duis adipisicing exercitation eu nulla. Deserunt non reprehenderit mollit est.'
			}
		];

		this.works = [
			{
				image: 'Carolinawork.jpg',
				name: 'Carolina',
				website: 'www.carolinaweb.com',
				description: 'Reprehenderit sit ut cillum dolore laboris proident irure est officia ea sunt velit sit mollit. Aliquip commodo cupidatat eiusmod amet irure. Veniam anim qui cillum velit pariatur consequat quis mollit adipisicing ullamco irure.'
			},
			{
				image: 'Equilibriowork.jpg',
				name: 'Equilibrio370',
				website: 'www.equilibrio370.com',
				description: 'Amet sit aliquip aute officia ad tempor et adipisicing magna ad ullamco est. Sit fugiat Lorem id id dolore velit quis in. Cillum officia proident adipisicing deserunt. Elit ex magna deserunt sit sunt ex nostrud officia.'
			},
			{
				image: 'Fierawork.jpg',
				name: 'Fiera',
				website: 'www.fiera.com',
				description: 'Ipsum fugiat veniam officia aute Lorem ullamco id nostrud. In nostrud ad magna adipisicing tempor laboris deserunt duis exercitation fugiat amet mollit velit. Id exercitation est ipsum sunt est elit. Id sunt nisi enim aute aliqua sint magna cupidatat tempor tempor nostrud exercitation voluptate.'
			},
			{
				image: 'Gabrielawork.jpg',
				name: 'Gabriella Nardelli',
				website: 'www.gabriellanardelli.com',
				description: 'Incididunt ut nulla nostrud id mollit officia. Ullamco eu veniam mollit laboris nulla. Ut magna nisi est pariatur.'
			},
			{
				image: 'Kathieswork.jpg',
				name: 'Kathies Closet',
				website: 'www.kathiescloset.mx',
				description: 'Laboris velit id ut nulla ea id in esse ullamco aliquip reprehenderit do. Incididunt consectetur nostrud ea tempor Lorem ullamco aute nostrud do id duis. Proident adipisicing esse cupidatat mollit do excepteur aliquip sit esse irure do sunt.'
			},
			{
				image: 'Venuswork.jpg',
				name: 'VeCoolStyle',
				website: 'www.vecoolstyle.com',
				description: 'Cillum ut labore occaecat eiusmod labore duis eiusmod ad irure id dolor minim amet consequat. Pariatur ex id irure consequat consectetur minim tempor magna do anim adipisicing. Do nostrud eiusmod dolor reprehenderit veniam ea culpa sunt. Exercitation laborum do aliquip ad amet exercitation. Sunt reprehenderit sit ut exercitation non nostrud est elit cillum. Veniam excepteur dolor officia fugiat veniam fugiat nisi pariatur voluptate. Excepteur laboris sit commodo exercitation adipisicing ipsum officia cupidatat laboris amet proident.'
			},
			{
				image: 'Expogrowwork.jpg',
				name: 'Expo Grow',
				website: 'www.expogrow.com',
				description: 'Deserunt anim consectetur voluptate eiusmod deserunt eiusmod. Est magna aute laborum nostrud exercitation veniam nisi Lorem aliquip. Excepteur incididunt excepteur aliquip duis sit nostrud enim excepteur eu reprehenderit cillum.'
			},
			{
				image: 'Fermedinawork.jpg',
				name: 'Fermedina',
				website: 'www.fermedina.com',
				description: 'Eiusmod minim ad irure id in consequat reprehenderit et sint ex. Proident velit nisi voluptate deserunt nostrud amet laboris ex ullamco non laboris eiusmod sint. Non elit pariatur pariatur aute ex eu aute amet culpa tempor deserunt veniam. Dolor fugiat nisi eu enim aliquip do proident consequat officia.'
			},
			{
				image: 'Igpmwork.jpg',
				name: 'IGPM',
				website: 'www.igpm.com',
				description: 'Consequat excepteur non duis cupidatat officia. Cillum enim ut minim tempor do nulla labore magna. Et aliqua velit ad irure do ut sunt aliqua ipsum aute sint dolore ipsum ipsum. In cillum amet cupidatat dolore excepteur. Ipsum elit magna dolore sunt commodo quis voluptate aliqua non commodo sunt.'
			},
			{
				image: 'Meltingwork.jpg',
				name: 'Meltin',
				website: 'www.meltin.com',
				description: 'Ut nulla deserunt commodo ut labore exercitation nisi labore. Ex deserunt elit nisi adipisicing minim qui sint tempor eu ea. Adipisicing do et ut voluptate mollit nulla dolor do occaecat adipisicing dolor reprehenderit. Adipisicing ex proident sit anim consectetur proident est elit id do.'
			},
			{
				image: 'Alfonsowork.jpg',
				name: 'Alfonso',
				website: 'www.alfonso.com',
				description: 'Officia officia amet ad aute veniam qui minim esse do cillum dolor nostrud. Laboris officia velit aute voluptate esse quis et excepteur tempor esse laborum ut anim enim. Ullamco excepteur cillum ullamco ut qui laborum ea incididunt qui mollit enim. Et sunt laboris eu minim eiusmod incididunt id eu aute amet. Eiusmod voluptate exercitation sunt labore eiusmod. Aute commodo irure anim ex quis fugiat voluptate labore id sint consequat voluptate.'
			},
			{
				image: 'Bathwork.jpg',
				name: 'Bath',
				website: 'www.bath.com',
				description: 'Est velit elit reprehenderit eu. Culpa tempor enim laborum in adipisicing nulla voluptate in pariatur magna occaecat pariatur enim aute. Cupidatat labore mollit occaecat magna ea. Sit ut reprehenderit ullamco ut Lorem exercitation aliquip pariatur. Cillum commodo mollit adipisicing sunt. Ipsum exercitation nulla dolore sunt laboris dolor.'
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

	getTeam() {
		return this.team;
	}
	
	getDecoration() {
		return this.decoration;
	}
}

// Links para el menu y las redes
const links = ['About', 'Marketing', 'Relaciones', 'Videos', 'Contact'/* , 'Community'*/];
// const redes = ['twitter', 'facebook', 'instagram', 'youtube'];

// Imagen del logo
const logo = 'src/img/logo.svg';

// URL
const baseURL = '/';

// Clientes
const clientes = ['mundoejecutivo', 'alfonso', 'igpm', 'expogrow', 'bath', 'themeltinhot', 'fiera', 'vecoolstyle', 'kathies', 'equilibrio370', 'caro-mansabel', 'unilever'];

// Comunidades
// const communities = [
// 	{
// 		name: 'Groowly',
// 		followers: 78.9,
// 		posts: 41,
// 		img: 'src/img/communities/groowly-community.jpg',
// 		description: 'Groowly Mindful Marketing.'
// 	},
// 	{
// 		name: 'DibujosEs',
// 		followers: 971,
// 		posts: 4.377,
// 		img: 'src/img/communities/dibujoses-community.jpg',
// 		description: 'DibujosEs.com | ART, CONNECT. Dibujoses is one platform for sharing artwork worldwide.' 
// 	},
// 	{
// 		name: 'RecetasEs',
// 		followers: 392,
// 		posts: 642,
// 		img: 'src/img/communities/recetases-community.jpg',
// 		description: 'Nos gusta cocinar y conocer contigo.'
// 	},
// 	{
// 		name: 'Travel',
// 		followers: null,
// 		posts: null,
// 		img: 'src/img/communities/travel-community.jpg',
// 		description: ''
// 	},
// 	{
// 		name: 'Celine',
// 		followers: null,
// 		posts: null,
// 		img: 'src/img/communities/celine-community.jpg',
// 		description: ''
// 	}
// ];

var communities;

axios.get('/admin/communities').then(res => {
	communities = res.data;
	// res.json();
});
// .then(
// 	(result) => {
// 		communities = result;
// 		console.log(result);
// 	},

// 	(error) => {
// 		console.log(error);
// 	}
// );

// console.log(communities);
let config = new Config(links, logo, baseURL, clientes, communities);

export default config;
