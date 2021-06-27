/****************************/
/*      TEST                */
/****************************/
console.warn('Matrix2')
//input array
var vm2 = new Matrix2([
  [3, 4],
  [5, 6]
]) 
//input object
var vm21 = new Matrix2({
  m00:3, m01:4,
  m10:5, m11:6
})

var vm22 = new Matrix2(
  3, 4,
  5, 6
)
var vm23 = new Matrix2()

console.log('result vm2:'+JSON.stringify(vm2))
//result vm2:{"cells":[[3,4],[5,6]],"cell":[3,4,5,6],"rows":2,"cols":2,"m00":3,"m01":4,"m10":5,"m11":6}
console.log('result vm21:'+JSON.stringify(vm21))
//result vm21:{"cells":[[3,4],[5,6]],"cell":[3,4,5,6],"rows":2,"cols":2,"m00":3,"m01":4,"m10":5,"m11":6}
console.log('result vm22:'+JSON.stringify(vm22))
//result vm22:{"cells":[[3,4],[5,6]],"cell":[3,4,5,6],"rows":2,"cols":2,"m00":3,"m01":4,"m10":5,"m11":6}
console.log('result vm23:'+JSON.stringify(vm23))
//result vm23:{"cells":[[0,0],[0,0]],"cell":[0,0,0,0],"rows":2,"cols":2,"m00":0,"m01":0,"m10":0,"m11":0}


/********************************************/

console.log('')
console.log('')
console.warn('Matrix3')
//input array
var vm3 = new Matrix3([
  [3,  4,  5],
  [6,  7,  8],
  [9, 10, 11]
])
//input object
var vm31 = new Matrix3({
  m00:3, m01: 4, m02: 5,
  m10:6, m11: 7, m12: 8,
  m20:9, m21:10, m22:11
})

var vm32 = new Matrix3(
  3,  4,  5,
  6,  7,  8,
  9, 10, 11
)
var vm33 = new Matrix3()

console.log('result:'+JSON.stringify(vm3))
//result:{"cells":[[3,4,5],[6,7,8],[9,10,11]],"cell":[3,4,5,6,7,8,9,10,11],"rows":3,"cols":3,"m00":3,"m01":4,"m02":5,"m10":6,"m11":7,"m12":8,"m20":9,"m21":10,"m22":11}
console.log('result:'+JSON.stringify(vm31))
//result:{"cells":[[3,4,5],[6,7,8],[9,10,11]],"cell":[3,4,5,6,7,8,9,10,11],"rows":3,"cols":3,"m00":3,"m01":4,"m02":5,"m10":6,"m11":7,"m12":8,"m20":9,"m21":10,"m22":11}
console.log('result:'+JSON.stringify(vm32))
//result:{"cells":[[3,4,5],[6,7,8],[9,10,11]],"cell":[3,4,5,6,7,8,9,10,11],"rows":3,"cols":3,"m00":3,"m01":4,"m02":5,"m10":6,"m11":7,"m12":8,"m20":9,"m21":10,"m22":11}
console.log('result:'+JSON.stringify(vm33))
//result:{"cells":[[0,0,0],[0,0,0],[0,0,0]],"cell":[0,0,0,0,0,0,0,0,0],"rows":3,"cols":3,"m00":0,"m01":0,"m02":0,"m10":0,"m11":0,"m12":0,"m20":0,"m21":0,"m22":0}


/********************************************/
console.log('')
console.log('')
console.warn('Matrix4')

var vm4 = new Matrix4([
  [3,   4,  5,  6],
  [7,   8,  9, 10],
  [11, 12, 13, 14],
  [15, 16, 17, 18]
])

var vm41 = new Matrix4({
  m00: 3, m01: 4,  m02:  5, m03: 6,
  m10: 7, m11: 8,  m12:  9, m13:10,
  m20:11, m21: 12, m22: 13, m23:14,
  m30:15, m31: 16, m32: 17, m33:18
})

var vm42 = new Matrix4(
  3,   4,  5,  6,
  7,   8,  9, 10,
  11, 12, 13, 14,
  15, 16, 17, 18
)
var vm43 = new Matrix4()

console.log('result: vm4:'+JSON.stringify(vm4))
//result: vm4:{"cells":[[3,4,5,6],[7,8,9,10],[11,12,13,14],[15,16,17,18]],"cell":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"rows":4,"cols":4,"m00":3,"m01":4,"m02":5,"m03":6,"m10":7,"m11":8,"m12":9,"m13":10,"m20":11,"m21":12,"m22":13,"m23":14,"m30":15,"m31":16,"m32":17,"m33":18}

console.log('result: vm41'+JSON.stringify(vm41))
//result: vm41{"cells":[[3,4,5,6],[7,8,9,10],[11,12,13,14],[15,16,17,18]],"cell":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"rows":4,"cols":4,"m00":3,"m01":4,"m02":5,"m03":6,"m10":7,"m11":8,"m12":9,"m13":10,"m20":11,"m21":12,"m22":13,"m23":14,"m30":15,"m31":16,"m32":17,"m33":18}

console.log('result: vm42:'+JSON.stringify(vm42))
//result: vm42:{"cells":[[3,4,5,6],[7,8,9,10],[11,12,13,14],[15,16,17,18]],"cell":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"rows":4,"cols":4,"m00":3,"m01":4,"m02":5,"m03":6,"m10":7,"m11":8,"m12":9,"m13":10,"m20":11,"m21":12,"m22":13,"m23":14,"m30":15,"m31":16,"m32":17,"m33":18}
console.log('result: vm43:'+JSON.stringify(vm43))
//result: vm43:{"cells":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"cell":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"rows":4,"cols":4,"m00":0,"m01":0,"m02":0,"m03":0,"m10":0,"m11":0,"m12":0,"m13":0,"m20":0,"m21":0,"m22":0,"m23":0,"m30":0,"m31":0,"m32":0,"m33":0}
