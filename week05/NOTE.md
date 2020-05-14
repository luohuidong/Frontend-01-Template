# 浏览器工作原理（一）：HTTP篇

一个 URL 变成页面上显示的网页,需要经过一下步骤:

1. 浏览器首先使用 HTTP 协议或者 HTTPS 协议，向服务端请求页面；
2. 把请求回来的 HTML 代码经过解析，构建成 DOM 树；
3. 计算 DOM 树上的 CSS 属性；
4. 最后根据 CSS 属性对元素逐个进行渲染，得到内存中的位图；
5. 一个可选的步骤是对位图进行合成，这会极大地增加后续绘制的速度；
6. 合成之后，再绘制到界面上。

从 HTTP 请求回来就产生了流式数据，后续的 DOM 树构建、CSS 计算、渲染、合成、绘制，都是尽可能地流式处理前一步的产出。因此每一步是不需要等待前一步完全结束，才开始处理上一步的输出。因此我们在浏览网页的时候，才会看到逐渐出现的网页。

## HTTP 协议

浏览器首先要做的事就是根据 URL 把数据取回来，取回数据使用的是 HTTP 协议，实际上这个过程之前还有 DNS 查询。

HTTP 报文格式分为请求报文和响应报文

- Request
  - request line
    - method
    - path
    - version
  - head
  - body
- response
  - response line
    - version
    - status code
    - status text
  - head
  - body

报文详细的结构，可以查看[《图解HTTP——请求报文及响应报文的结构》](https://www.ituring.com.cn/book/miniarticle/74637)

### HTTP Method

- GET
- POST
- HEAD
- PUT
- DELETE
- CONNECT：现多用于 HTTPS 和 WebSocket
- OPTIONS：一般用于调试
- TRACE：一般用于调试

### HTTP Status code 和 Status text

- 1xx：临时回应，表示客户端请继续。
- 2xx：请求成功。
  - 200：请求成功。
- 3xx: 表示请求的目标有变化，希望客户端进一步处理。
  - 301&302：永久性与临时性跳转。
  - 304：客户端缓存没有更新。
- 4xx：客户端请求错误。
  - 403：无权限。
  - 404：表示请求的页面不存在。
  - 418：It’s a teapot. 这是一个彩蛋，来自 ietf 的一个愚人节玩笑。（超文本咖啡壶控制协议）
- 5xx：服务端请求错误。
  - 500：服务端错误。
  - 503：服务端暂时性错误，可以一会再试。

### HTTP Head

HTTP 头部可以看做键值对，在 HTTP 标准中，有完整的请求 / 响应头规定。

### HTTP Request Body

常见的 Body 格式有：

- application/json
- application/x-www-form-urlencoded
- multipart/form-data
- text/xml

## HTTPS

HTTPS 的作用有两个：

- 确定请求的目标服务端身份
- 保证传输的数据不会被网络中间节点窃听或者篡改

HTTPS 是使用加密通道来传输 HTTP 的内容，但是 HTTPS 首先与服务器建立一条 TLS 加密通道。TLS 构建于 TCP 协议之上，它实际上是对传输的内容做一次加密，所以从传输内容上看，HTTPS 跟 HTTP 没有任何区别。

## HTTP2

HTTP2 是 HTTP 1.1 的升级版本，它最大的改进有两点：

1. 支持服务器推送：务端推送能够在客户端发送第一个请求到服务端时，提前把一部分内容推送给客户端，放入缓存当中，这可以避免客户端请求顺序带来的并行度不高，从而导致的性能问题。
2. 支持 TCP 连接复用：TCP 连接复用，则使用同一个 TCP 连接来传输多个 HTTP 请求，避免了 TCP 连接建立时的三次握手开销，和初建 TCP 连接时传输窗口小的问题
