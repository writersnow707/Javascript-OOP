let memberArray = ['a', 'b', 'c'];
console.group('array loop');
let i = 0;
while (i < memberArray.length) {
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');
let memberObject = {
    manager:'a',
    developer:'b',
    designer:'c'
}
console.group('object loop');
for (let name in memberObject) {
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');