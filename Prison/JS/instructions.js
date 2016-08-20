var instructionsState = {

	 create: function (){
		

		var instructions = game.add.text(80,game.world.height/3, 'This game uses the arrow keys to navigate.\n\nClick inside the screen to lock the browser scroll.', {font: '25px Arial', fill: '#ffffff'});
		var startLabel = game.add.text(80,game.world.height-80, 'Press the "Z" key to continue', {font: '25px Arial', fill: '#ffffff'});
		var zkey = game.input.keyboard.addKey(Phaser.Keyboard.Z);

		zkey.onDown.addOnce(this.start, this);
	},

	 start: function (){
		game.state.start('play');
	}

};