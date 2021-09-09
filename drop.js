class Drops {
    constructor(x,y)
    {
    var a={restitution:0.1,friction:0.01,}
    this.r=5
    this.body=Matter.Bodies.circle(x,y,5,8)         
    Matter.World.add(world,this.body)

}
updateY(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
    }
}
display(){
    fill("blue")
    ellipseMode(RADIUS)
    ellipse (this.body.position.x,this.body.position.y,this.r, this.r)

}

}