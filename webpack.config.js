const path = require('path');
// const webpack = require('webpack');

const config = {

	// entry: './src/js/index.jsx',
	entry: {
		config: './src/js/config.js',
		index: './src/js/index.jsx',
		formContact: './src/js/form-contact/form-contact.jsx',
		presentation: './src/js/presentation-container/presentation.jsx',
		nav: './src/js/nav/nav-menu.jsx'
		// timer: './src/js/timer.config.jsx',
		// slideshow: './src/js/slideshow.config.jsx'
		// slideshow: './src/js/slideshow/swiper-js/source/jquery.slides.js'
	},

	output: {
	    path: path.resolve(__dirname, 'dist'),
		publicPath: '/testing/site/dist/',
		// publicPath: '/dist/',
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
		port: 8080
	},

	devtool: 'inline-source-map',

	optimization: {

	},

	plugins: [
		
	]
};

module.exports = config;
