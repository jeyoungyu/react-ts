"use strict";
// function sub(x:number,y:number){
//     return x - y;
// }
// const result = sub(5,10);
// console.log(result);
const sub = (x, y) => {
    return x - y;
};
const result = sub(5, 10); // 반환값을 저장
console.log(result);
//반환 자료형 없는 함수 : void
const greet = (name) => {
    console.log(`Hello , ${name}`);
};
greet("V");
