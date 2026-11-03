class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let map: Record<string, string[]> = {};
        for(let i = 0;i<strs.length;i++) {
            const sorted = strs[i].split('').sort().join('');
            map[sorted] ? map[sorted].push(strs[i]) : map[sorted] = [strs[i]];
        }

        return Object.values(map);
    }
}
