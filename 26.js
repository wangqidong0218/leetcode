/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 1; i < nums.length; i++) { // 从第二个元素开始减少一次循环
        if(nums[i] === nums[i - 1]) {
            nums.splice(i, 1); // 移除重复的元素
            i--; // 删除元素后下标回退一次避免漏掉元素
        }
    }
    console.log(nums);
};
// 测试用例
removeDuplicates([1, 1, 2, 3, 4, 4]);