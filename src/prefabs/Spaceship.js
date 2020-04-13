//Spaceship prefab

class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture,frame, pointValue){
        super(scene, x, y, texture, frame);
        
        //add an object to the existing scene
        //scene that is being passed into object (Play), add 
        //"this" object to the existing scene 
        scene.add.existing(this);
        this.points= pointValue; 
    }

    update(){
        //move spaceship left
        this.x -= game.settings.spaceshipSpeed;

        //wraparound screen bounds
        if(this.x <= 0 - this.width){
            this.reset();
        }
     }
     reset(){
         this.x=game.config.width;
     }
}