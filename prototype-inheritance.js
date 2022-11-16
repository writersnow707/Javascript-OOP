let superObj = {superVal:'super'}
//let subObj = {subVal:'sub'}
//subObj.__proto__ = superObj;
let subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;
console.log('subObj.subVal => ', subObj.subVal);
console.log('subObj.superbVal => ', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superbVal => ', superObj.superVal);

let kim = {
    name:'kim',
    first:10, second:20,
    sum:function() {return this.first+this.second}
}

// let lee = {
//     name:'lee',
//     first:10, second:10,
//     avg:function() {
//         return (this.first+this.second)/2;
//     }
// }
// lee.__proto__ = kim;

let lee = Object.create(kim); // 권장되는 방법
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function() {
    return (this.first+this.second)/2;
}
console.log('lee.sum() : ', lee.sum());
console.log('lee.avg() : ', lee.avg());