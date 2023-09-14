//Problem #1
let i = 0;
let oddSum = 0;

// while (i < 20) {
//   i++;
//   if (i % 2 == 0) continue;
//   oddSum += i;
// }
// console.log("Сумма всех нечетных элементов: " + oddSum);

// //

// let x = 0;
// let evenSum = 0;

// while (x <= 20) {
//   x++;
//   if (x % 4 == 0) {
//     evenSum += x;
//   }
// }
// console.log("Сумма всех чисел которые делятся на 4 без остатка: " + evenSum);

// //Problem #2
// for (i = 0; i <= 50; i += 2) {
//   if (i < 20 || i > 40)
//   console.log(i);
// }

//Problem #3
// while (i <= 100) {
//   i++;
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("ping pong");
//   } else if (i % 3 == 0) {
//     console.log("ping");
//   } else if (i % 5 == 0) {
//     console.log("pong");
//   }
// }

// for (i = 0; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("ping pong");
//   } else if (i % 3 == 0) {
//     console.log("ping");
//   } else if (i % 5 == 0) {
//     console.log("pong");
//   }
// }

do {
  i++;
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("ping pong");
  } else if (i % 3 == 0) {
    console.log("ping");
  } else if (i % 5 == 0) {
    console.log("pong");
  }
  
} while (i < 100);
console.log(i);
