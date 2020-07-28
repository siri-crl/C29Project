const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Box1, Box2;
var Box3, Box4;
var Box5, Box6;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground()
    Box1 = new Box(450,75,50,50);
    Box2 = new Box(500,125,50,50);
    Box3 = new Box(550,175,50,50);
    Box4 = new Box(600,225,50,50);
    Box5 = new Box(650,275,50,50);
    Box6 = new Box(700,325,50,50);
}

function draw(){
    background(255,255);
    engine.update();
    strokeWeight(4);
    Box1.display();        
    Box2.display();    
    Box3.display();    
    Box4.display();    
    Box1.display();    
    Box1.display();    
}
