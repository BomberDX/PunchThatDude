var preload = function(game){}

preload.prototype = {
	preload: function() {
		console.log("in preload of preload.js");
		var loadingBar = this.add.sprite(160,240,"loading");
		loadingBar.anchor.setTo(0.5,0.5);
		
<<<<<<< HEAD
		this.game.load.image("stuff","assets/stuff.jpg");
		console.log("loaded numbers");
		this.game.load.image("gametitle","assets/gametitle.png");
		console.log("loaded gametitle");
		this.game.load.image("play","assets/play.png");
		console.log("loaded play");
		this.game.load.image("stuff2","assets/stuff2.png");
		console.log("loaded higher");
		this.game.load.image("lower","assets/lower.png");
=======
		this.game.load.spritesheet("Doge","assets/Doge_Sprite_Sheet.png",83,81,35);
        console.log("Loaded DogeSprite")
		this.game.load.spritesheet("Jojo","assets/JotaroKid.png",125,95,51);
		console.log("Loaded JojoSprite");
        this.game.load.image("background","assets/Background.jpg");
        console.log("Loaded TitleBackground")
		this.game.load.image("play","assets/play.png");
		console.log("loaded play");
		this.game.load.image("Platform","assets/platform.png");
		console.log("loaded platform");
		this.game.load.image("Cloudy","assets/CloudyBackground.png");
>>>>>>> origin/Sebas-Branch
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