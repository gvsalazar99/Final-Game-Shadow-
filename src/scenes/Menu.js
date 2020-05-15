class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
        
    }

    preload() {
      this.load.image('background', './assets/cosmowanda.png'); 
      this.load.image('playbutton', './assets/PlayButton.png'); 

    }



    create() {



      let background = this.add.tileSprite('background');
      let button = this.add.sprite('playbutton');


      background = this.add.tileSprite(0, 0,  640, 480, 'background').setOrigin(0, 0);
      button = this.add.sprite(game.config.width/4,game.config.width/4, 'playbutton').setOrigin(0).setScale(.5); 
      

      //button = this.add.button(0,0, 95, 400, 'button', actionOnClick, this, 2, 1, 0);


      this.input.on('pointerdown',()=> this.scene.start('playScene'))
        


    }

    

    update() {
    }
  }


