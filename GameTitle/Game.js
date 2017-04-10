var theGame = function (game){
    var cursors;
    var stuff;
    var speed = 6;
}

theGame.prototype = {
    
	create: function(){
        
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