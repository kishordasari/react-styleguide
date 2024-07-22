module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	webpackConfig: {
		devServer: {
			// Docs: https://codesandbox.io/docs/environment#how-can-i-tell-if-i-am-in-a-container-sandbox
			disableHostCheck: !!process.env.CODESANDBOX_SSE,
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true
							}
						},
					],
				},
			],
		},
	},
	showSidebar: true, // Show sidebar for better navigation
	theme: {
		color: {
			link: '#FF5733',
			linkHover: '#0D8ECF',
			baseBackground: '#33FF74',
			sidebarBackground: '#3333FF',
		},
		fontFamily: {
			base: '"Helvetica Neue", Helvetica, Arial, sans-serif',
		},
	},
};
