function removeElement(nums: number[], val: number): number {
    for(let i=0;i<nums.length;i++) {
        if(nums[i] === val) {
            for(let j=i;j<nums.length;j++) {
                nums[j] = nums[j+1];
            }
            i--;
        }
    }
    return nums.filter(x => x !== undefined).length;
};