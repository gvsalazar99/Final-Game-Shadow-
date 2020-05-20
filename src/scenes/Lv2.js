class Lv2 extends Phaser.Scene {
	constructor() {
		super('Level2');
	}

	create() {
		//create background
		let background = this.add.sprite(0,0, 'purple').setOrigin(0, 0).setScale(5); 
		
		//exit button switches to level 3 
		this.templevl3button = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		this.templevl3button.setInteractive();
		this.templevl3button.on('pointerdown',()=> this.scene.start('Level3'));

		//dialogue box art
		this.dialogueBox = this.add.sprite(0,0, 'yellow2').setOrigin(0).setScale(.67,.5);
		this.dialogueBox.y = game.config.height - this.dialogueBox.displayHeight;

		//text
		boxText = this.add.text(155, this.dialogueBox.y + 15, '', { font: "20pt Courier", fill: "#ff0000", stroke: "#ff0000", strokeThickness: 2, wordWrap: { width: 700, useAdvancedWrap: true } });
		boxText.setText('Rule #2: Don\'t trust anything you\'re told');
		boxText.visible = true;
		console.log(boxText);
		
		//clickable memento
		this.memento = new memento(this, 1024, 400, 'necklace').setOrigin(0).setScale(.3);
		this.memento.text = 'Thief! I saw you snatch my jewelry!';
		this.memento.makeInteractive();
		
	}
	

	update() {
		console.log(boxText._text != 'Rule #2: Don\'t trust anything you\'re told');
		boxText._text != 'Rule #2: Don\'t trust anything you\'re told' ? this.memento.alpha = 0 : this.memento.alpha = 1;
	}
}
