class Umbrella{
    constructor (x,y){
        var options={isStatic:true}
        this.body=Matter.Bodies.circle(x,y,150,options);
        this.image=loadImage("walking_1.png");
        this.x=x;
        this.y=y;
        this.r=150;
        Matter.World.add(world,this.body);
        
    }
 display(){
    imageMode(CENTER);
     image (this.image,this.body.position.x,this.body.position.y,300,300)
    }
}