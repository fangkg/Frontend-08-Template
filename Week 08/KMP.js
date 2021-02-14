/*
 * @Author: fangkg
 * @Date: 2021-02-14 16:59:07
 * @LastEditTime: 2021-02-14 17:07:02
 * @LastEditors: Please set LastEditors
 * @Description: 状态机
 * @FilePath: \codeRepository\Frontend-08-Template\Week 08\KMP.js
 */

 class StringKmp {
     #string;
     #pattern;
     constructor(string, pattern) {
         this.#pattern = pattern;
         this.#string = string;
         this.j = 0;
     }

     get table() {
         return this.generateTable();
     }

     setString(string) {
         this.#string = string;
     }

     setPattern(pattern) {
         this.#pattern = pattern;
     }

     generateTable() {
         let table = new Array(this.#pattern.length).fill(0);
         let i = 1, j = 0;
         while(i < this.#pattern.length) {
             if(this.#pattern[i] == this.pattern[j]) {
                 ++j, ++i;
                 table[i] = j;
             } else {
                 if(j > 0) {
                     j = table[j];
                 } else {
                     ++i;
                 }
             }
         }

         return table;
     }

     foundDynamic(c) {
         if(c === this.#pattern[this.j]) {
             ++this.j;
             if(this.j === this.#pattern.length) {
                 return this.end;
             }

             return this.foundDynamic;
         } else if(this.j > 0) {
             this.j = this.table[this.j];
             return this.foundDynamic(c);
         }

         return this.foundDynamic;
     }

     end() {
         return this.end;
     }

     match() {
         if(this.#string === this.#pattern) {
             return true;
         }
         this.state = this.foundDynamic.bind(this);
         for(let i = 0; i < this.#string.length; i++) {
             this.state = this.state(this.#string[i]);
         }
         this.j  = 0;
         return this.state === this.end;
     }
 }

 const stringKmp = new StringKmp('abababaxbabx', 'ababax');
 console.log('map:', stringKmp.match());