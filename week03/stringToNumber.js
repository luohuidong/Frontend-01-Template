/**
 * 1~10进制转换为10进制
 * 处理11进制到36进制
 */
function convertStringToNumber(string, x = 10) {
  // 将字符串中的每个字符拆分存放到数组
  const chars = [...string];

  let number = 0;

  let i = 0;

  // 处理整数部分
  while (i < chars.length && chars[i] !== ".") {
    number = number * x;
    number += chars[i].codePointAt(0) - "0".codePointAt(0);
    i++;
  }

  // 处理小数点部分
  if (chars[i] == ".") {
    i++;
  }

  // 处理小数部分
  var fraction = 1;
  while (i < chars.length) {
    fraction = fraction / x;
    number += (chars[i].codePointAt(0) - "0".codePointAt(0)) * fraction;
    i++;
  }

  return number;
}

console.log(convertStringToNumber("A", 11));
