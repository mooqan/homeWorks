//Problem #1

let a = 10,
  b = 30,
  c = a + b,
  d = 41;
console.log("Задание №1");
if (d > c && d > b) {
  console.log("Фаталити!");
} else if (d > b || d > a || d > c) {
  console.log("Возвышаемся!");
} else if (d < c || d < b) {
  console.log("Приземляемся!");
}

//Problem #2


let BMW = {
  speed: 200, // это максимальная скорость
  name: "BMW",
  color: "Red",
  quality: 10, // это поле отвечает за качество покраски
  basePrice: 20000, // подразумевается что это доллары
};

let Mercedes = {
  speed: 150, // это максимальная скорость
  name: "Mercedes",
  color: "Black",
  quality: 8, // это поле отвечает за качество покраски
  basePrice: 15000, // подразумевается что это доллары
};

let Golf = {
  speed: 100, // это максимальная скорость
  name: "Golf",
  color: "Gray",
  quality: 6, // это поле отвечает за качество покраски
  basePrice: 10000, // подразумевается что это доллары
};

//Calculating basePrice of BMW
if (BMW.speed > 150) {
  BMW.basePrice += 1000;
} else if (BMW.speed > 100) {
  BMW.basePrice += 500;
} else if (BMW.speed > 50) {
  BMW.basePrice += 200;
} else {
  BMW.basePrice += 0;
}

if (BMW.quality > 7) {
  BMW.basePrice += 900;
} else if (BMW.quality > 5) {
  BMW.basePrice += 500;
} else {
  BMW.basePrice += 0;
}

//Calculating basePrice of Mercedes
if (Mercedes.speed > 150) {
    Mercedes.basePrice += 1000;
  } else if (Mercedes.speed > 100) {
    Mercedes.basePrice += 500;
  } else if (Mercedes.speed > 50) {
    Mercedes.basePrice += 200;
  } else {
    Mercedes.basePrice += 0;
  }
  
  if (Mercedes.quality > 7) {
    Mercedes.basePrice += 900;
  } else if (Mercedes.quality > 5) {
    Mercedes.basePrice += 500;
  } else {
    Mercedes.basePrice += 0;
  }

//Calculating basePrice of Golf
if (Golf.speed > 150) {
    Golf.basePrice += 1000;
  } else if (Golf.speed > 100) {
    Golf.basePrice += 500;
  } else if (Golf.speed > 50) {
    Golf.basePrice += 200;
  } else {
    Golf.basePrice += 0;
  }
  
  if (Golf.quality > 7) {
    Golf.basePrice += 900;
  } else if (Golf.quality > 5) {
    Golf.basePrice += 500;
  } else {
    Golf.basePrice += 0;
  }



let totalPrice = BMW.basePrice + Mercedes.basePrice + Golf.basePrice;
console.log("\nЗадание №2");
console.log("Стоимость BMW: $" + BMW.basePrice);
console.log("Стоимость Mercedes: $" + Mercedes.basePrice);
console.log("Стоимость Golf: $" + Golf.basePrice);
console.log("Стоимость всего гаража (всех машин): $" + totalPrice);
console.log("Средняя стоимость всех машин: $" + totalPrice / 3)
