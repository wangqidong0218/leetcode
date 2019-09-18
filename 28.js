/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const index = haystack.indexOf(needle);
    // console.log(index);
    return index;
};
// 测试用例
strStr('abbcdeef', 'cd');