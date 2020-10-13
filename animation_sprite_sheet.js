//Creating animations from sprite sheets
var sprite_sheet_image;
var sprite_sheet;
var explode_animation;

function preload() {
  // specify width and height of each frame and number of frames


  //now my sprite sheet
  mySpritesheet = loadSpriteSheet('Hippo.png', 32, 32, 10);
  myAnimation = loadAnimation(mySpritesheet); 

  // load the full sprite sheet for example reference only

}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  clear();

  // animate the sprite sheet
  
  animation(myAnimation, 100, 250);
  

  // show full sheet for example reference
 
}
