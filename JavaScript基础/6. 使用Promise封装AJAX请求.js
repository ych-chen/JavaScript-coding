


/* 使用Promise封装AJAX请求，是指如何使用Promise对象来简化和优化AJAX请求的过程，
使得代码更加清晰和可读，同时可以避免回调地狱的问题。 */


// 定义一个封装AJAX请求的函数，它返回一个Promise对象
function ajax(){
    // 返回一个Promise对象
    return new Promise(function(resolve, reject){
        // 创建一个XMLHttpRequest对象
        var xhr = new XMLHttpRequest();
        // 连接到服务器
        xhr.open("GET", url, true);
        // 发送请求
        xhr.send();
        // 设置响应HTTP请求状态变化的函数
        xhr.onreadystatechange = function(){
            // 如果请求完成并且响应成功
            if(xhr.readyState == 4 && xhr.status == 200){
                var data = xhr.response.data;
                resolve(data);
            }
            else {
                reject(new Error(xhr.statusText));
            }
        }
    })
}

ajax("https://.../api")
    .then(function(data){
    // 处理数据，比如更新页面
    // ...
    })
    .catch(function(error){
    // 处理错误，比如提示用户
    // ...
    })

    