/* https://leetcode.com/problems/top-k-frequent-elements/description/ */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], map.get(nums[i]) + 1 || 0);
    }

    let a = new Array();

    for(let [key, value] of map){
        a.push(key);
    }
    
    return a.sort((a,b) => map.get(b) - map.get(a)).slice(0,k);
    
};