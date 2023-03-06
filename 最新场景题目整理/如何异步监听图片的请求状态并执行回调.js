

function loadImage(url){
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = function(){
            resolve(img)
        }
        img.onerror = function(){
            reject(new Error('加载失败'))
        }
        img.src = url;
    })
}

loadImage(url).then(img => {

    console.log(img);

}).catch(error => {
    console.error(error);
})

async function showImage(url){
    try{
        let img = await loadImage(url)
        console.log(img.height);
    } catch(error){
        console.error(error);
    }
}