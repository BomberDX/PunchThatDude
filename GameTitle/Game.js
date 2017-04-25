var theGame = function(game){
	score = 0;
    p1_wins = false;
    p2_wins = true;
    var gameJojo;
    var gameDoge;
    var cursors;
    var leftKey;
    var rightKey;
    var upKey;
    var downKey;
    gameDogeWins = true;
    gameJojoWins = false;
    gameDoge1 = 2;
    gameJojo1 = 2;
    
}

theGame.prototype = {
    
	create: function(){
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.setBounds(0,0,1200,550);
        var background = this.game.add.sprite(0,0,"FightBackG");
        background.height=600;
        background.width= 1200;
        
        gameDoge = this.game.add.sprite(250,430,"Doge");
        gameDoge.anchor.setTo(0.5,0.5)
        gameDoge.animations.add('walk', null, 30, true);
        gameJojo = this.game.add.sprite(950,430,"Jojo");
        gameJojo.anchor.setTo(0.5,0.5)
        gameJojo.animations.add('walk', [16,17,18,19,20,21], 10, true);
        
        
        
        this.game.physics.arcade.gravity.y = 100;
        
        this.game.physics.enable(gameJojo);
        this.game.physics.enable(gameDoge);
        gameDoge.body.drag.x = 100
        gameJojo.body.drag.x = 100
        gameDoge.body.collideWorldBounds = true;
        gameJojo.body.collideWorldBounds = true;
        
        

        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);

//        sprite1.body.collideWorldBounds = true;
        gameJojo.body.bounce.y = 0.5;
        gameJojo.body.bounce.x = 0.5;
        gameDoge.body.bounce.y = 0.5;
        gameDoge.body.bounce.x = 0.5;
//    
//        sprite2.body.collideWorldBounds = true;
//        sprite2.body.bounce.y = 0.8;
//        gameJojo.body.gravity.y = 10000; 
//        gameDoge.body.gravity.y = 10000;
//    
//        sprite3.body.collideWorldBounds = true;
//        sprite3.body.bounce.y = 0.8;
//        sprite3.body.gravity.y = 50;
//
//        sprite4.body.allowGravity = false;

	},
    update:function() {
        listenForKeyPresses(gameJojo, this.cursors);
        listenForKeyPresses(gameDoge, {
            up: this.upKey,
            down: this.downKey,
            left: this.leftKey,
            right: this.rightKey
        });   
        this.game.physics.arcade.collide(gameJojo, gameDoge)
        
//        game.physics.arcade.collide(gameJojo, gameDoge);
        this.game.physics.arcade.collide(gameJojo, gameDoge, personHit);
    }
}
function personHit(gameJojo, gameDoge){
    gameJojo.body.velocity.x > gameDoge.body.velocity.x
    if (gameJojo.body.velocity.x > gameDoge.body.velocity.x){
        gameDoge1 = gameDoge1 - 1;
        console.log(gameDoge1);
    }
    if (gameJojo.body.velocity.x < gameDoge.body.velocity.x) {
        gameJojo1 = gameJojo1 - 1;
        console.log(gameJojo1);
    }
//    if(gameJojo1 === 0){
////        gameJojo.kill();
//        gameJojoWins = false;
//        gameDogeWins = true;
//        this.game.state.start("GameOver");
//    }
//    if(gameDoge1 === 0){
////        gameDoge.kill();
//        gameJojoWins = true;
//        gameDogeWins = false;
//        this.game.state.start("GameOver");
//    }
}

function listenForKeyPresses(gamePerson, cursors) {
    if (cursors.up.isDown){
        gamePerson.body.acceleration.y = -800
        //gamePerson.body.velocity.y = -600
    }
        else if(cursors.down.isDown) {
            //gamePerson.body.velocity.y = 600
            gamePerson.body.acceleration.y = 800
        }
        else if(cursors.left.isDown) {
            gamePerson.animations.play('walk');
            gamePerson.scale.x = -1;
            gamePerson.body.acceleration.x = -800
        }
        else if(cursors.right.isDown) {
            gamePerson.animations.play('walk');
            gamePerson.scale.x = 1;
            gamePerson.body.acceleration.x = 800
        }
        else{
            gamePerson.animations.stop('walk' ,true);
            gamePerson.body.acceleration.x = 0;
            gamePerson.body.acceleration.y = 0;
        }
<<<<<<< HEAD
    }
=======

}

>>>>>>> origin/master
