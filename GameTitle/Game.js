var theGame = function(game){
	score = 0;
    var gameJojo;
    var gameDoge;
    var cursors;
    
}

theGame.prototype = {
	create: function(){
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
         var background = this.game.add.sprite(0,0,"background");
                background.height=600;
                background.width= 1200;
        gameDoge = this.game.add.sprite(250,430,"Doge");
        gameJojo = this.game.add.sprite(950,430,"Jojo");
        this.game.physics.enable(gameJojo);
        this.game.physics.enable(gameDoge);
        cursors = this.game.input.keyboard.createCursorKeys();
//        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
//        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
//        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
//        donwKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	},
    update:function() {
        
    if (cursors.up.isDown){
        gameJojo.body.velocity.y = -100;

    }
    else if(cursors.down.isDown) {
        gameJojo.body.velocity.y = 100;

    }
    else if(cursors.left.isDown) {
        gameJojo.body.velocity.x = -100;

    }
    else if(cursors.right.isDown) {
        gameJojo.body.velocity.x = 100;
    }
    else{
        gameJojo.body.velocity.x = 0;
        gameJojo.body.velocity.y = 0;
    }
    
    //if ( leftKey.justPressed() ){    //do stuff...}
    
    }
}