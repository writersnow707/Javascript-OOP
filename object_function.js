let kim = {name:'kim', first:10, second:20}
let lee = {name:'lee', first:10, second:10}
function sum(prefix) {
    return prefix+(this.first+this.second);
}
// JS function = Object
// sum();
console.log("sum.call(kim)", sum.call(kim, '=> ')); //apply
console.log("lee.call(kim)", sum.call(lee, ': '));
let kimSum = sum.bind(kim, '-> '); // call과 달리, 새로운 함수를 생성
console.log('kimSum()', kimSum());