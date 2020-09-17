const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var platform;
var bird, slingshot,b1,b2,ground,ground1;

//var gameState = "onSling";
//var bg = "sprites/bg1.png";
//var score = 0;

function preload() {
    //getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(800,250,600,10);
   // platform = new Ground(150, 305, 300, 170);

    
   // b1 = new Pig(810, 350);
  // log1 = new Log(810,260,300, PI/2);
   box1 = new Box(800,200,50,50);
   box2 = new Box(900,200,50,50);
   box3 = new Box(1000,200,50,50);
   box4 = new Box(700,200,50,50);
   box5 = new Box(600,200,50,50);
   box6 = new Box(650,150,80,50);
   box7 = new Box(750,150,80,50);
   box8 = new Box(850,150,80,50);
   box9 = new Box(950,150,80,50);
   box10 = new Box(700,100,50,50);
   box11 = new Box(800,100,50,50);
   box12 = new Box(900,100,50,50);
   box13 = new Box(750,50,80,50);
   box14 = new Box(850,50,80,50);
   box15 = new Box(800,10,50,50);

   

   

  // log3 =  new Log(810,180,70, PI/2);

   
   // log4 = new Log(760,120,70, PI/7);
   // log5 = new Log(870,120,70, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,70, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:120});
}

function draw(){
    background(81,242,0);
    //if(backgroundImg)
       // background(backgroundImg);
    
       // noStroke();
       // textSize(35)
       // fill("white")
       // text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    ground.display();
    ground1.display();
  

   
   // b2.display();
    //pig3.score();
   // log3.display();

    
    //log4.display();
   // log5.display();

    bird.display();
    //platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
   // gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body,{x:200,y:50});
       slingshot.attach(bird.body);
       
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}