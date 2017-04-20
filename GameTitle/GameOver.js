var gameOver = function(game){
    var winner;
}

gameOver.prototype = {
//	init: function(score){
//		alert("You scored: "+ score);
//	},
	create: function(score, p1_wins, p2_wins) {
//		 var gameOverTitle = this.game.add.sprite(160,160,"gameover");
//		 gameOverTitle.anchor.setTo(0.5,0.5);
		 
        if(p1_wins){
            winner=this.game.add.sprite(0,0,"dogeWin");
        }else{
            winner=this.game.add.sprite(0,0,"jojoWin");
        }
        
        winner.height= this.game.height;
        winner.width = this.game.width;
        
        var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
        
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}