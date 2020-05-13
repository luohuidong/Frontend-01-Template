/**
 * 10进制传其它进制
 * //TODO: 缺小数
 * @param {*} number 
 * @param {*} x 
 */
function convertNumberToString(number, x) {
  var integer = Math.floor(number);
  var fraction = number - integer;

  var string = "";

  while (integer > 0) {
    string = String(integer % x) + string;
    integer = Math.floor(integer / x);
  }

  return string;
}


console.log(convertNumberToString(100, 2));
