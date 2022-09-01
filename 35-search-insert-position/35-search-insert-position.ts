function searchInsert(nums: number[], target: number): number {
    return nums.findIndex(x => x >= target) === -1 ? nums.length : nums.findIndex(x => x >= target);
};