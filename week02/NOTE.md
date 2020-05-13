# 重学 JavaScript | 词法、类型

<a name="xXGGJ"></a>
## Unicode


<a name="YUVtf"></a>
### 资料


- [Unicode官网](https://home.unicode.org/adopt-a-character/about-adopt-a-character/) 
- [Unicode](https://www.fileformat.info/info/unicode/)
- fromCodePoint
- codePointAt
- BOM：Bit order mask
<a name="qqLFA"></a>
### 介绍

<br />Unicode 是一个字符集，规定了一系列的字符。凡是计算机领域里面的字符集，都有一个叫码点的概念。所谓码点，就是字符对应的整数。例如 A 对应的码点为 65，a 对应的码点为 97。为什么会知道 A 跟 a 对应的码点，因为 A 跟 a 非常特殊，它们来自于最初的一个字符集： ASCII 字符集。JS 中使用的字符集不是 ASCII 字符集，但是今天存在的字符集基本上都是将 ASCII 字符集保留了下来。

Unicode 是目前应用范围最广，得到最广泛支持的字符集。它把世界各国的字符都包含进去了。Unicode 从两个角度去看它，一个是它的 block，另外一个是 Categories。<br />

<a name="4X3UJ"></a>
## Number

<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587545384256-ae6e3418-9347-4411-8237-50bdc0065456.png#align=left&display=inline&height=395&margin=%5Bobject%20Object%5D&name=image.png&originHeight=695&originWidth=1311&size=162436&status=done&style=none&width=746)<br />

- [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)


<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587548235620-36cba3f5-1648-4319-8a27-683191a3e894.png#align=left&display=inline&height=621&margin=%5Bobject%20Object%5D&name=image.png&originHeight=621&originWidth=1140&size=199709&status=done&style=none&width=1140)<br />
<br />`0 .toString()` 之所以需要加一个空格，是避免将 `.` 当做小数点<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587550019826-f6cabff8-d238-4c3d-9050-ca2044cf3545.png#align=left&display=inline&height=563&margin=%5Bobject%20Object%5D&name=image.png&originHeight=563&originWidth=1140&size=152426&status=done&style=none&width=1140)
<a name="cLZWx"></a>
## String

<br />资料：<br />

- [String.prototype.charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
- [String.fromCodePoint()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)
- [String.prototype.codePointAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
- [String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
- [UTF-8](https://en.wikipedia.org/wiki/UTF-8)


<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587550233161-bca9bbb2-bbc7-4a04-a847-111af7fc24fc.png#align=left&display=inline&height=351&margin=%5Bobject%20Object%5D&name=image.png&originHeight=480&originWidth=1020&size=60953&status=done&style=shadow&width=746)<br />
<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587550947547-04711a47-7dd8-4512-a16c-9f373c1bed58.png#align=left&display=inline&height=417&margin=%5Bobject%20Object%5D&name=image.png&originHeight=599&originWidth=1071&size=119195&status=done&style=shadow&width=746)<br />
<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587554119267-af745c5f-a477-4109-a77a-2489f0951de5.png#align=left&display=inline&height=362&margin=%5Bobject%20Object%5D&name=image.png&originHeight=551&originWidth=1135&size=173967&status=done&style=shadow&width=746)<br />
<br />以 ab 两个字符为例，UTF-8 以8位来代表一个字符，而UTF-16以16位来代表一个字符<br />
<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587554296681-a4f26b8b-b2a7-430d-b84e-e6cda87f691e.png#align=left&display=inline&height=370&margin=%5Bobject%20Object%5D&name=image.png&originHeight=566&originWidth=1140&size=169505&status=done&style=shadow&width=746)<br />
<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587554814501-fd536ded-be68-4f48-958e-3250b5a2c383.png#align=left&display=inline&height=241&margin=%5Bobject%20Object%5D&name=image.png&originHeight=348&originWidth=1075&size=41508&status=done&style=shadow&width=746)<br />
<br />
<br />
<br />

