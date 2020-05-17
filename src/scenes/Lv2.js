class Lv2 extends Phaser.Scene {
	constructor() {
		super('Level2');
	}

	create() {


		


		//load images
		
		let necklace= this.add.image('necklace');

		let background = this.add.sprite(0,0, 'purple').setOrigin(0, 0).setScale(5); 
		
		let templevl3button=this.add.sprite('exitbutton');


		
		//move to level 3    
		//this.load.image('exitbutton', './assets/ExitButton.png'); 
		this.templevl3button = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		this.templevl3button.setInteractive();
		this.templevl3button.on('pointerdown',()=> this.scene.start('menuScene'));


		//button for popup window w click

	
		necklace= this.add.image(1024,400, 'necklace').setOrigin(0).setInteractive().setScale(.2);
		
	}

	update() {

	}
}
