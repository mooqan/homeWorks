function alternatingNum(arr) {
    let length = arr.length;
    let flag = true

    for (i = 0; i < length - 1; i++) {

        for (j = i + 1; j < length - 1; j++) {
            if (flag && arr[j] < 0) {
                arr[i] = arr[j]
                flag = false
                // console.log(arr[i], arr[j])

            }
            if (!flag && arr[i] > 0) {
                arr[i] = arr[j]
                flag = true
                // console.log(arr[i], arr[j])
            }
        }

        console.log(arr)
    }

}
let arr = [1, 3, 4, 5, 6, -2, -5, -6, -8, -9, 10]
console.log(alternatingNum(arr))


[1, 3, 4, 5, 6, -2, -5, -6, -8, -9, 10]