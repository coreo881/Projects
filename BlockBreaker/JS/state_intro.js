var StateIntro = {
	
	create: function () {
		var w = game.world.width;
		var h = game.world.height;
		this.bkg = game.add.tileSprite(0,0,w,h,'imgBkg');
		var marginTop = 30;
		var logo = game.add.image(0,0, 'imgLogo');
		logo.anchor.x = 0.5;
		logo.x = game.world.centerX;
		logo.y = marginTop;

		var outFrame = 0;
		var overFrame = 1;
		var downFrame = 2;
		var btnStart = game.add.button(0,0,'btnStart', this.goToMain, this, overFrame, outFrame, downFrame);
		btnStart.anchor.x = 0.5;
		btnStart.x = game.world.centerX;
		btnStart.y = game.world.centerY;
	},

	update: function (){
		this.bkg.tilePosition.y+= 1;

		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
			this.goToMain();
		}
	},

	goToMain: function() {
		game.state.start('StateLevel0');
	}


};