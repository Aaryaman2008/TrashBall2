
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbinn;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

ground=new Ground(600,375,1200,15);
dustbinn=new Dustbin(900,360,120,120);
paper=new Paper(100,300,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(100,200,400);
  dustbinn.display();
 paper.display();
ground.display(); 
  drawSprites();
 
}

function keyPressed(){
  if(keyCode == UP_ARROW){
  
  Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-60});
  
   }
  }
  