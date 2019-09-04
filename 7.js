/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 分为正数负数两部分解决问题
    var num = 0; // 定义全局变量
    if(x >= 0) {
        num = Number(stringReverse(x)); // 存放整数结果
    } else {
        num = -Number(stringReverse(-x)); // 存放整数结果
    }
    const range = Math.pow(2, 31); // 存放范围结果
    return num >= -range && num <= range - 1 ? num : 0;
};
var stringReverse = function(x) {
    return String(x).split('').reverse().join('');
}
// 测试用例
console.log(reverse(-12345));