class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
        
    }

    preload() {
      this.load.image('background', './assets/cosmowanda.png'); 
      this.load.image('playbutton', './assets/PlayButton.png'); 
      this.load.image('pink', './assets/pink.png'); 
      this.load.image('character', './assets/Shadow.PNG'); 
      this.load.image('box', './assets/box.png'); 
      this.load.image('exitbutton', './assets/ExitButton.png'); 
      this.load.image('popup', './assets/box.png'); 
      this.load.image('magnolia', './assets/Magnolia.PNG'); 
      this.load.image('necklace', './assets/Necklace.PNG'); 
      this.load.image('catbed', './assets/Cat bed.PNG'); 
      this.load.image('purple', './assets/wallpaper.png'); 





    }



    create() {

      
      let background = this.add.sprite('background');
      let button = this.add.sprite('playbutton');

      //button interactivity in menu 
      background = this.add.sprite(0,0, 'background').setOrigin(0, 0);

      this.button = this.add.sprite(game.config.width/4,game.config.height/4, 'playbutton').setScale(0.25,0.25).setOrigin(0);
      this.button.setInteractive();
      this.button.on('pointerdown',()=> this.scene.start('Level1'))
        

    }

    

    update() {

    }


  }


