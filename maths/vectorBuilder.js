class VectorBuilder {
  cell = []
  constructor(x = 0, y = 0, z = 0, w = 0) {
  
    let arg = arguments
    if(arg.length===4){
      this.x = x;this.y = y;this.z = z;this.w = w
      this.cell[0] = x;this.cell[1] = y;this.cell[2] = z;this.cell[3] = w
    }
    
    else if(arg.length===3){
      this.x = x;this.y = y;this.z = z
      this.cell[0] = x;this.cell[1] = y;this.cell[2] = z
    }
    
    else if(arg.length===2){
      this.x = x;this.y = y
      this.cell[0] = x;this.cell[1] = y
    }

    else if(arg.length===1){
      if(typeof x === 'object'&& x && !Array.isArray(x)){
        for(let key in x){
          this[key] = x[key] 
          this.cell.push(x[key])
        }
      }
      else if(Array.isArray(x)) {
        for(var i=0;i<x.length;i++){
          this.cell[i] = x[i]
        }
        switch(x.length){
          case 4: this.x = x[0];this.y = x[1];this.z = x[2];this.w = x[3];break;
          case 3: this.x = x[0];this.y = x[1];this.z = x[2];break;
          case 2: this.x = x[0];this.y = x[1];break;
          case 1: this.x = x[0];break;
        }
      }

    }
    
    else if(arg.length===0){}
  }

}

/*
*/

class Vector2 extends VectorBuilder {
  constructor(x = 0, y = 0){
    if(arguments.length===1){
      if(typeof x === 'object'&& x && !Array.isArray(x)){
        x.x = x.x||0
        x.y = x.y||0
        super(x)
      }
      else if(x && Array.isArray(x)){
        super(x)
      }
      
    }else{
      super(x,y)
    
    }
  }
}

class Vector3 extends VectorBuilder {
  constructor(x = 0, y = 0, z = 0){
    if(arguments.length===1){
      if(typeof x === 'object'&& x && !Array.isArray(x)){
        x.z = x.z||0
        x.y = x.y||0
        x.x = x.x||0
        super(x)
      }
      else if(x && Array.isArray(x)){
        super(x)
      }

    }else{
      super(x,y,z)
    
    }
  }
}
 
class Vector4 extends VectorBuilder {
  constructor(x = 0, y = 0, z = 0, w = 0){
    if(arguments.length===1){
      if(typeof x === 'object'&& x && !Array.isArray(x)){
        x.w = x.w||0
        x.z = x.z||0
        x.y = x.y||0
        x.x = x.x||0
        super(x)
      }
     else if(x && Array.isArray(x)){
       super(x)
     }

    }else{
      super(x, y, z, w)
    }
  }
}
