////////////////////////////////////////////////////////////////// УРОВЕНЬ 1 ///////////////////////////////////////////////////////////////////////////////
// // задание 1.1
// let a = prompt("Ваше число")
// if(a > 0){
//     console.log("полож");
// }
// else{
//     console.log("отриц");
// }
// //////
// let fg = prompt("длина строки")
// console.log(`длина этой строки - ${fg.length}`);
// //////
// let gg = prompt("последний символ строки")
// console.log(`последний символ строки - ${gg.slice(-1)}`)
// //////
// let tr = prompt("чет/нечет")
// if(tr % 2 == 0){
//     console.log("чет");
    
// }
// else{
//     console.log("нечет");
    
// }
// //////
// let dw = prompt("Первое слово")
// let dr = prompt("Второе слово")
// if(dw.at(0) == dr.at(0)){
//     console.log("первые буквы этих слов совпадают");   
// }
// else{
//     console.log("первые буквы этих слов не совпадают");   
// }


// // задание 1.2
// let jh = prompt("Введите число")
// let dfs = String(jh)[0]
// console.log('Первое число -',dfs);
// //////
// let dfsf = jh.length - 1;
// console.log('Последнее число -',dfsf);
// //////
// console.log('сумма первого числа и последнего -',dfs +++ dfsf);
// //////
// let gt = String(jh).length
// console.log('количество цифр в этом числе -',gt);
// //////
// let jhj = prompt("Введите второе число")
// let ss = jh[0]
// let ssd = jhj[0]
// if (ss === ssd)
//     console.log('совпад');
// else 
//     console.log('не совпад');

// // задание 1.3
// let hhy = prompt('Введите строку')
// if (hhy.length > 1)
//     console.log('предпоследний символ -',hhy.slice(-2,-1));
// else
//     console.log('символ -',hhy);
// //////
// let a = prompt('Первое целое число')
// let b = prompt('Второе целое число')
// if (a % b == 0)
// {
//     console.log('делится без остатка');
//     console.log('ответ -', a / b);
// }
// else
// {
//     console.log('делится с остатком');
//     console.log('ответ -', a / b);
// }

// задание 1.4
// console.log('////////////////////////////////////////////////////////////////////');
// for(let i = 1; i <= 100; i++)
//     console.log(i);
// //////
// console.log('////////////////////////////////////////////////////////////////////');
// for(let i = -100; i <= 0; i++)
//     console.log(i);
// //////
// console.log('////////////////////////////////////////////////////////////////////');
// for(let i = 100; i >= 1; i--)
//     console.log(i);
// //////
// console.log('////////////////////////////////////////////////////////////////////');

// let tt
// for(tt = 1; tt <= 100; tt++)
//     if(tt % 2 == 0)
//         console.log(tt);
//     //////
//     console.log('////////////////////////////////////////////////////////////////////');
// let ttt
// for(ttt = 1; ttt <= 100; ttt++)
//     if(ttt % 3 == 0)
//         console.log(ttt);

// задание 1.5
// let s = 0;
// for(let i = 1; i <= 100; i++)
//     s += i;
// console.log('Сумма всех целых чисел -',s); 
// /////
// console.log('////////////////////////////////////////////////////////////////////');
// let d = 0
//     for(let i = 1; i <= 100; i++)
//         if(i % 2 == 0)
//     console.log('Сумма всех целых четных чисел -',d+=i);
// //////
// console.log('////////////////////////////////////////////////////////////////////');
// let dS = 0
//     for(let i = 1; i <= 100; i++)
//         if(i % 2 !== 0)
//         console.log('Сумма всех целых не четных чисел -',dS+=i);
// //////
// let a = 5
// let b = 2
// console.log(a % b);
// //////
// let t = 'привет'
// let st = t.split('').reverse().join('')
// console.log(st);

// задание 1.6
// let a = [2,5,43,13,76]
// let b = 0
// for(num of a){
//     b += Math.pow(num,2)
// }
// console.log(b);
// //////
// b = 0
// for(num of a){
//     b += Math.sqrt(num,2)
// }
// console.log(b);
// //////
// let y  = [2,37,-54,7,33,-20]
// let s = 0
// for(num of y){
//     if(num > 0){
//         s += num
//     } 
// }
// console.log(s);
// //////
// let d = 0
// for(num of y){
//     if(num > 0 && num < 10){
//         d += num
//     }
// }
// console.log(d);
// //////

// задание 1.7
// let arr = []
// let str = 'bgugou'
// for (let i = 0; i < str.length; i++) {
//     arr.push(str[i])
// }
// console.log(arr);
// //////
// let fd = []
// let sd = 12345
// let sdStr = String(sd)
// for (let i = 0; i < sdStr.length; i++) {
//     fd.push(sdStr[i])
// }
// console.log(fd);
// //////
// let a = 12345
// console.log(`${a}`.split("").reverse().join("") * Math.sign(a));
// //////
// for (let i = 0; i < a.length; i++) {
    
// }
// console.log(a);
 
// task 1.8
// let arr_1 = []

// for(let i = 0; i < 10; i++){

