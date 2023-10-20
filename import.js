const {
  range,
  isEven,
  checkPassword,
  checkUserFields,
} = require("./exports/hw10");

const user = {
  age: 18,
  name: "  ",
  surname: "1",
  position: "",
  password: "123admin123",
};

checkUserFields(user);
checkPassword(user);

// range(1, 2, 2);
// isEven(3);
