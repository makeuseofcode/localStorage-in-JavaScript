// This file contains code demonstrating the functionalities of the several localStorage methods

// 1. Store item in localStorage
window.localStorage.setItem('Python', 'Guido van Rossum');
const student = {
    name: "Yuvraj",
    marks: 85,
    subject: "Machine Learning"
}
const scores = [76, 77, 34, 67, 88];
window.localStorage.setItem('result', JSON.stringify(student));
window.localStorage.setItem('marks', JSON.stringify(scores));



// 2. Retrive item from localStorage
let data1 = window.localStorage.getItem('Python');
let data2 = window.localStorage.getItem('result');
console.log(data1);
console.log(data2);
let data3 = JSON.parse(window.localStorage.getItem('result'));
console.log(data3);



// 3. Delete item from localStorage
window.localStorage.removeItem('Python');
window.localStorage.removeItem('C++');



// 4. Clear items from localStorage
window.localStorage.clear();



// 5. Find length of localStorage
let len = localStorage.length;
console.log(len);



// 6. Get key
let d = localStorage.key(1);
console.log(d);



// 7. Iterate over items in localStorage
for (let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(key, value);
}