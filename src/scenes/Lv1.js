class Lv1 extends Phaser.Scene {
	constructor() {
		super('Level1');
	}

	
	create() {
		//create background
		let background = this.add.sprite(0,0, 'pink').setOrigin(0, 0).setScale(5); 
		
		//exit button switches scenes to level 2    
		this.tempLevl2button = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		this.tempLevl2button.setInteractive();
		this.tempLevl2button.on('pointerdown',()=> this.scene.start('Level2'));
		

		//dialogue box art
		this.dialogueBox = this.add.sprite(0,0, 'blue1').setOrigin(0).setScale(.67,.5);
		this.dialogueBox.y = game.config.height - this.dialogueBox.displayHeight;

		//text
		boxText = this.add.text(155, this.dialogueBox.y + 15, '', { font: "20pt Courier", fill: "#ff0000", stroke: "#ff0000", strokeThickness: 2, wordWrap: { width: 700, useAdvancedWrap: true } });
		boxText.setText('Welcome to level 1! Click on the magnolia for instructions!');
		boxText.visible = true;
		
		//clickable memento
		this.memento = new memento(this, game.config.width*.75, game.config.height*.25, 'magnolia').setOrigin(0).setScale(.3);
		this.memento.text = 'Rule #1: Don\'t click on the exit button!';
		this.memento.makeInteractive();

		//character
		//this.character = new Shadow(this, 0, 385, 'character').setOrigin(0,0).setScale(.7);
		//this.character.x = game.config.width/2;
		//this.character.y = game.config.height/2;


	}

	keyPress(char) {

	}


	
	update() {
		console.log
	}

//closes .Scene
}
