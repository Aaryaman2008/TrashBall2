class Dustbin extends BaseClass{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
    super(x,y,width,height,options);
    this.image = loadImage("PRO-C252"); 
    }
  };