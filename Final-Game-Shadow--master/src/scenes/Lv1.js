class Lv1 extends Phaser.Scene {
	constructor() {
		super('Level1');
	}

	
	create() {

		//load images
		let background = this.add.sprite('pink');
		let popup = this.add.image('box');
		let testbutton= this.add.sprite('testbutton');
		let exitbutton= this.add.image('exitbutton');
		let magnolia= this.add.image('magnolia');
		let necklace= this.add.image('necklace');
		let catbed= this.add.image('catbed');

		let templevl2button=this.add.sprite('exitbutton');


		background = this.add.sprite(0,0, 'pink').setOrigin(0, 0).setScale(5); 
		
		//move to level 2    
		//this.load.image('exitbutton', './assets/ExitButton.png'); 
		this.templevl2button = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		this.templevl2button.setInteractive();
		this.templevl2button.on('pointerdown',()=> this.scene.start('Level2'));


		//character
		//this.character = new Shadow(this, 0, 385, 'character').setOrigin(0,0).setScale(.7);
		//this.character.x = game.config.width/2;
		//this.character.y = game.config.height/2;


		//button for popup window w click
/*
		popup= this.add.image(24,200, 'box').setOrigin(0).setInteractive();
		magnolia= this.add.image(500,40, 'magnolia').setOrigin(0).setInteractive().setScale(.2);
		necklace= this.add.image(1024,200, 'necklace').setOrigin(0).setInteractive().setScale(.2);
		catbed= this.add.image(1024,100, 'catbed').setOrigin(0).setInteractive().setScale(.2);



		var zone1 = this.add.zone(345,0, 100, 300).setOrigin(0).setName('firstsprite').setInteractive();
		var zone2 = this.add.zone(345, 0, 310, 300).setOrigin(0).setName('secondsprite').setInteractive();
		var zone3 = this.add.zone(655, 0, 369, 300).setOrigin(0).setName('Coffee\nand cream').setInteractive();

		var zone4 = this.add.zone(0, 300, 330, 300).setOrigin(0).setName('Chocolate\nSprinkles').setInteractive();
		var zone5 = this.add.zone(330, 300, 350, 300).setOrigin(0).setName('Strawberry').setInteractive();
		var zone6 = this.add.zone(680, 300, 344, 300).setOrigin(0).setName('More\nSprinkles').setInteractive();


		this.input.on('gameobjectdown', function (pointer, gameObject) {

		//popup.x = gameObject.x;
		//magnolia.x = pointer.x;
		//necklace.x = pointer.x;
		//catbed.x = pointer.x;
		//popup.y = pointer.y;

        

		});
		*/
	}




	
	update() {
	
	}

//closes .Scene
}
