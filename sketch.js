var fighterPlane;
var asteroid;
var missile;
var space;

function setup() {
  createCanvas(400,400); 

  fighterPlane = createSprite(200,350,20,20);
  fighterPlane.addImage(fighterPlaneImg);
  fighterPlane.scale = 0.5;

}

function preload(){

  spaceImg = loadImage("space.jpg");
  fighterPlaneImg = loadImage("fighterPlane.png");
  asteroidImg = loadImage("asteroid.png");
  missileImg = loadImage("missile.png");

}

if(keyDown("space")){createMissile();}

function draw() {
  background(spaceImg);  

  if(keyDown("Right")){
    fighterPlane.velocityX = -2
}  

  if(keyDown("LEFT")){
   fighterPlane.velocityX = 2
} 

  if(keyDown("UP")){
    fighterPlane.velocityY = 2
} 

  if(keyDown("UP")){
    fighterPlane.velocityY = -2
} 

  if(missile.isTouching(asteroid)){
    asteroid.destroy();
}

  if(asteroid.isTouching(fighterPlane)){
    fighterPlane.destroy();
}

  spawnAsteroids();

}

function spawnAsteroids() {
  if(frameCount % 80 === 0) {
   asteroid = createSprite(100,390,20,20);
   asteroid.velocityY = 5;
    for (var i = 50; i < 360; i=i+60) {  
     asteroid.addImage(asteroidImg);
     asteroid.scale=0.1;
     asteroid.lifetime=100;
}
}
}

function createMissile(){

  missile = createSprite(200, 390, 10, 10);
  missile.addImage(missileImg);
  missile.velocityY = 6;   
  missile.scale = 0.2;
  missile.y = fighterPlane.y;
  missile.lifetime=80;
}