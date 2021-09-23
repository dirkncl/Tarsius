/* ******************************************************************
 * Random Number Generator
 * Dirk Levinus Nicolaas
 * 23 Sept. 2021
 * Minahasa-Utara (Sulawesi Utara) - Indonesia
 ****************************************************************** */  
function random() {
  class Random {
    constructor(Seed) {
      Seed = Seed||+this.Osc()
      this.accu = [];
      for (var i = 0; i < this.#cntP1; i++) this.accu.push(0);
      var mPrimeOrSeed = (Seed == -(this.#mPrime+1)) ? this.#mPrime : (Seed < 0 ? Seed * -1 : Seed);
      var diff = this.#mSeed - mPrimeOrSeed;
      this.accu[this.#cnt] = diff;
      var n = 1;
      
      for (var i = 1; i < this.#cnt; i++) {
        var count = 21 * i % this.#cnt;
        this.accu[count] = n;
        n = diff - n;
        if (n < 0) {
          n += this.#mPrime;
        }
        diff = this.accu[count];
      }
      for (var j = 1; j < 5; j++) {
        for (var k = 1; k < this.#cntP1; k++) {
          this.accu[k] -= this.accu[1 + (k + 30) % this.#cnt];
          if (this.accu[k] < 0) { this.accu[k] += this.#mPrime }
        }
      }
      this.inext = 0;
      this.inextp = 21;
      Seed = 1;
    }
    Osc() { var str = new Date().valueOf().toString(); return str.substr(str.length - 6);}
    #cnt = 55
    #cntP1 = this.#cnt + 1
    #marsennePrime = '2^(31) - 1'
    #maxRand = '4.6566128752457969E-10'
    #Phi = '(1+(5^(1/2)))/2'  //Golden Ratio
    #marsenneSeed = this.#Phi + ' * 10^8'
    #mSeed = eval(this.#marsenneSeed.replace(/\^/g,"**"))
    #mPrime = eval(this.#marsennePrime.replace(/\^/g,"**"))
    generate() {
        var next = this.inext;
        var nextp = this.inextp;
        if (++next >= this.#cntP1) {
            next = 1;
        }
        if (++nextp >= this.#cntP1) {
            nextp = 1;
        }
        var diff = this.accu[next] - this.accu[nextp];
        if (diff == this.#mPrime) {
            diff--;
        }
        if (diff < 0) {
            diff += this.#mPrime;
        }
        this.accu[next] = diff;
        this.inext = next;
        this.inextp = nextp;
        return diff;
    }
    randomNumber() {
        return this.generate() * this.#maxRand;
    }
  } 
  
  var genrerate = new Random()
  var randomNumberGenerator
  if(arguments.length===2){
    var min = arguments[0]
    var max = arguments[1]
    randomNumberGenerator = genrerate.randomNumber() * (max - min) + min
  }else if(arguments.length===1) {
    randomNumberGenerator = genrerate.randomNumber() * arguments[0]
  }else{
    randomNumberGenerator = genrerate.randomNumber()
  }
  return randomNumberGenerator
}
//* console.log("random: ",random()) // 0.??????
//* console.log("random(200): ",random(200)) // 0.?????? - 200.????
//* console.log("random(20, 194): ",random(20, 194)) // 20.?????? - 194.????
