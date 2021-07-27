var monkey,monkeyimg,bananaimg,backimg,banana,ground,rockimg,rock,score;

function preload(){
  monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png") 
  
  bananaimg=loadImage("banana.png")
  backimg=loadImage("forest5-2prs.jpg")
  rockimg=loadImage("stone.png")
}



function setup() {
  canvas = createCanvas(displayWidth,400);
  
  back=createSprite(displayWidth-300,200,displayWidth,200)
  back.addImage(backimg)
  back.scale=0.9;

  monkey=createSprite(250,360,20,20);
  monkey.addAnimation("running",monkeyimg)
  monkey.scale=0.07;
  
  //camera.position.y=displayHeight/2
  //camera.position.y=monkey.y
 
 //back.velocityX=-1
  // back.x=
  
  
  //back.depth=monkey.depth
  monkey.depth=monkey.depth+1
  
ground=createSprite(390,390,10000,10);
  ground.visible=true
  
  bananagroup=new Group()
  rockgroup=new Group()

  
  for(var i=0;i<10;i++){
    rock=createSprite(Math.round(random(10,1500)),360,10,10)
    rock.addImage(rockimg)
    rock.scale=0.15; 


  }

  score=0;
}

function draw() {
  monkey.velocityX=0;
  background(180)
  
  //imageMode(CENTER);
  //image(backimg,0,-displayWidth*2,displayHeight*4,displayWidth)
  
  if(keyDown("space") && monkey.y>=340){
     monkey.velocityY=-12
    
     }
   monkey.velocityY=monkey.velocityY+0.5
  
  if(keyDown(RIGHT_ARROW)){
    monkey.velocityX=2;
  //camera.position.x=displayWidth
  
  }

  if(monkey.x>displayWidth-100){
camera.position.x=monkey.x+200
  }
  
  if(rockgroup.isTouching(monkey)){
     monkey.scale=0.05
    rockgroup.destroyEach();
     }
  if(bananagroup.isTouching(monkey)){
     score=score+1;
    bananagroup.destroyEach();
     }
 switch(score){
       case 10: monkey.scale=0.12;
       break;
       case 20: monkey.scale=0.14;
       break;
       case 30: monkey.scale=0.16;
       break; 
       case 40: monkey.scale=0.18;
       break;
       default:break; 
      }
  
  
  monkey.collide(ground)
  rock.collide(ground);
  bananas();
  //rocks();
   
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,500,50)

}


function bananas(){
  if(frameCount%100===0){
     banana=createSprite(780,200,10,10)
   banana.addImage(bananaimg)
    banana.velocityX=-8;
    banana.scale=0.05
    banana.y=Math.round(random(200,380))
    banana.lifetime=400
    bananagroup.add(banana)
    
    banana.setCollider("rectangle",0,0,100,100)
  }
}
//function rocks(){
  // if(frameCount%200===0){
     
  //  rock.addImage(rockimg)
  //   rock.velocityX=-8;
  //   rock.scale=0.25 
  //   rock.lifetime=400
  //   rockgroup.add(rock)
  //   rock.setCollider("rectangle",0,0,300,300)
  // }
//}