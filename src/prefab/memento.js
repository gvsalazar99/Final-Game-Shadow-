class memento extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); //add object to existing scene

        this.setInteractive(); //it is clickable!
    }

    create() {

    }

    update() {
        
    }


}