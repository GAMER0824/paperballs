class Ground {
    constructor(x,y,w,h){
    var ground_options = {isStatic:true}

    this.w = w
    this.h = h
    this.body = Bodies.rectangle(x,y,w,h,ground_options)
         World.add(world,this.body)
    
 }
 diplay(){
  var ground_pos = this.body.ground_pos
  push ()
  translate(ground_pos.x,ground_pos.y)
  ectMode(CENTER) 
  strokeWeight(4); 
  fill(255,255,0) 
  rect(0,0,this.w, this.h);
  pop ()
 }
}