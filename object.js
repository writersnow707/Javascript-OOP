let memberArray = ['a', 'b', 'c'];
console.log("memberArray[2]", memberArray[2]);

let memberObject = {
    manager:'a',
    developer:'b',
    designer:'c'
}
memberObject.designer = 'd';
console.log("memberObject.designer" ,memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);
delete memberObject.manager
console.log("after delete memberObject.manager", memberObject.manager);