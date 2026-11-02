class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (!s || !t) return false;

        if (s === t) return true;

        const sSorted = s.split('').sort();
        const tSorted = t.split('').sort();
        return sSorted.join('') === tSorted.join('') ? true : false;
    }
}
