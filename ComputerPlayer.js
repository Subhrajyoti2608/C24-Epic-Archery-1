class ComputerPlayer{
    constructor(x, y, width, height){
        var options={
            isStatic : true
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x, y, this.width, this.height, options)
        this.ComputerPlayerImage=loadImage("player.png")
        World.add(world,this.body)
    }
    display() {
       var pos = this.body.position
       push ();
      translate (pos.x,pos.y)
      imageMode (CENTER)
      image (this.ComputerPlayerImage, 0, 0, this.width, this.height)
      pop ()
    }
}
