/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var arr = [];
    for(const i of s) {
        const left = ['(', '[', '{'];
        if(left.includes(i)) {
            arr.push(i); // 判断是否为左边的括号是的话直接写入数组
        } else {
            const last = arr.pop(); // 获取数组最后一项的元素而不是返回删除的数组
            switch(i) {
                case ')':
                    if(last !== '(') {
                        return false;
                    } else {
                        arr.slice(0, -1); // 匹配上的话删除最后一项
                    }
                    break;
                case ']':
                    if(last !== '[') {
                        return false;
                    } else {
                        arr.slice(0, -1);
                    }
                    break;
                case '}':
                    if(last !== '{') {
                        return false;
                    } else {
                        arr.slice(0, -1);
                    }
                    break;
            }
        }
    }
    if(arr.length === 0) {
        return true;
    } else {
        return false;
    }
};
// 测试用例
console.log(isValid(''));