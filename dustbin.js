class Dustbin{
    constructor(x, y, w, h){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, w, h, options)
        World.add(world,this.body)
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rectMode(CENTER)
        rotate(angle)
        fill("blue")
        rect(0,0,this.w, this.h)
        pop()
    }

}