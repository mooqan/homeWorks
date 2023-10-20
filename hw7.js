function CarMaker(name, speed, color) {
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.isPowered = false;

    this.run = function () {
        if (this.isPowered) {
            console.log("Машина уже включена");
        } else {
            this.isPowered = true;
            console.log("Включаю машину")
        }
    }

    this.stop = function () {
        if (!this.isPowered) {
            console.log("Машина выключена")
        } else {
            this.isPowered = false;
            console.log("Выключаю машину")
        }
    }

    this.getInfo = function () {
        console.log(this.name, this.speed, this.color)
    }

    this.setInfo = function (newName, newSpeed, newColor) {
        this.name = newName;
        this.speed = newSpeed;
        this.color = newColor;
    }
}

const dreamCar = new CarMaker("Jack", 500, "Green");
dreamCar.setInfo("Ferrari", 1337, "Red");
dreamCar.run();
dreamCar.stop();
console.log(dreamCar);