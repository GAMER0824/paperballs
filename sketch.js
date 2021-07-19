
var ball
var ground
var right
var left

 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
    var ball_options ={
		restitution:0.3,
		friction:0,
		density:0.1
	}

	ball = Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display()
  
  drawSprites();
 
}

function keyPressed() {
	Matter.Body.applyForce(ball,{x:0.05,y:0},{x:0,y:0})
}

