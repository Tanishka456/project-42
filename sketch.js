// variables to load images 
 var lighteningImage, boyWalkingImage;
 
 var maxDrops = 100;

function preload(){
    lighteningImage = loadAnimation("1.png","2.png","3.png","4.png");
    boyWalkingImage = loadAnimation("walking_1.png","walking_2.png","walking_3.png",
  "walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
}

function setup(){
  createCanvas(600,600); 
    
}

function draw(){
    

  for(var i = 0; i<maxDrops; i ++){
    drops.push(new Drop(random(0,400)));
  }
}   

