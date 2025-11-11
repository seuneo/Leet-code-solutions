/* https://leetcode.com/problems/group-anagrams/description/ */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = new Map();

    for(let i = 0; i < strs.length; i++){
        let a = new Array(26).fill(0);

        for(let j = 0; j < strs[i].length; j++){
            a[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)] += 1;
        }
         a = a.join(''); 
         if(!map.has(a)){
            map.set(a, [strs[i]]);
         }      
         else{
            map.get(a).push(strs[i]);
         }
                
    }

    let ans = [];

    for(let [key,value] of map){
        ans.push(value);
    }   

    return ans;
};