class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let ans = "";
        for (let str of strs) {
            ans += `${str.length},${str}`;
        }
        return ans;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let ans = [];
        let index = 0;

        while(index < str.length) {
            let j = index;
            while(str[j] !== ',') {
                j++;
            }
            const length = Number(str.slice(index, j));
            const start = j + 1;
            const decodedStr = str.slice(start, start + length)

            ans.push(decodedStr);
            index = start + length;
        }
       
        return ans;
    }
}
