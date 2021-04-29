
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render

var ground, paper, dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
	Render.run(render);

	//Create the Bodies Here.
	ground = new Ground(400, 680, width, 20)
	paper = new Paper(200,200,70)
	dustbin1 = new Dustbin(600,660,150,20)
	dustbin2 = new Dustbin(515,620,20,100)
	dustbin3 = new Dustbin(680,620,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground.display()
  paper.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
 
}

function keyPressed(){
	if(keyCode==32){
		Matter.Body.applyForce(paper.body, paper.body.position,{x: 70,y:-170})
	}
}



