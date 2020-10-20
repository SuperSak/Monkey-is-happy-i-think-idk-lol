
var monkey , monkeyRunning, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score=0;

function preload(){
  
  
 monkeyRunning =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("running",monkeyRunning)
  monkey.scale=0.125
  ground=createSprite(400,350,800,10)
  ground.velocityx=-5
  console.log("monkey.y = "+monkey.y)
}
function draw() {
  background("white")
  monkey.velocityY=monkey.velocityY+0.8
  if(ground.x===0){ground.x=400}
  monkey.collide(ground)
  drawSprites()
  obstacles();
  bananas();
  if(keyDown("space")){
    monkey.velocityY=-10
  }
  score=Math.ceil(frameCount/frameRate())
  stroke("black")
  textSize(20)
  fill("black")
  text("Score: "+score,150,20)
}
function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(400,320)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.19
    obstacle.velocityX=-5
    obstacle.lifetime=100
  }               
}
function bananas(){
  if(frameCount%80===0){
    banana=createSprite(400,200)
    banana.addImage(bananaImage)
    banana.scale=0.125
    banana.velocityX=-5
    banana.lifetime=100
  }               
}


