/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let len = nums.length;
    let time = len;
    let position_start = len-k%len;

    let num = [];
    while(time--)
    {
        num.push(nums[(position_start)%len]);
        position_start++;
    }
    for(let i=0;i<len;i++){
        nums[i] = num[i];
    }
};

let nums = [1,2,3,4,5,6,7];
rotate(nums,3);
console.log(nums);