/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if(val === nums[i]) {
            nums.splice(i, 1);
            i--;
        }
    }
    // console.log(nums);
};
// 测试用例
removeElement([1, 2, 2, 4, 5], 4);