module.exports = {
  mode: 'production',
	optimization: {
		usedExports: true,
		concatenateModules: true,
		occurrenceOrder: true
	},
	output: {
		pathinfo: true,
	}
};
