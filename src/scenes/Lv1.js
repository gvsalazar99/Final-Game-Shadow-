class Lv1 extends Phaser.Scene {
	constructor() {
		super('Level1');
	}

	create() {
		let background = this.add.sprite('pink');
		background = this.add.sprite(0,0, 'pink').setOrigin(0, 0).setScale(5); 
		
		//put 
		this.character = new Shadow(this, 0, 385, 'character').setOrigin(0,0).setScale(.7);
		this.character.x = game.config.width/2;
		this.character.y = game.config.height/2;

		
	}

	update() {
		console.log(this.character.x);
		console.log(this.character.y);
	
	}
}
