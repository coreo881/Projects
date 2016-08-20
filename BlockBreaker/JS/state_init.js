var StateInit = {
	preload: function() {
		game.load.image('imgProgVoid', '../../assets/progress_void.png');
		game.load.image('imgProgFull', '../../assets/progress_full.png');
	},

	create: function() {
		game.state.start('StateLoad');
	},
};