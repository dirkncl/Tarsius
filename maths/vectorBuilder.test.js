 /********************/
 /*    TEST          */
 /********************/
 console.warn("Vector3")
 var v2 = new Vector2(2,3)
 var v21 = new Vector2([2,3])
 var v22 = new Vector2({x:2,y:3})
 var v23 = new Vector2()

 console.log('result:'+JSON.stringify(v2))
 console.log('result:'+JSON.stringify(v21))
 console.log('result:'+JSON.stringify(v22))
 console.log('result:'+JSON.stringify(v23))

/*********************/
console.log()
console.log()
console.warn("Vector3")
 var v3 = new Vector3(2,3,5)
 var v31 = new Vector3([2,3,5])
 var v32 = new Vector3({x:2,y:3,z:5})
 var v33 = new Vector3()

 console.log('result:'+JSON.stringify(v3))
 console.log('result:'+JSON.stringify(v31))
 console.log('result:'+JSON.stringify(v32))
 console.log('result:'+JSON.stringify(v33))

/*************************/
console.log()
console.log()
console.warn("Vector4")
 var v4 = new Vector4(2,3,5,6)
 var v41 = new Vector4([2,3,5,6])
 var v42 = new Vector4({x:2,y:3,z:5,w:6})
 var v43 = new Vector4()

 console.log('result:'+JSON.stringify(v4))
 console.log('result:'+JSON.stringify(v41))
 console.log('result:'+JSON.stringify(v42))
 console.log('result:'+JSON.stringify(v43))
