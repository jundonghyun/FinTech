// 예전방식으로 선언한것
// function test(a, b){
//     return a + b;
// }

// let a = test(3,4)

//console.log(a)

//최근방식으로 선언(arrow function)

const plus = (p1, p2) => {
    console.log(this)
    return p1 + p2;
}

plus(2,3);

const add = (x, y) => x + y;
const minus = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;


// console.log(add(1,2));
// console.log(minus(1,2));
// console.log(mul(1,2));
// console.log(div(1,2));