/*
 * @Author: fangkg
 * @Date: 2021-02-14 16:38:36
 * @LastEditTime: 2021-02-14 16:44:22
 * @LastEditors: Please set LastEditors
 * @Description: 状态机
 * @FilePath: \codeRepository\Frontend-08-Template\Week 08\abcabx.js
 */

 function match(string) {
     let state = start;
     for(let c of string) {
         state = state(c);
     }
     return state === end;
 }

 function start(c) {
     if(c === 'a') {
         return foundA;
     } else {
         return start;
     }
 }

 function end(c) {
     return end;
 }

 function foundA(c) {
     if(c === 'b') {
         return foundB;
     } else {
         return start(c);
     }
 }

 function foundB(c) {
     if(c === 'c') {
         return foundC;
     } else {
         start(c);
     }
 }

 function foundC(c) {
     if(c === 'a') {
        return foundA2
     } else {
         return start(c);
     }
 }

 function foundA2(c) {
     if(c === 'b') {
         return foundB2
     } else {
         return start(c);
     }
 }

 function foundB2(c) {
     if (c === 'x') {
         return end;
     } else {
         return foundB(c);
     }
 }