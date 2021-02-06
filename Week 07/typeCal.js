/*
 * @Author: fangkg
 * @Date: 2021-02-06 21:35:32
 * @LastEditTime: 2021-02-06 21:42:52
 * @LastEditors: Please set LastEditors
 * @Description: 类型函数转换
 * @FilePath: \codeRepository\Frontend-08-Template\Week 07\typeCal.js
 */
function StringToNumber(value) {
    if(typeof value !== 'string') return;

    if(value.length >= 16) {
        if(BigInt(value) > BigInt(9007199254740991)) {
            return `${value}超出限制`
        }
        if(BigInt(value) < BigInt(-9007199254740991)) {
            return `${value}超出限制`
        }

        return Number(value);
    }
}

function NumberToString(value, radix = undefined) {
    if(Number.isInteger(value) && !Number.isSafeInteger(value)) 
        return `${BigInt(value)}超出限制`
    return value.toString(radix);
}