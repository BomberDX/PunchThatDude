<<<<<<< HEAD
var theGame = function (game){
    var cursors;
    var stuff;
    var speed = 6;
=======
var theGame = function(game){
	score = 0;
    var gameJojo;
    var gameDoge;
    var cursors;
    
>>>>>>> origin/Sebas-Branch
}

theGame.prototype = {
    
	create: function(){
<<<<<<< HEAD
        
        this.stuff = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"stuff");
//        this.stuff.anchor.setTo(0.5,0.5);
//        var stuff2 = this.game.add.sprite(60,60,"stuff2");
//        stuff.anchor.setTo(0.5,0.5);
        this.game.stage.backgroundColor = '#87CEEB';
        this.cursors = this.game.input.keyboard.createCursorKeys();
        
//        this.wasd = {
//        up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
//        down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
//        left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
//        right: this.game.input.keyboard.addKey(Phaser.Keyboard.D),
//        };
//       
	},
    update: function(){
        if(this.cursors.right.isDown){
//         if(this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
             console.log("right arrow pressed");
            this.stuff.x += this.speed;
        }
    }
};
=======
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.setBounds(0,0,1200,600);
         var background = this.game.add.sprite(0,0,"background");
                background.height=600;
                background.width= 1200;
        gameDoge = this.game.add.sprite(250,430,"Doge");
        gameJojo = this.game.add.sprite(950,430,"Jojo");

        this.game.physics.enable(gameJojo);
        this.game.physics.enable(gameDoge);
        
        gameDoge.body.collideWorldBounds = true;
        gameJojo.body.collideWorldBounds = true;
        cursors = this.game.input.keyboard.createCursorKeys();
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
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
//    if (cursors.W.isDown){
//        gameDoge.body.velocity.y = -100
//    }
//    else{
//        gameDoge.body.velocity.x = 0;
//        gameDoge.body.velocity.y = 0;
    }
    
    if ( leftKey.justPressed() ){
        gameDoge.body.velocity.x = -100;
    }
    else if (rightKey.justPressed){
        gameDoge.body.velocity.x = 100;
    }
    else if (upKey.justPressed){
        gameDoge.body.velocity.y = -100;
    }
    else if (downKey.justPressed){
        gameDoge.body.velocity.y = 100;
    }
    }
}
>>>>>>> origin/Sebas-Branch
