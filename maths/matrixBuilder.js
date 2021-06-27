class MatrixBuilder {
  cells = [[]]
  cell = []
  rows = null
  cols = null
  constructor(m00=0, m01=0, m02=0, m03=0, m04=0, m05=0, m06=0, m07=0, m08=0, m09=0, m10=0, m11=0, m12=0, m13=0, m14=0, m15=0) {
    let args = arguments
    if(args.length>9&&args.length<=16){
      this.rows = 4
      this.cols = 4
      this.m00=m00; this.m01=m01; this.m02=m02; this.m03=m03;
      this.m10=m04; this.m11=m05; this.m12=m06; this.m13=m07;
      this.m20=m08; this.m21=m09; this.m22=m10; this.m23=m11;
      this.m30=m12; this.m31=m13; this.m32=m14; this.m33=m15;
      this.cell = [
        m00, m01, m02, m03,
        m04, m05, m06, m07,
        m08, m09, m10, m11,
        m12, m13, m14, m15
      ]
      this.cells = [
        [m00, m01, m02, m03],
        [m04, m05, m06, m07],
        [m08, m09, m10, m11],
        [m12, m13, m14, m15]
      ]

    }
    
    else if(args.length>4&&args.length<=9){
      this.rows = 3
      this.cols = 3
      this.m00=m00; this.m01=m01; this.m02=m02;
      this.m10=m03; this.m11=m04; this.m12=m05;
      this.m20=m06; this.m21=m07; this.m22=m08;
      this.cell = [
        m00, m01, m02,
        m03, m04, m05,
        m06, m07, m08
      ]
      this.cells = [
        [m00, m01, m02],
        [m03, m04, m05],
        [m06, m07, m08]
      ]
    }
    
    else if(args.length>1&&args.length<=4){
      this.rows = 2
      this.cols = 2
      
      this.m00=m00; this.m01=m01;
      this.m10=m02; this.m11=m03;
      
      this.cell = [
        m00, m01,
        m02, m03
      ]
      this.cells = [
        [m00, m01],
        [m02, m03]
      ]
    }
    else if(args.length===1){
      if(typeof m00 === 'object'&& m00 && !Array.isArray(m00)){
        for(let key in m00){
          this[key] = m00[key] 
          this.cell.push(m00[key])
        }
      }
      else if(Array.isArray(m00)) {
        var cells = []
        this.rows = m00.length
        this.cols = m00[0].length
        for(var i=0;i<m00.length;i++){
          cells[i] = m00[i]
          for(var j=0;j<m00[0].length;j++){
            cells[i][j] = m00[i][j]
            this.cell.push(m00[i][j])
            this['m'+i+j] = m00[i][j]
          }
        }
        
        this.cells = cells
      }
    }
    else if(arg.length===0){}
  }
  matrix2array(m){
    var a = [];
    for (var x = 0; x < m.length; x++){
      for (var y = 0; y < m[x].length; y++){
        a.push(m[x][y])
      }
    }
    return a
  }
  array2matrix(a, n) {
    var m = [], i, k;
    for (i = 0, k = -1; i < a.length; i++) {
      if (i % n === 0) {
        k++;
        m[k] = [];
      }
      m[k].push(a[i]);
    }
    return m;
  }
}

/*
*/

class Matrix2 extends MatrixBuilder {
  constructor(m00 = 0, m01 = 0, m02 = 0, m03 = 0){
    if(arguments.length===1){
      if(typeof m00 === 'object'&& m00 && !Array.isArray(m00)){
        for(var i = 0;i<2;i++){
          for(var j = 0;j<2;j++){
            if(m00['m'+i+''+j]===undefined) m00['m'+i+''+j] = 0
          }
        }
        super(m00)
        this.rows = 2
        this.cols = 2
        this.cells = this.array2matrix(this.cell,2)
      }
      else if(Array.isArray(m00)) {
        super(m00)
      }
    }
    else{
      super(m00, m01, m02, m03)
    
    }
  }
}

/*
*/

class Matrix3 extends MatrixBuilder {
  constructor(m00=0, m01=0, m02=0, m03=0, m04=0, m05=0, m06=0, m07=0, m08=0){
    if(arguments.length===1){
      if(typeof m00 === 'object'&& m00 && !Array.isArray(m00)){
        for(var i = 0;i<3;i++){
          for(var j = 0;j<3;j++){
            if(m00['m'+i+''+j]===undefined) m00['m'+i+''+j] = 0
          }
        }
        super(m00)
        this.rows = 3
        this.cols = 3
        this.cells = this.array2matrix(this.cell,3)
      }
      else if(Array.isArray(m00)) {
        super(m00)
      }
    }
    else{
      super(m00, m01, m02, m03, m04, m05, m06, m07, m08)
    
    }
  }
}

/*
*/


class Matrix4 extends MatrixBuilder {
  constructor(m00=0, m01=0, m02=0, m03=0, m04=0, m05=0, m06=0, m07=0, m08=0, m09=0, m10=0, m11=0, m12=0, m13=0, m14=0, m15=0){
    if(arguments.length===1){
      if(typeof m00 === 'object'&& m00 && !Array.isArray(m00)){
        for(var i = 0;i<4;i++){
          for(var j = 0;j<4;j++){
            if(m00['m'+i+''+j]===undefined) m00['m'+i+''+j] = 0
          }
        }
        super(m00)
        this.rows = 4
        this.cols = 4
        this.cells = this.array2matrix(this.cell,4)

      }
      else if(Array.isArray(m00)) {
        super(m00)
      }
    }
    else{
      super(m00, m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13, m14, m15)
    
    }
  }
}

