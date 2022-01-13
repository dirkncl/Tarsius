//function Objectify(arr) {
//  var O = {}
//  for(var k of arr ) {
//    var key = k.trim().split('=')
//      O[key[0].trim()] =  +key[1].trim()
//      O[+key[1].trim()] = key[0].trim()
//  }
//  return O
//}

function Objectify(arr) {
  if(typeof arr === "string") {
    if(arr.includes('{')&&arr.includes('}')) {
      arr =  eval(arr.replace('{','[').replace('}',']'))
    }
    else {
      arr =  eval(arr)
    } 
  }
  var O = {}
  for(var i=0;i<arr.length;i++) {
    var k = arr[i]
    if(k.includes("=")||k.includes(":")) {
      var splt;
      if(k.includes("=")) {splt = "="}
      if(k.includes(":")) {splt = ":"}
      var key = k.split(splt)
      O[key[0].trim()] =  +key[1].trim()
      O[+key[1].trim()] = key[0].trim()
    }else {
      O[k] = i
      O[i] = k
    }
  }
  return O
}  
/*
var test1 = `{'a','b','c = 12','d'}`;
result = {
 "a":0,
 "b":1,
 "c":12,
 "d":3,
 "0":"a",
 "1":"b",
 "12":"c",
 "4":"d",
 
}

var test2 = `['a','b','c','d']`;
var test3 = `['a = 0','b','c = 1','d = 2']`;
var test4 = `{'a=0','b','c=11','d=22'}`;
var test5 =  ['a=0','b=1','c=1','d=2'];
var test6 =  ['a','b','c','d = 30'];
  
document.write('result1 = '+JSON.stringify(Objectify(test1))+'<br>')
document.write('result2 = '+JSON.stringify(Objectify(test2))+'<br>')
document.write('result3 = '+JSON.stringify(Objectify(test3))+'<br>')
document.write('result4 = '+JSON.stringify(Objectify(test4))+'<br>')
document.write('result5 = '+JSON.stringify(Objectify(test5))+'<br>')
document.write('result6 = '+JSON.stringify(Objectify(test6))+'<br>')

*/