class Paper{
    constructor(x, y, w){
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:0,
            density:0.5,
        }
        this.body = Bodies.circle(x, y, w, options)
        World.add(world,this.body)
        this.x = x
        this.y = y
        this.w = w
        this.image = loadImage("paper.png")
    }

    display(){
        var pos = this.body.position
        //var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        imageMode(CENTER)
        //rotate(angle)
        fill("yellow")
        image(this.image, 0, 0,this.w, this.w)
        pop()
    }

}