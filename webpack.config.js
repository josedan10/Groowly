const path = require('path');
// const webpack = require('webpack');

const config = {

	// entry: './src/js/index.jsx',
	entry: {
<<<<<<< HEAD
		config: './resources/assets/js/config.js',
		index: './resources/assets/js/index.jsx',
		clients: './resources/assets/js/clients.jsx',
		contact: './resources/assets/js/contact.jsx',
		community: './resources/assets/js/community.jsx',
		main: './resources/assets/js/main.jsx',
		services: './resources/assets/js/services.jsx',
		team: './resources/assets/js/team.jsx',
		works: './resources/assets/js/works.jsx',
		nav: './resources/assets/js/nav/nav-menu.jsx'
		// timer: './src/js/timer.config.jsx',
=======
		config: './src/js/config.js',
		index: './src/js/index.jsx',
		formContact: './src/js/form-contact/form-contact.jsx',
		presentation: './src/js/presentation-container/presentation.jsx',
		nav: './src/js/nav/nav-menu.jsx',
		timer: './src/js/timer.config.jsx'
>>>>>>> frontend
		// slideshow: './src/js/slideshow.config.jsx'
		// slideshow: './src/js/slideshow/swiper-js/source/jquery.slides.js'
	},

	output: {
<<<<<<< HEAD
	    path: path.resolve(__dirname, 'public/js/'),
		// publicPath: '/testing/site/dist/',
		publicPath: './public/js/',
=======
	    path: path.resolve(__dirname, 'dist'),
		// publicPath: '/testing/site/dist/',
		publicPath: '/dist/',
>>>>>>> frontend
	    filename: '[name].min.js' // Archivo de salida
	},

	resolve: {
	    extensions: ['.js', '.jsx']
	},

	module: {
	    rules: [
		    {
		        test: /\.scss$/,
		        use: [{
		                loader: 'style-loader' // creates style nodes from JS strings
		            }, {
		                loader: 'css-loader' // translates CSS into CommonJS
		            }, {
		                loader: 'sass-loader' // compiles Sass to CSS
		            }],
		        exclude: /node_modules/
		    },

		    {
		        test: /\.jsx$/,
		        exclude: /(node_modules|bower_components)/,
		        use: [{
		          	loader: 'babel-loader',
		          	options: {
		              	presets: ['react', 'env', 'es2015']
		          	}
		        }]
		    }
	    ]
	},

	devServer: {
		contentBase: path.join(__dirname, './'),
		historyApiFallback: true,	
		port: 8000
	},

	devtool: 'inline-source-map',

	optimization: {

	},

	plugins: [
		
	]
};

module.exports = config;
