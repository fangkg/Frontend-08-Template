/*
 * @Author: fangkg
 * @Date: 2021-01-17 20:04:23
 * @LastEditTime: 2021-01-17 20:15:10
 * @LastEditors: Please set LastEditors
 * @Description: 字符串分析算法--KMP字符串模式匹配算法
 * @FilePath: \codeRepository\Frontend-08-Template\Week 04\kmp.js
 */
function kmp(source, pattern) {
    // 计算table
    let table = new Array(pattern.length).fill(0);

    {
        let i = 1, j = 0;
        while(i < pattern.length) {
            if(pattern[i] === pattern[k]) {
                ++j, ++i;
                table[i] = j;
            } else {
                if (j > 0) {
                    j = table[j];
                } else {
                    ++i;
                }
            }
        }
    }
    
    {
        let i = 0, j = 0;
        while(i < source.length) {
            if(j === pattern.length) {
                return true;
            }
            if(pattern[j] === source[i]) {
                ++i, ++j;
            } else {
                if (j > 0) {
                    j = table[i];
                } else {
                    ++i;
                }
            }
            return false;
        }
    }
}