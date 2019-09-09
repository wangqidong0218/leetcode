/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var num = 0; // 初始化结果
    const comboArr = [
        {
            character: 'IV',
            value: 4
        },
        {
            character: 'IX',
            value: 9
        },
        {
            character: 'XL',
            value: 40
        },
        {
            character: 'XC',
            value: 90
        },
        {
            character: 'CD',
            value: 400
        },
        {
            character: 'CM',
            value: 900
        }
    ];
    for(let i of comboArr) {
        if(s.includes(i.character)) { // 判断目标字符串是否包含特定子串
            num += i.value;
            // 不改变原字符串而是生成新的注意赋值
            s = s.replace(i.character, ''); // 从原字符串中消除特定子串
        }
    }
    for(let j = 0; j < s.length; j++) {
        switch(s[j]) {
            case 'I':
                num += 1;
                break;
            case 'V':
                num += 5;
                break;
            case 'X':
                num += 10;
                break;
            case 'L':
                num += 50;
                break;
            case 'C':
                num += 100;
                break;
            case 'D':
                num += 500;
                break;
            case 'M':
                num += 1000;
                break;
        }
    }
    return num;
};
// 测试用例
console.log(romanToInt('MCMXCIV'));