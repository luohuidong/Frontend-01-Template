# 表达式

## 运算符

运算符的优先级是理解表达式优先级的方式。表达式的优先级，主要是通过表达式生成树的方式来实现的。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587788032913-cf7b227a-fb33-471b-86b4-0cf9cc492bfa.png#align=left&display=inline&height=297&margin=%5Bobject%20Object%5D&name=image.png&originHeight=364&originWidth=915&size=58794&status=done&style=shadow&width=746)
以四则运算 `1+2*3` 为例，从程序员的角度来看，这个叫做运算符的优先级。从语言的定义和实现来看，这个叫生成语法的树结构。

## Left-Hand-Side Expression

在 ECMA-262 10 版的 12.3 小节

所谓的 Left-Hand-Side 表达式，其实就是指等到的左边

## Member Expression 以及 New Expression

![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587644765744-fb4c6ed6-907e-4d7d-b268-c1ca6b51e06c.png#align=left&display=inline&height=384&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1218&originWidth=2364&size=445211&status=done&style=shadow&width=746)
在 JS 中规定了带 `()` 的优先级更高。

- [new.target](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target)

```javascript
function foo(){
  console.log(arguments)
}
foo`string`
```

![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587646450431-97298263-58d8-489c-9075-d879eeebcb1d.png#align=left&display=inline&height=364&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1042&originWidth=2138&size=186389&status=done&style=shadow&width=746)

## Call Expression（函数调用）

比 new 运算符优先级更低的是 Call Expression。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587647339280-bd7bb2e6-e15c-431c-9ab4-22bf3e148ee9.png#align=left&display=inline&height=382&margin=%5Bobject%20Object%5D&name=image.png&originHeight=960&originWidth=1874&size=246676&status=done&style=shadow&width=746)
当 Call 后面跟 Member 的时候，Member 的优先级会变低。例如 `new a()['b']` ，它会先执行 `new` 在执行读取 member。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587647071546-b187abd2-1261-4718-bc87-96e1596dc4c8.png#align=left&display=inline&height=327&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1022&originWidth=2332&size=227807&status=done&style=shadow&width=746)

## 更新运算符

![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587647399771-e907e45e-41f9-46d2-968c-b9e3423d3155.png#align=left&display=inline&height=307&margin=%5Bobject%20Object%5D&name=image.png&originHeight=862&originWidth=2098&size=198069&status=done&style=shadow&width=746)![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587647825934-5f94049c-fb30-406f-9fda-b2a32b68ae39.png#align=left&display=inline&height=600&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1296&originWidth=1612&size=260505&status=done&style=shadow&width=746)
void 在 JS 中是运算符，void 跟任何东西都会返回 `undefined` 。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587648734129-85c9c7d2-e89c-4321-a939-dca927c7f39f.png#align=left&display=inline&height=499&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1284&originWidth=1920&size=324196&status=done&style=none&width=746)![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587648825243-de99fc25-1e52-4c7e-8548-ebb247fad3c6.png#align=left&display=inline&height=452&margin=%5Bobject%20Object%5D&name=image.png&originHeight=968&originWidth=1598&size=173849&status=done&style=none&width=746)
逻辑运算不做 boolean 类型的转换
![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587649632777-5b5befad-cfee-4008-9730-c07fdb63da19.png#align=left&display=inline&height=501&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1174&originWidth=1748&size=187657&status=done&style=none&width=746)

## 类型转换

![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587649683780-fa37716b-7df6-4f64-9997-db9daaa8c26a.png#align=left&display=inline&height=546&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1092&originWidth=2360&size=1079425&status=done&style=none&width=1180)

## 装箱与拆箱

- `[Symbol.toPrimitive]` 
- `valueOf` 
- `toString` 

![image.png](https://cdn.nlark.com/yuque/0/2020/png/103970/1587650859195-72c55daa-f65f-4100-b3cc-d24419731455.png#align=left&display=inline&height=356&margin=%5Bobject%20Object%5D&name=image.png&originHeight=814&originWidth=1708&size=170459&status=done&style=none&width=746)
