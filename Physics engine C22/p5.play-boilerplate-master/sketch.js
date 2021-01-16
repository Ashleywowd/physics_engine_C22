//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//declaring vars
var myworld, myengine;
var ground;
var ball;
var ball2

function setup() {
  //creating canvas
  createCanvas(400,400);

//creating engine
  myengine = Engine.create();

  //myworld is myengine's world
  myworld = myengine.world;

//creating option for ground body
  var options = {
    //making the ground static
    isStatic: true
  }
//creating ground using recatngular body
 ground = Bodies.rectangle(200,380,400,20,options);
 //adding ground to my world
 World.add(myworld,ground);
//printing the ground on console
 console.log(ground);
 //console.log(mybody.position.y);
 //creating options for ball
var option_ball = {
 //making the ball bounce
  restitution: 1
}


//making the ball using circular body
 ball = Bodies.circle(250,100,30,option_ball);
 //adding the ball to my world
 World.add(myworld,ball);
//making option for ball2
 var option_ball2 = {
  //making the ball2 bounce 
  restitution: 1
 }
//making circle for the ball2 using body
 ball2 = Bodies.circle(250, 50 ,50,option_ball2)
//adding the ball to world
 World.add(myworld,ball2)
}
//drawing the objects
function draw() {
  //making the background black
  background("black");  
 //updating the engine continously 
  Engine.update(myengine);
//making the rectangle center
  rectMode(CENTER);
  //creating the rectange at grounds postition
  rect(ground.position.x,ground.position.y,400,20);
//making the ellipse according to radius
  ellipseMode(RADIUS);
  //making the ellipse to balls positon
  ellipse(ball.position.x,ball.position.y,30,30);
//makin the ellipse to ball2 position
  ellipseMode(RADIUS);
  //making the ellipse  at ball2 position
  ellipse(ball2.position.x,ball2.position.y,50,50);

//drawing the sprites on canvas
  drawSprites();  
}