class Lv3 extends Phaser.Scene {
	constructor() {
		super('Level3');
	}

	create() {
		//dialogue box art
		this.dialogueBox = this.add.sprite(0,0, 'blue3').setOrigin(0).setScale(.67,.5);
		this.dialogueBox.y = game.config.height - this.dialogueBox.displayHeight;
		
		//exit button switches scenes back to menu    
		this.tempcreditsbutton = this.add.sprite(game.config.width/4,game.config.height/4, 'exitbutton').setScale(0.25,0.25).setOrigin(0);
		this.tempcreditsbutton.setInteractive();
		this.tempcreditsbutton.on('pointerdown',()=> this.scene.start('menuScene'));

		//text
		boxText = this.add.text(155, this.dialogueBox.y + 15, '', { font: "20pt Courier", fill: "#ff0000", stroke: "#ff0000", strokeThickness: 2, wordWrap: { width: 700, useAdvancedWrap: true } });
		boxText.setText('Congratulations, you\'ve made it to purgatory with the rest of the ne\'er-do-wells. At least you got a comfy cat bed...');
		boxText.visible = true;

		//clickable memento
		this.memento = new memento(this, game.config.width*.75, game.config.height*.25, 'catbed').setOrigin(0).setScale(.3);
		this.memento.text = 'Oh, c\'mon, no need to throw a fit!';
		this.memento.makeInteractive();


	}

	update() {
		boxText._text == 'Oh, c\'mon, no need to throw a fit!' ? this.memento.angle = 135 : this.memento.angle = 0;
	}
}
