// console.log("1234");
import { hi } from "./m.js";
console.log(hi)
let a = 10;
console.log(a);

function fn(a: number, b: number) {
    return a + b; 
}

function fn2(this: Window) {
    alert(this);
}

let box1 = document.getElementById('box1');

// if (box1 !== null) {
//     box1.addEventListener( 'click', function () {
//         alert('hello'); 
//     });
// }

//？判断是否存在
box1?.addEventListener('click', function () {
    alert('hello');
});