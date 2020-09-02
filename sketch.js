const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var o1,o2,o3,o4,o5,o6,o7,o8,o9,o10;
var backgroundImg,platform;
var player, chain;
var bg,score;

var gameState = "onSling";

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    score = 0;

    ground = new Ground(600,height,1200,20);
    player = new Player(200,50);
    
    o1 = new Objects(600,50);

    chain = new SlingShot(player.body,{x:200, y:200});
}

function draw(){
    if(backgroundImg){}
    background(0);
    noStroke();
    textSize(35);
    fill("white");
    text("Score:" + score,width-300,50);
    Engine.update(engine);
    ground.display();
    player.display();
    chain.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    chain.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
    chain.attach(player.body);
    }
}
//async function getBackgroundImg(){
   // var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/calcutta");
    //var responseJSON = await response.json();
   // console.log(responseJSON);
   // var dateTime = responseJSON.datetime;
  //  var hour = dateTime.slice(11,13);
   // if(hour > 06 && hour < 18){
   //    bg = "sprites/bg.png";
  //  } else {
  //      bg = "sprites/bg2.jpg";
  //  }
   // backgroundImg = loadImage(bg); 
//}

