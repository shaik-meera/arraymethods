// at()


let num = [0,1,2,7,8,5,7];
num.at(2);
console.log(num)   //gives original array

console.log(num.at(2));

let num2 = num.at(-3);
console.log(num2);

let num3 = ['m','e','e','r','a'].at(4)
console.log(num3)

let num4 = [11,12,13,14,15];
let num5 = num4.at(6);
console.log(num5)








// concat()

let arr = [11,12,19,20];
let arr1 = [13,14,15,16];
let newArr = arr.concat(arr1);
console.log(newArr);

let lastName = ['meera'];
let frstName = ['shaik'];
let fullName = frstName.concat(lastName);
console.log(fullName)

let numbers = [0,1,2,3];
let numbers1 = [10,20,30,40];
let number2 = numbers.concat(numbers1);
console.log(number2);
let number3 = [20,40,60,80];
let number4 = number2.concat(number3);
console.log(number4)











// includes()

let series = [10,20,30,40];
let series1 = series.includes(20);
console.log(series) // gives original array
console.log(series1)

let series2 = series.includes(60);
console.log(series2);

let series3 = series.includes(-1);
console.log(series3);

let array = ['m','e','e','r','a'].includes('s')
console.log(array)










// indexOf()

let nuM = [10,20,23,34,34];
let nuM2 = nuM.indexOf(34);
console.log(nuM2)


let nuM3 = [10,20,45,38,4].indexOf(4);
console.log(nuM3)

let nuM4 = [20,90,67,87,98];
let nuM5 = nuM4.indexOf(11);
console.log(nuM5)







// lastIndexOf()

let adds = [11,12,13,11,22,33];
let add1 = adds.lastIndexOf(11);
console.log(add1)


let add2 = adds.lastIndexOf(10);
console.log(add2);

let add3 = ['m','e','e','r','a'];
let add4 = add3.lastIndexOf('e');
console.log(add4)












// join()


let arrAy = ['m','e','e','r','a'];
let arrAy2 = arrAy.join(" ");
console.log(arrAy2);

let arrAy3 = ['m','e','e','r','a'];
let arrAy4 = arrAy3.join("");
console.log(arrAy4);
 

let arrAy5 = arrAy3.join(",");
console.log(arrAy5);

let frst = ['shaik'];
let last = ['meera'];
let full = frst.concat(last).join(" ");
console.log(full)












// reverse()

let names1 = ['','naga'];
names1.reverse();
console.log(names1)



let names = names1.reverse().join(" ");
console.log(names);


let numb = [1,2,3,4];
numb.reverse();
console.log(numb)










// sort()

let a = [10,20,30,3,2,7,9];
a.sort();
console.log(a);


let b = [11,2,9,0,7,56,10];
b.sort((a,b) => a-b);
console.log(b);



let c = [11,2,9,0,7,56,10];
c.sort((a,b) => b-a);
console.log(c);

let d = [78,90,9,8,6,65];
d.sort(function(a,b){
    return a-b;
})
console.log(d)



let e = [78,90,9,8,6,65];
e.sort(function(a,b){
    return a-b;
})
console.log(e)



// forEach()

// let a1 = [12,17,18,19,20];
// let a2 = a1.forEach(function(value,index,array){
//     return value*2;
// })
// console.log(a2)





// filter

function canVote(age) {
    return age >= 18;
}
let filtered = [24, 33, 16, 40].filter(canVote);
console.log(filtered);




let arr5 = [1,2,3,4,4].filter(function even(num){
    console.log( num % 2==0);
});
console.log(arr5);



//find

let arr6 = [1,2,3,4,4].find(function even(num){
    return num % 2==0;
});
console.log(arr6);




let arr7=[12,1,2,4,5].find(function greatest(num){
    return num > 2;
})
console.log(arr7);