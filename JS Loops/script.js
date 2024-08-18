let a = 1;

for (let i = 0; i < 100; i++) {
    console.log(a + i);

}

let obj = {
    name: "Tirtho",
    role: "student",
    class: "third"
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];

        console.log(key,element);
    }
}

let x = 2;

while (x < 6){
    console.log(x);
    x++;
}