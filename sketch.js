const Engine= Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Composites = Matter.Composites
const Composite = Matter.Composite
const Constraint = Matter.Constraint

var ground;


var engine, world;
function setup() {
  createCanvas(500,700);

  engine = Engine.create();
  world = engine.world;

  ground= new Ground(250,680,700,20)
  
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  ground.display()

}