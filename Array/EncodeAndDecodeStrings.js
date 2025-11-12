/* https://leetcode.com/problems/encode-and-decode-strings/description/ */
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let s = '';
        
        for(let i = 0; i < strs.length; i++){

            s+= strs[i].length + '#' + strs[i];

        }

        return s;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let a = [];

        if(str.length < 2){
            return a;
        }

        for(let i = 0; i < str.length;){

            let j = i+1;

            while(str[j] !== '#'){
                    j++;
            }

            let l = parseInt(str.substring(i,j));
            j++;

            a.push(str.substring(j, l + j));
            i = l + j;
            
        }

        return a;

    }
}