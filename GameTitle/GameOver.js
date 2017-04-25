var gameOver = function(game){
    var winner;
}

gameOver.prototype = {
	init: function(score){
		alert("You scored: "+ score);
	},
	create: function() {
		 var gameOverTitle = this.game.add.sprite(160,160,"gameover");
		 gameOverTitle.anchor.setTo(0.5,0.5);
        
        if(gameDogeWins){
            winner = this.game.add.sprite(0,0,"dogeWin")
        }else{
            winner = this.game.add.sprite(0,0,"JotaroKid1")
        }
        
        winner.height = this.game.height;
        winner.width = this.game.width;
		 var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		 playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}