function exponentiation(number, power) {
  console.log(number, "в степени", power, "=", Math.pow(number, power));
}

exponentiation(3, 2);

function stepen(num, pow) {
  let result = num ** pow;
  return result;
}
let result = stepen(3, 2);
console.log(result);

//problem #2

function multipleMessage(text, repeat) {
  for (i = 0; i < repeat; i++) {
    console.log(text);
  }
}

multipleMessage("Roflan code", 5);

//Problem #3
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
let numisEven = isEven(3);
console.log(numisEven);

//Problem #4
let user = {
  name: "Adnrew",
  age: 18,
};
let user1 = {
  name: "Petr",
  age: 25,
};
let user2 = {
  name: "Sergey",
  age: 15,
};

function showSecretContent(age = "admin") {
  if (age >= 18) {
    console.log("Добро пожаловать");
  } else {
    console.log("Вам нет 18!");
  }
}

showSecretContent(user.age);
showSecretContent(user1.age);
showSecretContent(user2.age);

function isAdult(age = "Пустота") {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let isUserAdult = isAdult(user.age);
console.log(isUserAdult);

let isUserAdult1 = isAdult(user1.age);
console.log(isUserAdult1);

let isUserAdult2 = isAdult(user2.age);
console.log(isUserAdult2);