class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let map: Record<string, string[]> = {};
        for(let s of strs) {
            const sorted = s.split('').sort().join('');
            if(!map[sorted]) {
                map[sorted] = [];
            }
            map[sorted].push(s)
        }

        return Object.values(map);
    }
}
