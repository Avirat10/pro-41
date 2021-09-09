var engine,world
var umbrella
var thunder
var image1,image2,image3,image4
var a
var thunderCreatedFrame=0;
var maxDrops=100;
var drops=[]

function preload(){
    image1=loadImage("1.png")
    image2=loadImage("2.png")
    image3=loadImage("3.png")
    image4=loadImage("4.png")
}

function setup(){
   createCanvas(800,700);
   engine=Matter.Engine.create();
   world=engine.world;
   umbrella= new Umbrella (400,550);

   for(var i=0; i<maxDrops ; i++)
    {
       drops.push (new Drops(random (0.400), random(0.400)));
   }

}

function draw(){
    Matter.Engine.update(engine);
    background(0);
    umbrella.display();
    
    a=Math.round(random (1,4));
     if (frameCount%80===0 )
     {
         thunderCreatedFrame=frameCount;
         thunder=createSprite(random(10,500),random(10,100),30,20);
        switch(a)
        {
            case 1:thunder.addImage(image1);

            break;

            case 2:thunder.addImage(image2);

            break;

            case 3:thunder.addImage(image3);

            break;

            case 4:thunder.addImage(image4);

            break;
            default:break
        }
        thunder.scale=random(1,1.5);
     }
      if (thunderCreatedFrame+10===frameCount && thunder)
     {
       thunder.destroy()
     }

     for(var i=0; i<maxDrops; i++)
     {
       drops[i].display()
       drops[i].updateY()
     }
    
    
     

}   


