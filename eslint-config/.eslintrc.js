module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2020: true,
		node: true,
	},
	extends: [
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'prettier/react',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
