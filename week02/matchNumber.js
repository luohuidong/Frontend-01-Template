// DecimalLiteral
// BinaryIntergerLiteral
// OctalIntergerLiteral
// HexIntegerLiteral
// Float

const regexp = /\d+|0[bB][01]+|0[oO][0-7]+|0[xX][0-9a-fA-F]|[0-9]*\.[0-9]+/

console.log(regexp.test(111))
console.log(regexp.test(0000001))
console.log(regexp.test('0b10100101'));
console.log(regexp.test('0B10100101'));
console.log(regexp.test('0o0765543'));
console.log(regexp.test('0OFEDBCA98765'));
console.log(regexp.test(1.1));

