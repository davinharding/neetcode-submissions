class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        if (nums.length <= k) return nums;

        let map: Record<number, number> = {};

        for(let num of nums) {
            map[num] ? map[num]++ : map[num] = 1;
        }
        const arr = Object.entries(map).map(([num, freq]) => [freq, parseInt(num)]);
        arr.sort((a,b) => b[0] - a[0]);

        return arr.slice(0,k).map((pair) => pair[1]);
    }
}
