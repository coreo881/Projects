var menuState = {

	 create: function (){
		game.add.sprite(0,game.world.height/3,'gameLogo');

		var startLabel = game.add.text(80,game.world.height-80, 'Press the "Z" key to start', {font: '25px Arial', fill: '#ffffff'});

		var zkey = game.input.keyboard.addKey(Phaser.Keyboard.Z);

		zkey.onDown.addOnce(this.start, this);
	},

	 start: function (){
		game.state.start('instructions');
	}

};