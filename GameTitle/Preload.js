var preload = function(game){}

preload.prototype = {
	preload: function() {
		console.log("in preload of preload.js");
		var loadingBar = this.add.sprite(160,240,"loading");
		loadingBar.anchor.setTo(0.5,0.5);
		
		this.game.load.spritesheet("Doge","assets/Doge_Sprite_Sheet.png",100,100);
		console.log("Loaded Doge");
		this.game.load.spritesheet("Jojo","assets/JotaroKid.png",100,100);
		console.log("Loaded Doge");
		this.game.load.image("play","assets/play.png");
		console.log("loaded play");
		this.game.load.image("Platform","assets/platform.png");
		console.log("loaded platform");
		this.game.load.image("Cloudy","assets/CloudyBackground.png");
		console.log("loaded lower");
		this.game.load.image("gameover","assets/gameover.png");
		console.log("loaded gameover");
		this.load.setPreloadSprite(loadingBar);
	},
	create: function(){
		console.log("Starting GameTitle");
		this.temp = this.add.sprite(100,100,"play");
		this.game.state.start("GameTitle");
	}
}