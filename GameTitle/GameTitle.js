var gameTitle = function(game){}

gameTitle.prototype = {
	create: function(){
        var background = this.game.add.sprite(0,0,"background");
        background.height=600;
        background.width= 1200;
        
		var gameDoge = this.game.add.sprite(250,430,"Doge");
		gameDoge.anchor.setTo(0.5,0.5);
        gameDoge.scale.setTo(2.0,2.0);
        var gameJojo = this.game.add.sprite(950,430,"Jojo");
        gameJojo.anchor.setTo(0.5,0.5);
        gameJojo.scale.setTo(2.0,2.0);
		console.log("in create of gameTitle.js");
		var playButton = this.game.add.button(600,400,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}