/* ******************************************************************
 * Natural Logarithm
 * Dirk Levinus Nicolaas
 * 26 Sept. 2021
 * Minahasa-Utara (Sulawesi Utara) - Indonesia
 ****************************************************************** */  
function Natural() {
  class Logarithm {
    ln(x) {
      //equiv Math.log(x)
      function le() {var uint16 = new Uint16Array(1);uint16[0] = 0x1234;var uint8 = new Uint8Array(uint16.buffer);return  uint8[0] === 0x34}
      
      var fh = function (n) { var float64 = new Float64Array(1);var uint32 = new Uint32Array(float64.buffer);float64[0] = n;return uint32[le() === true?1:0]}
      
      var mh = function (n, high) {var float64 = new Float64Array(1);var uint32 = new Uint32Array(float64.buffer);float64[0] = n;uint32[le() === true?1:0] = (high >>> 0);return float64[0]};
      var LN = {n:{h: '6.93147180369123816490e-01',l: '1.90821492927058770002e-10'},1: '0.6666666666666735',2: '0.3999999999940942',3: '0.2857142874366239',4: '0.22222198432149784',5: '0.1818357216161805',6: '0.15313837699209373',7: '0.14798198605116586'}
  
      var Lnh = +LN["n"]["h"], Lnl = +LN["n"]["l"], M = 0, O = Lnh, T = Lnl
  
      if( x === 0.0000 ) return Number.NEGATIVE_INFINITY
  
      if( x !== x || x < 0.0 ) return NaN
      
      var ht = fh( x );
      
    	var L, R, A, G, hx, xh, 
      
      L = 0|0;
      if ( ht < ( 0x00100000|0 ) ) {
      	L -= 54|0;
      	x *= 2**54;
      	ht = fh( x );
      }
      if( ht >= 0x7ff00000|0 ) return x + x
      
      L += ( ( ht>>20 ) - (1023|0) )|0;
      ht &= 0x000fffff|0;
      hx = ( (ht + 0x95f64) & 0x100000 )|0;
      
      x = mh( x, ht|(hx^(0x3ff00000|0)) );
      
      L += ( hx>>20 )|0;
      A = x - 1.0;
      if ( ((0x000fffff|0) & (2 + ht)) < 3 ) {
    		if ( A === 0.0 ) {if ( L === 0 ) { return 0.0};return (L * Lnh) + (L * Lnl);}
      	R = (A**2) * ( 0.5 - ((1/3) * A) );
    		if ( L === 0 ) {
    			return A - R;
    		}
      	return (L * Lnh) - ( (R - (L * Lnl)) - A );
      }
      G = A / (2.0 + A);
      var g2 = G**2;
      hx = (ht - 0x6147a)|0;
      var g4 = g2**2;
      xh = (0x6b851 - ht)|0;
      var ln1 = +LN["1"], ln2 = +LN["2"], ln3 = +LN["3"], ln4 = +LN["4"], ln5 = +LN["5"], ln6 = +LN["6"], ln7 = +LN["7"]; 
      var t = {1: g4 * ( g4 === 0.0 ?  ln2 : ln2 + (g4 * (ln4 + (g4 * ln6))) ),2: g2 * ( g4 === 0.0?  ln1 : ln1 + (g4 * (ln3 + (g4 * (ln5 + (g4 * ln7))))) )}
      hx |= xh;
      R = t["2"] + t["1"];
      if ( hx > 0 ) {
      	var m = 0.5 * (A**2);
      	if ( L === 0 ) { return A - ( m - (G * (m + R)) ) }
      	return (L * Lnh) - ( m - ((G * (m + R)) + (L * Lnl)) - A );
      }
    	if ( L === 0 ) { return A - (G * (A-R))}
      var I = L, H = A
      /* *************************************************** */
      /*      L   O      G     A   R      I   T    H   M    */
      /*       L   O      G     A   R      I   T    H   M   */
      /*        L   O      G     A   R      I   T    H   M  */
      /*         L   O      G     A   R      I   T    H   M */
      /*        L   O      G     A   R      I   T    H   M  */
      /*       L   O      G     A   R      I   T    H   M   */
      /*      L   O      G     A   R      I   T    H   M    */
      return (L * O)-((( G * ( A - R ))-( I * T ))-H )+M;   //
      /* *************************************************** */
      /*        N     A     T     U     R      A     L     */
      /* *************************************************** */
    }
  }
  var mathLog = new Logarithm
  return mathLog.ln
}

/* Test */
/*
var Ln = Natural()

document.write("<pre id=\"test\"></pre>")
var test = document.getElementById("test")
//for(var i = -1;i<=10000;i++){
//for(var i = -1;i<=1000; i++){
//for(var i = -1;i<=100; i+=0.1){
//for(var i = -1;i<=10; i+=0.01){
for(var i = 0;i<=3; i+=0.001){
  if(i==2||i==3||i==8||i==9||i==10||i==11){
    test.innerHTML += '------------------------------------------------------------------------------------------\n\n'
   }
   var j = i.toFixed(3)
   test.innerHTML +=  j+"| Ln ="+Ln(i)+"|   Math.log ="+Math.log(i)+"     | &Delta; = "+ (Math.log(i) - Ln(i)) +"\n"   
}
*/
