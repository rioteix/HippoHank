//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
// var ghost, asterisk;
let alien;
let imageSprite;
//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {
  for (let i = 0; i < NUM_FRAMES; i++) {
    alienFrames.push(loadImage('sprite-01.png'));
  }
}
  

  //create an animation from a sequence of numbered images

    alien = loadAnimation('image/sprite-01.png', 'image/sprite-06.png')
    

  //pass the first and the last file name and it will try to find the ones in between
//   ghost = loadAnimation('assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');

//   //create an animation listing all the images files
//   asterisk = loadAnimation('assets/asterisk.png', 'assets/triangle.png', 'assets/square.png', 'assets/cloud.png', 'assets/star.png', 'assets/mess.png', 'assets/monster.png');
}

function setup() {
  createCanvas(800, 300);
  imageSprite = createSprite(300, 150);
  imageSprite.addAnimation('dancing', alien);


function draw() {
  background(255, 255, 255);
  image

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
//   animation(ghost, 300, 150);
//   animation(asterisk, 500, 150);
drawSprites();
    // animation(alien, 400, 100);
}

function keyPressed(){
  console.log('keyIsPressed', key);
  if (key==='d') {
    console.log(imageSprite.position.x)
    imageSprite.position.x+=100;


  }
 else if (key==='a') {
    console.log(imageSprite.position.x)
    imageSprite.position.x-=100;
  }
}



//this is how to get keyboard interaction without p5
window.addEventListener('keydown', (event) => {
  //you can get the necessary info for any key by typing it and checking the console  
  console.log(event.key);
  if(event.key === ' '){
    console.log('you just hit the space bar')
  }
  if(event.key === 'ArrowLeft'){
    console.log('you just hit the left arrow');
  }


  
{
  "frames"; [
    {
      "name": "sprite-00.png",
      "position": {
        "x": 0,
        "y": 0,
        "w": 32,
        "h": 32
      }
    },
    {
      "name": "sprite-01.png",
      "position": {
        "x": 32,
        "y": 0,
        "w": 32,
        "h": 32
      }
    },
    {
      "name": "sprite-02.png",
      "position": {
        "x": 64,
        "y": 0,
        "w": 32,
        "h": 32
      }
    },
    {
      "name": "sprite-03.png",
      "position": {
        "x": 96,
        "y": 0,
        "w": 32,
        "h": 32
      }
    },
    {
      "name": "sprite-04.png",
      "position": {
        "x": 0,
        "y": 32,
        "w": 32,
        "h": 32
      }
    },
    {
      "name": "sprite-05.png",
      "position": {
        "x": 32,
        "y": 32,
        "w": 32,
        "h": 32
      }
    },
    {
      "name": "sprite-06.png",
      "position": {
        "x": 64,
        "y": 32,
        "w": 32,
        "h": 32
    },

