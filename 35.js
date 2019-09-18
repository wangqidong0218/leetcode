/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const index = nums.indexOf(target); // 获取目标值在数组中的下标
    if(index === -1) { // 不存在目标值的情况
        for(let i in nums) {
            if(nums[i] > target) {
                return i;
            }
        }
        return nums.length; // 目标值大于所有数组中元素的值
    } else {
        return index;
    }
};
// 测试用例
console.log(searchInsert([1, 2, 3, 5, 7], 0));