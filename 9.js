/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 转换成字符串来解决
    let str = x.toString();
    const reverseStr = str.split('').reverse().join('');
    return str === reverseStr ? true : false;
};
// 测试用例
console.log(isPalindrome(-121));