var preload = function(game){}

preload.prototype = {
	preload: function() {
		console.log("in preload of preload.js");
		var loadingBar = this.add.sprite(160,240,"loading");
		loadingBar.anchor.setTo(0.5,0.5);
		this.game.load.spritesheet("Doge","assets/Doge_Sprite_Sheet.png",83,81,35);
        console.log("Loaded DogeSprite")
		this.game.load.spritesheet("Jojo","assets/JotaroKid1.png",125,95,51);
		console.log("Loaded JojoSprite");
        this.game.load.image("background","assets/Background.jpg");
        console.log("Loaded TitleBackground")
		this.game.load.image("play","assets/play.png");
		console.log("loaded play");
		this.game.load.image("Platform","assets/platform.png");
		console.log("loaded platform");
		this.game.load.image("gameover","assets/gameover.png");
		console.log("loaded gameover");
        this.game.load.spritesheet("FightBackG","assets/battleBackground.png");
        console.log("loaded GameBackground");
		this.load.setPreloadSprite(loadingBar);
	    this.game.load.image("HP","assets/HP.png")
        console.log("loaded ")
                       },
	create: function(){
		console.log("Starting GameTitle");
		this.temp = this.add.sprite(100,100,"play");
		this.game.state.start("GameTitle");
	}
}