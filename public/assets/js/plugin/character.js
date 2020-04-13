var Unit = new Phaser.Class({
    Extends: Phaser.GameObjects.Sprite,
 
    initialize:
 
    function Unit(scene, x, y, texture, frame, hp, strength, defense, speed) {
        Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, frame)
        this.maxHp = this.hp = hp;
        this.strength = strength; // default damage 
        this.defense = defense;
        this.speed = speed;             
    },
    attack: function(target) {
        target.takeDamage(this.strength);      
    },
    takeDamage: function(strength) {
        this.hp -= strength;        
    }
});

var Player = new Phaser.Class({
    Extends: Unit,
 
    initialize:
    function Player(scene, x, y, texture, frame, hp, strength, defense, speed) {
        Unit.call(this, scene, x, y, texture, frame,  hp, strength, defense, speed);
        //this.flipX = true;
        this.setScale(0.6);
    }
});