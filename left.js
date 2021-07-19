class left {
    constructor(x,y,w,h){
        var left_options = {isStatic:true}

        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x,y,w,h,left_options)
             World.add(world,this.body)

    }
    diplay(){
        var left_pos = this.body.left_pos
        push ()
        translate(left_pos.x,left_pos.y)
        ectMode(CENTER) 
        strokeWeight(4); 
        fill(255,255,0) 
        rect(0,0,this.w, this.h);
        pop ()
       }
}