/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 外层只需要循环到倒数第二个数字即可
    for(let i = 0; i < nums.length - 1; i++) {
        // 需要注意一下外部循环变量的值不能改变
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                let arr = [];
                arr.push(i, j);
                return arr;
            }
        }
    }
};
// 测试用例
console.log(twoSum([2, 7, 11, 15], 9));