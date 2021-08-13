const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase, playerBase;
var player, computerPlayer;

function setup() {
  canvas = createCanvas(1200, 600);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
computerBase = new ComputerBase(280, 400, 500, 200)
playerBase = new PlayerBase(920, 400, 500, 200)
player = new Player(920, 253, 50,180)
computerPlayer = new ComputerPlayer(280,50,180)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  computerBase.display();
  playerBase.display();
   //display Player and computerplayer
player.display();
computerPlayer.display();

}
