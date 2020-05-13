
function UTF8_Encoding(str) {
  // strint 转 unicode
  const pointValueArr = [];

  [...str].forEach((char) => {
    const pointValue = char.codePointAt(0);
    console.log("functionUTF8_Encoding -> pointValue", pointValue)
    pointValueArr.push(pointValue);
  });

  const utf8Arr = []
  // unicode 转 utf-8, 用十六进制表达
  pointValueArr.forEach((pointValue) => {
    utf8Arr.push(pointValue.toString(16))
  });
  
  console.log("functionUTF8_Encoding -> utf8Arr", utf8Arr)

  return utf8Arr
}

console.log(UTF8_Encoding('$'))
