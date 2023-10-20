function range(a, b, c) {
  if (c >= a && c <= b) {
    console.log(`${c} is in range of ${a} and ${b}`);
  } else {
    console.log(`${c} is out of range of ${a} and ${b}`);
  }
}

function isEven(num) {
  if (num % 2 == 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is not even (odd)`);
  }
}

function checkPassword(user) {
  const { password } = user;

  if (password.length < 9) {
    console.log("Пароль слишком короткий");
  } else {
    console.log("Пароль соответствует всем требованиям");
  }
}

function checkUserFields(user) {
  const { name, surname, position } = user;

  if (name.length == 0 && surname.length == 0 && position.length == 0) {
    console.log("Все поля обязательны к заполнению");
  } else if (name.length > 0 && surname.length == 0 && position.length == 0) {
    console.log("Поля surname и position обязательны");
  } else if (name.length == 0 && surname.length > 0 && position.length == 0) {
    console.log("Поля name и position обязательны");
  } else if (name.length == 0 && surname.length == 0 && position.length > 0) {
    console.log("Поля name и surname обязательны");
  } else if (name.length == 0) {
    console.log("Поле name пустое");
  } else if (surname.length == 0) {
    console.log("Поле surname пустое");
  } else if (position.length == 0) {
    console.log("Поле position пустое");
  } else {
    console.log("Все поля заполнены");
  }
}

module.exports = { range, isEven, checkPassword, checkUserFields };
