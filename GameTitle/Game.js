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
    var timer;
    gameDogeWins = true;
    gameJojoWins = false;
    gameDoge1 = 3;
    gameJojo1 = 3;
    var p1_health;
    p1_score = 3;
    var p2_health;
    p2_score = 3;
    
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
        
        var text = this.game.add.text(10,10,"Player1 life:");
        p1_health = this.game.add.group();
        text.addColor("#ff0000",0);
        
        var text2 = this.game.add.text(900,10,"Player2 life:");
        text2.addColor("#ff0000",0);
        p2_health = this.game.add.group();

        updateLives();
        timer = this.game.time.create(false);
//        timer.start();
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
//this.timer.start();
	},
    update:function() {
        listenForKeyPresses(gameJojo, this.cursors);
        listenForKeyPresses(gameDoge, {
            up: this.upKey,
            down: this.downKey,
            left: this.leftKey,
            right: this.rightKey
        });   
        
        this.game.physics.arcade.collide(gameJojo, gameDoge, personHit);
    }
}

function updateLives(){
    
        this.p1_health.callAll('kill');
        console.log(p1_score);
        var j = 385;
        for(var i = 0; i < this.gameDoge1; i++){
            console.log("creating group", i)
            p1_health.create(j+150, 10,'HP');
            j = j + 150;
        }
        this.p1_health.scale.set(.3,.3);
        
        this.p2_health.callAll('kill');
        console.log(p2_score);
        j = 3800;
        for(var i = 0; i < gameJojo1; i++){
            console.log("creating group", i)
            console.log(j);
            p2_health.create(j, 10,'HP');
            j = j - 150;
        }
        p2_health.scale.set(.3,.3);
}

function personHit(gameJojo, gameDoge){
//    console.log("COLLISION");
//    gameJojo.body.velocity.x > gameDoge.body.velocity.x
    
    if (gameJojo.body.velocity.x > gameDoge.body.velocity.x){
//        console.log(timer);
//        if(this.timer > 3){
            decreaseLife(gameDoge1);
//            this.timer.restart();
//        }
        
        
        
//        if(Phaser.Timer.elapsedSince(3)){
//                decreaseLife(gameDoge1);
//        }
//        timer.loop(2000, decreaseLife(gameDoge1), this);
//        gameDoge1 = gameDoge1 - 1;
//        console.log(gameDoge1);
    }
    if (gameJojo.body.velocity.x < gameDoge.body.velocity.x) {
//        if(Phaser.Timer.elapsedSince(3)){
                decreaseLife(gameJojo1);
//        }
//        timer.loop(2000, decreaseLife(gameJojo1), this);
//        gameJojo1 = gameJojo1 - 1;
//        console.log(gameJojo1);
    }
    if (gameJojo.body.velocity.y < gameDoge.body.velocity.y) {
//        if(Phaser.Timer.elapsedSince(3)){
                decreaseLife(gameJojo1);
//        }
//        timer.loop(2000, decreaseLife(gameJojo1), this);
//        gameJojo1 = gameJojo1 - 1;
//        console.log(gameJojo1);
    }
        if (gameJojo.body.velocity.y < gameDoge.body.velocity.y) {
//            timer.update(time.now);
//            if(Phaser.Timer.elapsedSince(3)){
                decreaseLife(gameDoge1);
//            }
//            timer.loop(2000, decreaseLife(gameDoge1), this);
//        gameDoge1 = gameDoge1 - 1;
//        console.log(gameDoge1);
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
function decreaseLife(gamePersonLife){
    gamePersonLife = gamePersonLife - 1;
    console.log(gamePersonLife);
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
    }
