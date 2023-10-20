function generateHashtag(str) {
    if (str.replaceAll(' ', '') != "" && str.replaceAll(' ', '') != " " && str.length < 140) {
        let str3 = str.split(' ').map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join("");
        let str4 = "#" + str3;
        console.log(str4)

    } else if (str.replaceAll(' ', '') == "" || str.length >= 140) {
        console.log(false);
    }

}
// generateHashtag("a".repeat(140));

// function likes(names) {
//     if (names.length == 0) {
//         console.log('no one likes this');
//     } else if (names.length == 1) {
//         console.log(`${names[0] + " likes this"}`);
//     } else if (names.length == 2) {
//         console.log(`${names[0] + " and " + names[1] + " like this"}`);
//     } else if (names.length == 3) {
//         console.log(`${names[0] + ", " + names[1] + " and " + names[2] + "like this"}`);
//     } else {
//         console.log(`${names[0] + ", " + names[1] + " and " + names.length + " others like this"}`)
//     }

// }
// likes(['Alex', 'Jacob', 'Mark', 'Max']);



function persistence(num) {
    if (num >= 1) {
        console.log(0);
    } else if (num.length > 1) {
        console.log(num.split())
    }
}

persistence(9);


// let numm = 39;

// console.log(numm.toString().split(""))


function persistence(num) {
    if (num >= 1 && num < 10) {
        return 0;
    } else if (num >= 10) {
        let arr = num.toString().split();
        for (i = 0; i < arr.length; i++) {
            console.log(arr[i] * arr[i + 1]);
        }
    }
}

persistence(39);