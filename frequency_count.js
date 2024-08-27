// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
/*
# 1. Unique

# Given an array of integers, return an array with all duplicates removed.*

# Parameters
# Input: arr {Array of Integers}
# Output: {Array of Integers}

# Constraints
# Time: O(N)
# Space: O(N)

# Examples
# [1, 2, 4, 4, 5, 6] --> [1, 2, 4, 5, 6]
# [1, 1, 2, 2, 3, 3] --> [1, 2, 3]
# [1, 2, 3, 1, 2] --> [1, 2, 3]
*/

var unique = function(arr){
    let seen = {};
    let result = [];
    
    for(let i = 0; i<arr.length; i++){
        seen[arr[i]] = 1;
    }
    
    for(let key in seen){
        result.push(Number(key))
    }
   return result 
}

console.log("Try programiz.pro");
console.log(unique([1, 2, 4, 4, 5, 6]))
