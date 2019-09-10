/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) { // 排除数组为空的情况
        return '';
    }
    const first = strs[0]; // 获取第一个元素
    for(let i = 1; i <= first.length; i++) {
        let sub = first.substr(0, i); // 从头截取字符串并逐渐增加长度
        for(let j in strs) {
            if(j === '0') { // 下标是字符串
                continue; // 跳过自己本身减少循环次数
            }
            if(strs[j].indexOf(sub) !== 0) { // 与后续元素一一匹配前缀
                return sub.substring(0, sub.length - 1); // 返回长度减一的字符串
            }
        }
    }
    return first;
};
// 测试用例
console.log(longestCommonPrefix(['wqd']));