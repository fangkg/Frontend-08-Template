/*
 * @Author: fangkg
 * @Date: 2021-02-14 11:01:14
 * @LastEditTime: 2021-02-14 11:05:01
 * @LastEditors: Please set LastEditors
 * @Description: node服务
 * @FilePath: \codeRepository\Frontend-08-Template\Week 08\HTTP\server.js
 */

 const http = require('http');

 http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
        console.log('err:', err);
    }).on('data', (chunk) => {
        body.push(chunk.toString());
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log('body:', body);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('hellow world\n')
    })
 }).listen(8088);
