const salaries = [500, 300, 600, 400];
let sumSalary = 0;
let averageSalary = 0;

salaries.forEach((value) => (sumSalary += value));
salaries.forEach((value) => (averageSalary += value / salaries.length));

console.log("Сумма всех зарплат:", sumSalary);
console.log("Среднее значение зарплат:", averageSalary);

const users = [
  { age: 20, name: "john" },
  { age: 30, name: "berry" },
  { age: 15, name: "Jimmy" },
];

const adultUsers = users.filter((item) => item.age > 18);
console.log("Вот пользователи старше 18 лет:", adultUsers);


const flowers = [
  { name: "rouse", price: 300 },
  { name: "sunflower", price: 1000 },
  { name: "101 rouse", price: 3000 },
]


const flowersWithDiscount = flowers.map((item) => {
  if (item.price > 200 && item.price < 900) {
    const withDiscount = item.price - (item.price / 100 * 5);
    return { ...item, withDiscount }

  } else if (item.price >= 900 && item.price < 2500) {
    const withDiscount = item.price - (item.price / 100 * 15);
    return { ...item, withDiscount }

  } else if (item.price >= 2500) {
    const withDiscount = item.price - (item.price / 100 * 20);
    return { ...item, withDiscount }
  }

});


console.log(flowersWithDiscount);


