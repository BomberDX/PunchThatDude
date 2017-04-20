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
        gameJojo = this.game.add.sprite(950,430,"Jojo");
        gameJojo.anchor.setTo(0.5,0.5)
        //this.game.physics.arcade.gravity.y = 100;
        
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
<<<<<<< HEAD
        this.game.state.start("GameOver");
//        listenForKeyPresses(gameJojo, this.cursors);
//        listenForKeyPresses(gameDoge, {
//            up: this.upKey,
//            down: this.downKey,
//            left: this.leftKey,
//            right: this.rightKey
//        });   
    }
}

//function listenForKeyPresses(gamePerson, cursors) {
//    if (cursors.up.isDown){
//        gamePerson.body.velocity.y = -600;
//        
//    }
//    else if(cursors.down.isDown) {
//        gamePerson.body.velocity.y = 600;
//
//        }
//<<<<<<< HEAD
//        else if(cursors.left.isDown) {
//            gamePerson.scale.x = -1;
//            gamePerson.body.velocity.x = -350;
//        }
//        else if(cursors.right.isDown) {
//            gamePerson.scale.x = 1;
//            gamePerson.body.velocity.x = 350;
//=======
//        else if(this.cursors.left.isDown) {
//            gameJojo.scale.x = -1;
//            gameJojo.body.velocity.x = -350;
//
//        }
//        else if(this.cursors.right.isDown) {
//            gameJojo.scale.x = 1;
//            gameJojo.body.velocity.x = 350;
//>>>>>>> master
//        }
//        else{
//            gamePerson.body.velocity.x = 0;
//            gamePerson.body.velocity.y = 0;
//        }
//<<<<<<< HEAD
//=======
//    //    if (cursors.W.isDown){
//    //        gameDoge.body.velocity.y = -100
//    //    }
//    //    else{
//    //        gameDoge.body.velocity.x = 0;
//    //        gameDoge.body.velocity.y = 0;
//    //    }
//        
////        else {
////            gameDoge.body.velocity.x = 0;
////            gameDoge.body.velocity.y = 0;
////        }
//
//
//        if ( this.leftKey.isDown ){
//            gameDoge.body.velocity.x = -350;
//            gameDoge.scale.x = -1;
//        }
//        else if (this.rightKey.isDown){
=======
        listenForKeyPresses(gameJojo, this.cursors);
        listenForKeyPresses(gameDoge, {
            up: this.upKey,
            down: this.downKey,
            left: this.leftKey,
            right: this.rightKey
        });   
        this.game.physics.arcade.collide(gameJojo, gameDoge)
    }
}

function listenForKeyPresses(gamePerson, cursors) {
    if (cursors.up.isDown){
        gamePerson.body.acceleration.y = -200
        //gamePerson.body.velocity.y = -600
    }
        else if(cursors.down.isDown) {
            //gamePerson.body.velocity.y = 600
            gamePerson.body.acceleration.y = 200
        }
        else if(cursors.left.isDown) {
            gamePerson.scale.x = -1;
            gamePerson.body.acceleration.x = -200
        }
        else if(cursors.right.isDown) {
            gamePerson.scale.x = 1;
            gamePerson.body.acceleration.x = 200
        }
        else{
            gamePerson.body.acceleration.x = 0;
            gamePerson.body.acceleration.y = 0;
        }
    //    if (cursors.W.isDown){
    //        gameDoge.body.velocity.y = -100
    //    }
    //    else{
    //        gameDoge.body.velocity.x = 0;
    //        gameDoge.body.velocity.y = 0;
    //    }
        
//        else {
//            gameDoge.body.velocity.x = 0;
//            gameDoge.body.velocity.y = 0;
//        }


//        if (cursors.left.isDown){
//            gameDoge.body.velocity.x = -350;
//            gameDoge.scale.x = -1;
//        }
//        else if (cursors.right.isDown){
>>>>>>> origin/master
//            gameDoge.body.velocity.x = 350;
//            gameDoge.scale.x = 1;
//        }
//        else if (this.upKey.isDown){
//            console.log("UP KEY PRESSED");
//            gameDoge.body.velocity.y = -600;    
//            console.log(gameDoge.body.velocity.y);
//        }
//        else if ( this.downKey.isDown){
//            console.log("DOWN KEY PRESSED");
//            gameDoge.body.velocity.y = 600;
//            console.log(gameDoge.body.velocity.y);
//        }
//        else{
<<<<<<< HEAD
//            gameDoge.body.velocity.x = 0;
//            gameDoge.body.velocity.y = 0;
//        }
////        else if(!downKey.justPressed() && !upKey.justPressed() && !rightKey.justPressed() && !leftKey.justPressed()){
////            gameDoge.body.velocity.x = 0;
////            gameDoge.body.velocity.y = 0;
////        }
//    }
//>>>>>>> master
//}
=======
//            gameDoge.body.velocity.x = 0;
//            gameDoge.body.velocity.y = 0;
//        }
//        else if(!downKey.justPressed() && !upKey.justPressed() && !rightKey.justPressed() && !leftKey.justPressed()){
//            gameDoge.body.velocity.x = 0;
//            gameDoge.body.velocity.y = 0;
//        }
    }
>>>>>>> origin/master
