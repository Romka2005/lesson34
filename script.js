// If 1
// let a = +prompt("Введите целое число");
// if(a>0){
//     a++;
// }
// alert(a);

// If 2
// let a = +prompt("Введите целое число");
// if(a>0){
//     a++;
// }
// else{
//     a-=2;
// }
// alert(a);

// If 3
// let a = +prompt("Введите целое число");
// if(a>0){
//     a++;
// }
// else if(a<0){
//     a-=2;
// }
// else{
//     a=10;
// }
// alert(a);

// If 4
// let a = +prompt("Введите 1 целое число");
// let b = +prompt("Введите 2 целое число");
// let c = +prompt("Введите 3 целое число");
// let plus = 0;
// if(a>0){
//     plus++;
// }
// if(b>0){
//     plus++;
// }
// if(c>0){
//     plus++;
// }
// alert(plus);

// If 5
// let a = +prompt("Введите 1 целое число");
// let b = +prompt("Введите 2 целое число");
// let c = +prompt("Введите 3 целое число");
// let plus = 0, minus = 0, nulll = 0;

// if(a>0){
//     plus++;
// }
// else if(a<0){
//     minus++;
// }
// else{
//     nulll++;
// }

// if(b>0){
//     plus++;
// }
// else if(b<0){
//     minus++;
// }
// else{
//     nulll++;
// }

// if(c>0){
//     plus++;
// }
// else if(c<0){
//     minus++;
// }
// else{
//     nulll++;
// }
// alert(`Plus: ${plus}; Minus: ${minus}; Null: ${nulll}`);

// If 6
// let a = +prompt("Введите 1 целое число a");
// let b = +prompt("Введите 2 целое число b");

// if(a>b){
//     alert(`${a} > b`);
// }
// else{
//     alert(`${b} > a`);
// }

// If 7
// let a = +prompt("Введите 1 целое число a");
// let b = +prompt("Введите 2 целое число b");

// if(a<b){
//     alert("1");
// }
// else if(a>b){
//     alert("2");
// }
// else{
//     alert("одинаковы");
// }

// If 8
// let a = +prompt("Введите 1 целое число a");
// let b = +prompt("Введите 2 целое число b");

// if(a>b){
//     alert(a);
//     alert(b);
// }
// else if(a<b){
//     alert(b);
//     alert(a);
// }
// else{
//     alert("одинаковы");
// }

// If 9
// let a = +prompt("Введите 1 вещественное число a");
// let b = +prompt("Введите 2 вещественное число b");
// let a2,b2;

// if(a>b){
//     a2 = (b**2)**(1/2);
//     b2 = (a**2)**(1/2);
// }

// alert(`a = ${a2}; b = ${b2}`)

// If 10
// let a = +prompt("Введите 1 целое число a");
// let b = +prompt("Введите 2 целое число b");

// if(a==b){
//     a=0;
//     b=0;
// }
// else{
//     a+=b;
//     b=a;
// }
// alert(`a = ${a}; b = ${b}`)

// If 11
// let a = +prompt("Введите 1 целое число a");
// let b = +prompt("Введите 2 целое число b");

// if(a>b){
//     b=a;
// }
// else if(a<b){
//     a=b;
// }
// else{
//     a=0;
//     b=0;
// }
// alert(`a = ${a}; b = ${b}`)

// If 12
// let a = +prompt("Введите 1 число");
// let b = +prompt("Введите 2 число");
// let c = +prompt("Введите 3 число");

// if(a<b){
//     if(a<c){
//         alert(a);
//     }
//     else{
//         alert(c);
//     }
// }
// else {
//     if(b<c){
//         alert(b);
//     }
//     else{
//         alert(c);
//     }
// }

// If 13
// let a = +prompt("Введите 1 число");
// let b = +prompt("Введите 2 число");
// let c = +prompt("Введите 3 число");
// if(a<b){
//     if(b<c){
//         alert(b);
//     }
//     else if(a<c){
//         alert(c);
//     }
//     else{
//         alert(a);
//     }
// }
// else {
//     if(b>c){
//         alert(b);
//     }
//     else if(a<c){
//         alert(a);
//     }
//     else{
//         alert(c);
//     }
// }

// If 14
// let a = +prompt("Введите 1 число");
// let b = +prompt("Введите 2 число");
// let c = +prompt("Введите 3 число");
// let maximum = 0;
// let minimum = 0;

// if (a >= b && a >= c) {
//     maximum = a;
// }
// else if (b >= a && b >= c) {
//     maximum = b;
// }
// else{
//     maximum = c;
// }
// if (a <= b && a <= c) {
//     minimum = a;
// }
// else if (b <= a && b <= c){
//     minimum = b;
// } 
// else {
//     minimum = c;
// }
// alert(`Minimus: ${minimum}; Maximum: ${maximum}`);

// If 15
// let a = +prompt("Введите 1 число");
// let b = +prompt("Введите 2 число");
// let c = +prompt("Введите 3 число");

// if(a<=b && a<=c){
//     alert(b+c);
// }
// else if(b<=a && b<=c){
//     alert(a+c);
// }
// else if(c<=a && c<=b){
//     alert(a+b);
// }