var log1,log2,log3;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  rectMode(CENTER);
	createCanvas(1200, 600);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,570,1200,20);
  log1=new Dustbin(1000,550,200,20);
	log2=new Dustbin(1090,490,20,100);
  log3=new Dustbin(910,490,20,100);
  ball=new  PaperBall(80,450);
  
	Engine.run(engine);
}


function draw() {
 
  rectMode(CENTER);
  background("pink");
  text("press down arrow key to move the paper",200,90);
  fill("red")
  Engine.update(engine);
  
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  ball.display();

  drawSprites();

}

function keyPressed() {
if (keyCode=== DOWN_ARROW) {
  Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-45});
}
}

