/**
 * Break & Continue
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let num of nums) {
    if (num === 2) {
        continue
    }

    console.log(num)

    if (num === 3) {
        break
    }
}