class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        if(!nums) return false;
        let tracker = new Set();
        nums.forEach(e => {
            tracker.add(e);
        })
        if(tracker.size === nums.length) {
            return false;
        } else {
            return true;
        }
    }
}
