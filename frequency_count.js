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


/**
 * Word Count
 *
 * Given an body of text, return a hash table of the frequency of each word.
 *
 * Parameters
 * Input: text {String}
 * Output: {Hash Table}
 *
 * Constraints
 *
 * Capital and lower case versions of the same word should be counted is the same word.
 *
 * Remove punctuations from all words.
 *
 * Time: O(N)
 * Space: O(N)
 * Where N is the number of characters in the string.
 *
 * **Examples**
 * 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'`
 * 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'`
 * 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'`
 * regualr expres... and check if it is a word or special char
 * if it isn't special char then push to new sentence 
 * from new sentence create split and pushe to map and count
 */

function wordCount(sentence) {
    let reg = /^[A-Za-z\s]*$/;
    let filteredSentence  = "";
    for(let i = 0; i<sentence.length; i++){
        if(reg.test(sentence[i])){
            filteredSentence += sentence[i].toLowerCase();
        }
    }
    
    let words  = filteredSentence.split(" ");
    let wordCount = {};
    for(let char of words){
        if(wordCount[char]){
            wordCount[char]++
        } else {
            wordCount[char] = 1;
        }
    }
    
    return wordCount
}

console.log(wordCount('The cat and the hat.'))


