/**
 * 整数 number
 * //TODO: 缺整数
 * @param {*} number 
 * @param {*} x 
 */
function convertNumberToString(number, x) {
  var integer = Math.floor(number);
  // var fraction = number - integer;
  var string = "";

  while (integer > 0) {
    string += String(integer % x) + string;
    console.log("convertNumberToString -> String(integer % x)", String(integer % x))
    console.log("convertNumberToString -> string", string)
    integer = Math.floor(integer / x);
  }

  return string;
}

console.log(convertNumberToString(100, 10));
