/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    // while (num>9){
    //     let temp1 = num %10;
    //     let temp2 = Math.floor(num/10)
    //     num = temp1 + temp2
    // }
    // return num;
    return num === 0 ? 0 : 1 + (num - 1) % 9;
};