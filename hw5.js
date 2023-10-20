String.prototype.toJadenCase = function () {
    return this.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };

function digitalRoot(n:string) {
    let numStr = String(n);
    let digitArray = numStr.split('')

    for (i = 0; i < digitArray.length - 1; i++) {
        if (digitArray[i] == String) {
            let toNum = Number(digitArray[i])
            console.log(toNum)
        }
    }
}



digitalRoot(16);
