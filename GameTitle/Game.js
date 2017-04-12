var theGame = function(game){
	score = 0;
    var gameJojo;
    var gameDoge;
    var cursors;
    var leftKey;
    var rightKey;
    var upKey;
    var downKey;
}

theGame.prototype = {
	create: function(){
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 100;
        this.game.world.setBounds(0,0,1200,570);
        
         var background = this.game.add.sprite(0,0,"FightBackG");
                background.height=600;
                background.width= 1200;
        gameDoge = this.game.add.sprite(250,300,"Doge");
        gameDoge.anchor.setTo(0.5,0.5);
        gameJojo = this.game.add.sprite(950,475,"Jojo");
        gameJojo.anchor.setTo(0.5,0.5);
        this.game.physics.enable(gameJojo);
        this.game.physics.enable(gameDoge);
        gameDoge.body.collideWorldBounds = true;
        gameJojo.body.collideWorldBounds = true;
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
//        sprite1.body.collideWorldBounds = true;
        gameJojo.body.bounce.y = 0.5;
//    
//        sprite2.body.collideWorldBounds = true;
//        sprite2.body.bounce.y = 0.8;
        gameJojo.body.gravity.y = 10000; 
        gameDoge.body.gravity.y = 10000;
//    
//        sprite3.body.collideWorldBounds = true;
//        sprite3.body.bounce.y = 0.8;
//        sprite3.body.gravity.y = 50;
//
//        sprite4.body.allowGravity = false;

	},
    update:function() {
        
    if (this.cursors.up.isDown){
        gameJojo.body.velocity.y = -500;
        
    }
    else if(this.cursors.down.isDown) {
        gameJojo.body.velocity.y = 500;

    }
    else if(this.cursors.left.isDown) {
        gameJojo.body.velocity.x = -250;

    }
    else if(this.cursors.right.isDown) {
        gameJojo.body.velocity.x = 250;
    }
    else{
        gameJojo.body.velocity.x = 0;
        gameJojo.body.velocity.y = 0;
    }

        if ( this.leftKey.isDown ){
            gameDoge.body.velocity.x = -100;
        }
        else if (this.rightKey.isDown){
            gameDoge.body.velocity.x = 100;
        }
        else if (this.upKey.isDown){
            console.log("UP KEY PRESSED");
            gameDoge.body.velocity.y = -500;
            console.log(gameDoge.body.velocity.y);
        }
        else if ( this.downKey.isDown){
            console.log("DOWN KEY PRESSED");
            gameDoge.body.velocity.y = 500;
            console.log(gameDoge.body.velocity.y);
        }
        else{
            gameDoge.body.velocity.x = 0;
            gameDoge.body.velocity.y = 0;
        }
//        else if(!downKey.justPressed() && !upKey.justPressed() && !rightKey.justPressed() && !leftKey.justPressed()){
//            gameDoge.body.velocity.x = 0;
//            gameDoge.body.velocity.y = 0;
//        }
    }
}