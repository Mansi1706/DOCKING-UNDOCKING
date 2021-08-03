
var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;




function preload(){
  bg=loadImage("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym21.png","images/gym22.png");
  eat=loadAnimation("images/eat.png");
  drink=loadAnimation("images/drink.png");
  move=loadAmimation("images/move.png");
  
}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  astronaut=createCanvas(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;


}

function draw() {
  background(255,255,255);  
  drawSprites();
  textSize=10;
  Text("INSTRUCTIONS:
  Up arrow = brushing
  Down arrow = sleeping
  Left arrow = eating
  Rigth arrow = bathing
  m key = moving " ,300,300);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=300;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("sleeping",sleep);
    astronaut.changeAnimation("sleeping");
    astronnaut.y=500;
    astroanut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronnaut.x=300;
    astroanut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronnaut.x=500;
    astroanut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown("m")){
    astronaut.velocityX=1;
    astronaut.velocityY=1;
  }
}
