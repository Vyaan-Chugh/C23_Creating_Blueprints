//step 1
//namespacin OR nick name OR alias
//const Vyaan = Vyaan Chugh
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//step 2 - declaring the variables
var myEngine, myWorld;

var box, ground, ball;


function setup() {
  createCanvas(400,400);

  //step 3- create your own Engine
  myEngine = Engine.create();

  //step 4 - create your own World
  myWorld = myEngine.world;

  //step 5 - create your Bodies
  box = Bodies.rectangle(200,200,50,50);

  //changing proprties of the bodies
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,380,400,20,ground_options);


  var ball_options = {
    restitution: 1.5
  }
  ball = Bodies.circle(100,100,20,ball_options)
  //step 6 - add the bo,dies in your world
  World.add(myWorld,box);
  World.add(myWorld,ground);
  World.add(myWorld,ball);
  console.log(box.position.y);
  
}

function draw() {
  background("black");
  
  //step 7 - start the engine
  Engine.update(myEngine)

//  rect(x,y,w,h)
  rectMode(CENTER); 
  rect(box.position.x,box.position.y,50,50)
  rect(ground.position.x,ground.position.y,400,20)

  //to display circular bodies
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}