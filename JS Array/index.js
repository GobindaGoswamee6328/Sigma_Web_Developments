let arr = [1,2,3,4,5]

arr[1] = 23
console.log(arr)
console.log(arr,typeof arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr.join(" And "))

let a = [1,2,3,4,5]
a.pop()
a.push("hlw")
a.shift()
a.unshift("jack")
delete a[4]
console.log(a)
console.log(a.length)

let a1 = [1, 2, 3, 4];
let a2 = [4, 5, 6, 7];
let a3 = [8, 9, 10, 11];

x = a1.concat(a2,a3);
console.log(x);

let numbers = [1,2,3,4,5]
numbers.splice(1,3,33,34,35)
console.log(numbers)
