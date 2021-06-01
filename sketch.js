const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snowbackground;

var engine, world;

var boyWalkingImg,boyWalking ;

var maxSnow=100;
var snowflakes=[];

var snowimg;

  function preload(){
    snowbackground=loadImage("snow3.jpg");
    boyWalkingImg=loadImage("walking in snow.jpg");

    
  }

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;

  boyWalking= createSprite(370, 350, 50, 50);
  boyWalking.addImage(boyWalkingImg);
  boyWalking.scale=0.2;

  if(frameCount%150===0){
    for(var i=0;i<maxSnow;i++){
        snowflakes.push(new Snow(random(0,800),random(0,400)))
    }
   }
  
}

function draw() {
  background(snowbackground);  

  for(var i=0;i<maxSnow;i++){
    
    snowflakes[i].showDrop();
    
    snowflakes[i].updateY();
}

  if(keyCode===39){
    boyWalking.x=boyWalking.x+10;
   keyCode=null;
  }

  if(keyCode===37){
    boyWalking.x=boyWalking.x-10;
   keyCode=null;
  }

 


  Engine.update(engine);
  drawSprites();
}