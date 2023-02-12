
//红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；如何让三个灯不断交替重复亮灯？

function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

/* 递归
*/

const task1 = (timer, light, callback) => {
    setTimeout(() => {
        if (light === 'red') {
            red()
        }
        else if (light === 'green') {
            green()
        }
        else if (light === 'yellow') {
            yellow()
        }
        callback()
    }, timer)
}

const step1 = () => {
    task1(3000, 'red', () => {
        task1(2000, 'green', () => {
            task1(1000, 'yellow', step1)
        })
    })
}
step1()

/* promise
*/

const task2 = (timer, light) => (
    new Promise((resolve,reject) => {
        setTimeout(() => {
            if (light === 'red') {
                red()
            }
            else if (light === 'green') {
                green()
            }
            else if (light === 'yellow') {
                yellow()
            }
            resolve()
        },timer)
    }) 
)
const step2 = () =>{
    task2(3000,'red')
    .then(() => task2(2000, 'green'))
    .then(() => task2(2100, 'yellow'))
    .then(step2);
}
step2();

// async await 
const step3 = async () => {
    await task2(3000, 'red');
    await task2(2000, 'green');
    await task2(2100, 'yellow');
    step3();
}
step3();