//     arr_1[i] = i+1;
//     console.log(arr_1[i]);

// }
// //////
// let arr_2 = []
// for (let i = 1; i <= 100; i++) {
//     if(i % 2 == 0) arr_2.push(i)
    
// }
// console.log(arr_2);
// //////
// let arr_3 = [1.456, 2.125, 3.32, 4.1, 5.34]
// for (let i = 0; i < arr_3.length; i++) {
//     console.log(arr_3[i].toFixed(1));
// }
    
// задание 1.9
// let mas_1 = ['http:/iuhui.com', 'hht:/lolos.ru', 'iindex.html', 'http:/utka.com', 'tutu:/fillord.ru']
// let mas_2 = ['http:/iuhui.com', 'hht:/lolos.ru', 'iindex.html', 'http:/utka.com', 'tutu:/fillord.ru']
// mas_1 = mas_1.filter(str => str.includes("http:/"))
// console.log(mas_1);
// //////
// mas_2 = mas_2.filter(str => str.includes(".html"))
// console.log(mas_2);
// //////
// let mas_3 = [23,54,87,21]
// for (let i = 0; i < mas_3.length; i++) {
//     mas_3[i] = mas_3[i] + mas_3[i] * 0.1
//     console.log(mas_3[i]);
    
// }

// задание 1.10
// const a = []
// for (let i = 1; i < 100; i++) {
//     a.push(Math.floor(Math.random()*100))
    
// }
// console.log(a);
// //////
// let s = 12345
// console.log(`${s}`.split("").reverse().join("") * Math.sign(s));
// //////
// let mas_1 = [1,2,3,4,5,6]
// let mas_2 = []
// for (let i = 0; i < mas_1.length; i++) {
//     mas_2.push(mas_1[i])
//     if(mas_2.length === 2){
//         console.log(mas_2);
//         mas_2 = []
//     }
// }
// //////
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = arr1.concat(arr2)
// console.log(arr3);

////////////////////////////////////////////////////////////////// УРОВЕНЬ 2 ///////////////////////////////////////////////////////////////////////////////


// // задание 2.1
// let str = '152025'
// console.log(str.indexOf('0'));
// //////
// let sum_m = 0
// for (let i = 1; i <= 1000; i++) {
//     let m = String(i) 
//     if(Number(m[0]) + Number(m[1]) == 5)
//         console.log(i);
// }
//////
// let arr1 = [1,2,3,4,5,6,7,8,9,10,8]
// arr1 = arr1.filter(num => num !== 8)
// console.log(arr1);
//////
// let arr1 = [1,2,3,4,5,6]
// let arr2 = 0
// for (let i = 0; i < arr1.length / 2; i++) {
//     arr2 += arr1[i]
// }
// console.log(arr2);

// задание 2.2
// let arr = [5,-87,65,-3,76,-64]
// let arr2 = 0
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] < 0){
//         arr2++
//     }
// }
// console.log(arr2);
//////
// let arr3 = []
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0){
//         arr3.push(arr[i])
//         console.log(arr3);
//     }
// }
//////
// let a = '12345' 
// let b = ''
// console.log(b = a.slice(0, -2)+a.slice(-1));
// let arr = [1,2,1,4,6,10]
// let arr2 = 0
// let arr3 = 0
// for (let i = 0; i < arr.length / 2; i++) {
//     arr2 += arr[i]
//     console.log(arr2);
// }
// for (let i = arr.length -1; i >= arr.length / 2; i--) {
//     arr3 += arr[i]
//     console.log(arr3);
// }
// console.log(arr2 / arr3);

// задание 2.3
// let a = 'привет'
// let b = 'утка'
// if(a.at(-1) == b.at(0)){
//     console.log('true');
// }
// else{
//     console.log('false');   
// }
// //////
// let g = '60605404'
// let h = 0
// for (let i = 0; i < g.length; i++) {
//     if(g[i] == 0){
//         h++
//         if(h == 3){
//             console.log(i);
//         }
//     }
// }
// //////
// let r = '12,34,56'
// let s = 0 
// r.split(',').forEach(n => s += +n)
// console.log(s);
// //////
// let j = '2008-04-01'
// let o = {}
// j = j.split('-')   
// o.year = j[0]
// o.month = j[1]
// o.day = j[2]
// console.log(o);

// задание 2.4
// let a = 'hello1utka'
// let b = a.search(/\d/)
// console.log(b);
// //////
// let obj = {a: 1, b: 2, c: 3}
// let keys = Object.keys(obj)
// let values = Object.values(obj)
// console.log(keys, values);
// //////
// let a = '56749'
// let str = String(a)
// let b = 0
// for (let i = 0; i < str.length; i++) {
//     if(parseInt(str[i]) % 2 === 0){
//         b++
//     }
// }
// console.log(b);
//////
// let a = 'abcde'
// a = a.split('')
// for (let i = 0; i < a.length; i+=2) {
//     a[i] = a[i].toUpperCase()
// }
// a = a.join('')
// console.log(a);
//////
// let a = 'aaa bbb ccc'
// let b = a.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
// console.log(b);
// 
