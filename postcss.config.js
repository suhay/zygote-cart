module.exports = {
	plugins: [
		require('postcss-cssnext')({}),
		require('postcss-nested'),
		require('lost'),
		require('cssnano')({
			autoprefixer: false
		})
	]
}
