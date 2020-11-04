
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin,dustbin2,dustbin3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

ground=new Ground(600,375,1200,15);
dustbin=new Dustbin(1000,317,20,100);
dustbin2=new Dustbin(800,317,20,100);
dustbin3=new Dustbin(900,360,220,15);
paper=new Paper(200,300,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
 ground.display();
 dustbin.display(); 
 dustbin2.display(); 
 dustbin3.display(); 
 paper.display();
  drawSprites();
 
}



