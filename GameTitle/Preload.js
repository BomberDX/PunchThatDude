var preload = function(game){}

preload.prototype = {
	preload: function() {
		console.log("in preload of preload.js");
		var loadingBar = this.add.sprite(160,240,"loading");
		loadingBar.anchor.setTo(0.5,0.5);
		this.game.load.spritesheet("Doge","assets/Doge_Sprite_Sheet.png",81,81,9);
        console.log("Loaded DogeSprite")
<<<<<<< HEAD
		this.game.load.spritesheet("Jojo","assets/JotaroKid.png",119,87,27);
=======
		this.game.load.spritesheet("Jojo","assets/JotaroKid.png",125,95,51);
>>>>>>> origin/master
		console.log("Loaded JojoSprite");
        this.game.load.spritesheet("JojoRun","assets/JotaroKidRun.png",120,71,6)
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
        this.game.load.image("dogeWin","assets/p1.png");
        this.game.load.image("jojoWin","assets/p2.png");
     
	},
	create: function(){
		console.log("Starting GameTitle");
		this.temp = this.add.sprite(100,100,"play");
		this.game.state.start("GameTitle");
	}
}