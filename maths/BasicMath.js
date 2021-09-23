/* ******************************************************************
 * Factorial
 * Dirk Levinus Nicolaas
 * 23 Sept. 2021
 * Minahasa-Utara (Sulawesi Utara) - Indonesia
 ****************************************************************** */  
function factorial(x, n) {
  if (n==null) n=1;
  var m = round(x*10**6)/10**6
  var abs = (x - m)<0?(x - m)* -1:(x - m)
  if (abs<1e-15) x = m;
  if (x-(x|0)!=0) return NaN;
  for (var i=x-n; i>0; i-=n) x*=i;
  return (x<0?NaN:(x==0?1:x));
}
     
/* ******************************************************************
 * Simple Math Expression
 * Dirk Levinus Nicolaas
 * 23 Sept. 2021
 * Minahasa-Utara (Sulawesi Utara) - Indonesia
 ****************************************************************** */  
function Expr(vars, str) {
  if(arguments.length===2){ vars = arguments[0]; str = arguments[1] }
  if(arguments.length===1){ str = arguments[0] }
  str = str.replace(/\b([a-z]+ *\()/g, 'Math.$1');
  str = str.replace(/([0-9a-zA-Z]+)(\!)/g,"factorial($1)");
  str = str.replace(/\^/g, '**');
  if(arguments.length===2){ return new Function(vars, "return " + str) }
  if(arguments.length===1){ return "return " + str }
}
      
/* ******************************************************************
 * Exp -->e^x
 * Dirk Levinus Nicolaas
 * 23 Sept. 2021
 * Minahasa-Utara (Sulawesi Utara) - Indonesia
 ****************************************************************** */  
function Exp(x, n){
  //equiv Math.exp
  n = n||100; var fnc =""
  for(var i=1;i<=n;i++){ fnc +=' + '+ '(a^'+i+')/('+i+'!)' }; fnc = '1 '+fnc
  var vars = "a, i"
  var func = Expr(vars, fnc)
  return func(x, n)
}
//console.log(Exp(-1))
//console.log(Math.exp(-1))

/* ******************************************************************
 * Sin -->sin()
 * Dirk Levinus Nicolaas
 * 23 Sept. 2021
 * Minahasa-Utara (Sulawesi Utara) - Indonesia
 ****************************************************************** */  
function Sin(x, n) {
  //equiv Math.sin
	n = n || 7
  var fnc = ''
 	for (var i=1; i<=n; i++) {
		fnc +=' + '+ '(term = (('+i+'*2)+1), (('+i+' & 0x01)? -1 : +1) * ((a^term)/term!))';
	}
  fnc = 'a '+ fnc
  var vars = "a, i"
	var func = Expr(vars, fnc)
  return func(x, n)
}
//console.log("Math.sin(0.5) = " + Math.sin(0.5));
//console.log("     Sin(0.5) = " + Sin(0.5));

/* ******************************************************************
 * Cosn -->Cos()
 * Dirk Levinus Nicolaas
 * 23 Sept. 2021
 * Minahasa-Utara (Sulawesi Utara) - Indonesia
 ****************************************************************** */  
function Cos(x, n){
  //equiv Math.cos
  n = n || 7
  var fnc = ''
  for (var i=1; i<=n; i++) {
		fnc +=' + '+ '(term = '+i+'*2, (('+i+' & 0x01)? -1 : +1) * ((a^term)/term!))';
	}
  fnc = '1 '+ fnc
  var vars = "a"
	var func = Expr(vars, fnc)
  return func(x, n)
}
//console.log("Math.cos(0.5) = " + Math.cos(0.5));
//console.log("     Cos(0.5) = " + Cos(0.5));
