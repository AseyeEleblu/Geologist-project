
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(100, 100);
	iron = new Iron(150, 320, 80, 50);

	sand1 = new Sand(250, 320, 10, 10);
	sand2 = new Sand(270, 320, 10, 10);
	sand3 = new Sand(290, 320, 10, 10);
	sand4 = new Sand(300, 320, 10, 10);
	sand5 = new Sand(310, 320, 10, 10);
	sand6 = new Sand(320, 320, 10, 10);
	sand7 = new Sand(360, 320, 10, 10);
	sand8 = new Sand(380, 320, 10, 10);
	sand9 = new Sand(400, 320, 10, 10);
	sand10 = new Sand(420, 320,10, 10);
	sand11 = new Sand(450, 320,10, 10);


	rubber = new Rubber(900, 320, 70, 70);
	stone = new Stone(600, 320, 70, 70);

	plane = new Plane(width / 2, height, width, 20)

}


function draw() {
	rectMode(CENTER);
	background("lightblue");
	Engine.update(engine);
	hammer.display();
	iron.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	sand7.display();
	sand8.display();
	sand9.display();
	sand10.display();
	sand11.display();

	rubber.display();
	stone.display();

	plane.display();

	stroke(200)
	text(round(mouseX) + ', ' + mouseY, mouseX, mouseY)

}



