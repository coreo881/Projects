var loadState = {
	preload: function(){
		var loadingLabel = game.add.text(game.world.width/2, game.world.height/2,'loading...', {font: '30px Courier', fill: '#ffffff'});

		var gameImage = game.load.image('gameLogo', '../../assets/prisonWord1.png');
	},

	create: function (){
		game.state.start('menu');
	}

};