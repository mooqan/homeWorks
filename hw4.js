//Problem #1
let i = 0;
let oddSum = 0;
while (i < 20) {
    i++;
    if (i % 2 != 0) {
        oddSum += i;
    }
}
console.log("Сумма нечётных чисел до 20:", oddSum);
//---------------------------------------------------------------------------
let x = 0;
let dividedByFour = 0;
while (x < 20) {
    x++;
    if (x % 4 == 0) {
        dividedByFour += x;
    }
}

console.log("Сумма всех чисел которые делятся на 4 без остатка:", dividedByFour);

//Problem #2

for (i = 0; i <= 50; i += 2) {
    if (i < 20 || i > 40)
    console.log(i);

}


//Problem #3
let counter = 0;
while (counter < 100) {
    counter++;
    if (counter % 5 == 0 && counter % 3 == 0) {
        console.log("ping pong")
    } else if (counter % 5 == 0) {
        console.log("pong")
    } else if (counter % 3 == 0) {
        console.log("ping")
    }
}


for (counter = 0; counter < 100; counter++) {
    if (counter % 5 == 0 && counter % 3 == 0) {
        console.log("ping pong")
    } else if (counter % 5 == 0) {
        console.log("pong")
    } else if (counter % 3 == 0) {
        console.log("ping")
    }
}


do {
    if (counter % 5 == 0 && counter % 3 == 0) {
        console.log("ping pong")
    } else if (counter % 5 == 0) {
        console.log("pong")
    } else if (counter % 3 == 0) {
        console.log("ping")
    }
    counter++;
} while (counter < 100);









