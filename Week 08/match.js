/*
 * @Author: fangkg
 * @Date: 2021-02-14 10:34:40
 * @LastEditTime: 2021-02-14 10:47:29
 * @LastEditors: Please set LastEditors
 * @Description: 状态机
 * @FilePath: \codeRepository\Frontend-08-Template\Week 08\match.js
 */

 function match(string) {
     // 保存状态机当前状态
    let state = start
    for(let c of string) {
        // 切换到下一个状态
        state = state(c)
    }
    return state === end
 }

 function start(c) {
     if(c === 'a') {
         return foundA
     } else {
         return start
     }
 }

 // end状态永远返回end
 function end(c) {
     return end
 }

 function foundA(c) {
     if(c === 'b') {
         return foundB
     } else {
         return start(c)
     }
 }

 function foundB(c) {
     if (c === 'c') {
         return foundC
     } else {
         return start(c)
     }
 }

 function foundC(c) {
     if(c === 'd') {
         return foundD
     } else {
         return start(c)
     }
 }

 function foundD(c) {
     if (c === 'e') {
         return foundE
     } else {
         return start(c)
     }
 }

 function foundE(c) {
     if (c === 'f') {
         return end
     } else {
         return start(c)
     }
 }
