//https://hannemann.itch.io/ui-button-pack-free


let config = {
    type: Phaser.CANVAS,
    width:1260,
    height:590,
   scene: [ Menu , Play, Credits, Lv1, Lv2, Lv3 ] 
};

let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000    
}

//reserve some keyboard variables
let keyF, keyLEFT, keyRIGHT;

