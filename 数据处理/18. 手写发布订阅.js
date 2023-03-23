


class PubSub {
    constructor(){
        this.events = {}
    }
// subscribe方法用于订阅特定事件，并将回调函数添加到该事件的回调数组中
    subscribe(event, callback){
        if(!this.events[event]){
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
// 当调用publish方法时，它会触发指定事件，并将数据传递给该事件的所有回调函数。
    publish(event, data){
        if(this.events[event]){
            this.events[event].forEach( callback => callback(data))
        }
    }
}

// use
const pubsub = new PubSub();

pubsub.subscribe('myEvent', data => console.log(data));

pubsub.publish('myEvent', 'Hello World!'); // 输出 'Hello World!'
