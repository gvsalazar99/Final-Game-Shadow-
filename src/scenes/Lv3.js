class Lv3 extends Phaser.Scene {
	constructor() {
		super('Level3');
	}

	create() {

		let tempcreditsbutton=this.add.sprite('exitbutton');


		
		//move to credits   
		//this.load.image('exitbutton', './assets/ExitButton.png'); 
		this.tempcreditsbutton = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		this.tempcreditsbutton.setInteractive();
		this.tempcreditsbutton.on('pointerdown',()=> this.scene.start('menuScene'));



	}

	update() {

	}
}
