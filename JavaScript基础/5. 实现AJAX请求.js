


/* AJAX 是指通过JavaScript的异步通信，从服务器中获取
XML文档提取数据，更新当前网页的对应部分，而不用刷新整个网页。
1. 创建一个 XMLHttpRequest 对象
2. 在这个对象上使用 open 方法创建一个 HTTP 请求，
open 方法所需要的参数是请求的方法、请求的地址、是否异步和用户的认证信息。
3. 在发起请求前，可以为这个对象**添加一些信息和监听函数**。
一个 XMLHttpRequest 对象一共有 5 个状态，当它的状态变化时会触发onreadystatechange 事件
以通过设置监听函数，来处理请求成功后的结果
当对象的 readyState 变为 4 的时候，代表服务器返回的数据接收完成，这个时候可以通过判断请求的状态，如果状态是 2xx 或者 304 的话则代表返回正常。
4. 当对象的属性和监听函数设置完成后，最后调用 sent 方法来向服务器发起请求，可以传入参数作为发送的数据体。
*/


let xhr = new XMLHttpRequest();
// 创建 Http 请求
// 方法：GET或POST
// URL：请求的服务器地址
// async：true（异步）或false（同步）
// user：可选，用户名
// password：可选，密码
xhr.open(method, url, async, user, password);

// 设置状态监听函数
xhr.onreadystatechange = function() {
  // 如果请求完成并且响应成功
  if (xhr.readyState == 4 && xhr.status == 200) {
    // 获取服务器返回的数据
    var data = xhr.responseText;
    // 处理数据，比如更新页面
    // ...
  }
}
// 设置请求失败时的监听函数
xhr.onerror = function(){
    console.error(this.statusText);
}

// 设置请求头信息
xhr.responseType = "json";
xhr.setRequestHeader("Accept", "application/json");

// data：可选，发送的数据，如果是GET请求，可以省略
xhr.send(data);
