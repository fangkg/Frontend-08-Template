/*
 * @Author: fangkg
 * @Date: 2020-12-26 13:24:55
 * @LastEditTime: 2020-12-26 13:27:57
 * @LastEditors: Please set LastEditors
 * @Description: async await
 * @FilePath: \codeRepository\Frontend-08-Template\Week 01\async\async.js
 */

function sleep(t) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, t);
    })
}

async function* counter() {
    let i = 0;
    while(true) {
        await sleep(1000);
        yield i++;
    }
}

(async function() {
    for await(let v of counter()) {
        console.log('v:', v);
    }
})();