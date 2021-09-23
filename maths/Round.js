/* ******************************************************************
 * Round
 * Dirk Levinus Nicolaas
 * 23 Sept. 2021
 * Minahasa-Utara (Sulawesi Utara) - Indonesia
 ****************************************************************** */  

function Int(n){return parseInt(n)}
function Float(n){return parseFloat(n)}
function round(x, decimal) {
  decimal = decimal || 0
  var vars = "n, r"
  var func = '(Int(n . (10^(r + 1))) - Int(n . (10^r)) . 10) > 4 ? (((Float(Int((n + Float(1 / (10^r))) * (10^r))))) / (10^r)) : (Float(Int(n . (10^r))) / ( 10^r))'.replace(/\^/g, '**').replace(/\s\.\s/g, '*')
  var f = new Function(vars, 'return '+func)
  return f(x, decimal)
}
