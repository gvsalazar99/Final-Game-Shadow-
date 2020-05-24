class Credits extends Phaser.Scene {
	constructor() {
		super('Credits');
	}

	create() {
		//endscreen
		let credits = this.add.sprite('credits');
		credits = this.add.sprite(0, 0, 'credits').setOrigin(0, 0).setScale(0.85,0.6);
	}

	update() {

	}
}
