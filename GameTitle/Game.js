var theGame = function(game){
	score = 0;
    var gameJojo;
    var gameDoge;
    var cursors;
    var leftKey;
    var rightKey;
    var upKey;
    var downKey;
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
        gameDoge.anchor.setTo(0.5,0.5);
//        gameDoge.animations.add('walk', null, 30, true);
        gameJojo = this.game.add.sprite(950,430,"Jojo");
        gameJojo.anchor.setTo(0.5,0.5);
//        gameJojo.animations.add('walk',[16,17,18,19,20,21], 10, true);
//        hpbar = this.game.add.sprite(10,10,"HP");
//        hpbar2 = this.game.add.sprite(40,10,"HP");
        var text=this.game.add.text(10,10,"Player1 life:");
        p1_health = this.game.add.group();
        text.addColor("#ff0000",0);
        console.log(p1_score);
        var j = 385;
        for(var i = 0; i < p1_score; i++){
            console.log("creating group ", i)
            p1_health.create(j+150, 10,'HP');
            j = j + 150;
        }
        p1_health.scale.set(.3,.3);
        
        
//        p2_health = this.game.add.group();
//        console.log(p2_score);
//        j = this.game.width;
//        for(var i = 0; i < p2_score; i++){
//            console.log("creating group ", i)
//            p2_health.create(j, 10,'HP');
//            j = j - 15;
//        }
//        p2_health.scale.set(.3,.3);
        
        this.game.physics.arcade.gravity.y = 100;
        
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
        listenForKeyPresses(gameJojo, this.cursors);
        
        listenForKeyPresses(gameDoge, {
            up: this.upKey,
            down: this.downKey,
            left: this.leftKey,
            right: this.rightKey
        });   
        this.game.physics.arcade.collide(gameJojo, gameDoge);
    }
    
}


function listenForKeyPresses(gamePerson, cursors) {
    if (cursors.up.isDown){
        gamePerson.body.velocity.y = -600;
        
        if (cursors.left.isDown){
        }
        if (cursors.right.isDown){
        }
        
    }
        else if(cursors.down.isDown) {
        gamePerson.body.velocity.y = 600;

        }
        else if(cursors.left.isDown) {
//            gamePerson.animations.play('walk');
            gamePerson.scale.x = -1;
            gamePerson.body.velocity.x = -350;
        }
        else if(cursors.right.isDown) {
//            gamePerson.animations.play('walk');
            gamePerson.scale.x = 1;
            gamePerson.body.velocity.x = 350;
        }
        else{
//            gamePerson.animations.stop('walk',true);
            gamePerson.body.velocity.x = 0;
            gamePerson.body.velocity.y = 0;
        }
}