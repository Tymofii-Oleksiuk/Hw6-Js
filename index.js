// Task 1

let startNumber = 0;

while (startNumber <= 10) {
    console.log(startNumber);
    startNumber += 1;
}


// Task 2

for (let i = 2; i <= 20; i++) {
    if (i % 2 === 1) {
        continue;
    }

    console.log(i);
}


// Task 3

let answer = 0;

for (let i = 0; i <= 10; i++) {
    answer = i * 7;
    console.log(`${i} * 7 = `, answer);
}


// Task 4

const numbers = [1, 2, 3, 4, 5];
let i = 0;

while (i <= 5) {
    console.log(numbers[i]);
    i += 1;
}

// Task 5

const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= 10; i++) {
    if(i === 7) {
        break;
    }
    console.log(numbersList[i]);
}

// Task 6

let n = 50;

for (let i = 0; i <= n; i++) {
    if(i === 50) {
        break;
    }
    console.log(alert(i));
    console.log(i)
}

for (let i = 1; i<= 20; i++) {
    if (i === 3 || 6 || 9 || 12 ||15 || 18) {
        continue;
    }
    console.log(i);
}