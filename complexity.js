/*
Given an array of integers and a target value, return the index of the first
#    element that matches the target value. If there are no matches, return -1.
*/

var index_of = function(arr, target) {
  for(let i =0; i<arr.length; i++){
    if(arr[i] == target){
      return i
    }
  }
  return -1
}

//console.log(index_of([1, 2, 3, 4, 5, 6], 5 ))

/*
 Given an array of integers, return an array of only the even values.
*/

var evens = function(arr){
  let result = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
      result.push(arr[i])
    }
  }
  return result
}

//console.log(evens([6, 4, 7, 9, 7, 8, 2, 4, 3] ))

/*
Sum
#
#   Given an array of integers, return the sum of all the integers.
*/

var sumArr = function(arr){
  let sum = 0;
  for(let i=0; i<arr.length;i++){
    sum += arr[i]
  }
  return sum
}

//console.log(sumArr( [1, 2, 3, 4, 5] ))

/*
#   Merge Arrays

#   Given two sorted arrays of integers, return a merged sorted array of both inputs.
#   Parameters
#   Input: arr1 {Array of Integers}
#   Input: arr2 {Array of Integers}
#   Output: {Array of Integers}
#
#   Examples
#   [1, 3, 9], [2, 4, 8] --> [1, 2, 3, 4, 8, 9]
#   [12, 25, 40], [20, 37, 45] --> [12, 20, 25, 37, 40, 45]
#   [10, 13, 24], [12, 35] --> [10, 12, 13, 24, 25]

while loop i< arr 1 and j<arr2 length
if(arr[i] < arr2[i])
res.push[arr[i]]
else {
res.push(arr[j])
}

while(i<arr1.length -)
res.push(arr1[i])

while(j<arr2.length)
res.push(arr2[j])
*/

var merge_arrays = function(arr1, arr2){
  let i = 0;
  let j = 0;
  let res = [];
  while(i<arr1.length && j<arr2.length){
    if(arr1[i] < arr2[j]){
        res.push(arr1[i])
        i++
    } else {
      res.push(arr2[j])
      j++
    }
  }

  while(i<arr1.length){
    res.push(arr1[i])
    i++
  }
  while(j<arr2.length){
    res.push(arr2[j])
    j++
  }
  return res
}

//console.log(merge_arrays([1, 3, 9], [2, 4, 8] ))

/*
 *    Binary Search
 *
 *    Given a sorted array and a target value, use binary search to return the index of the target in the input array.
 *    Return -1 if no such target is found.
 *
 *    Parameters
 *    Input: arr {Array of Integers}
 *    Input: val {Integer}
 *    Output: {Integer}
 *
 *    Examples
 *    [1, 3, 4, 5, 8, 9], 5 --> 3
 *    [5, 7, 10, 12, 14], 7 --> 1
 *    [2, 4, 8, 9, 15], 3 --> -1
 *
 *   Time Complexity:
 *   Auxiliary Space Complexity:
 */

function binarySearch(arr, val) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = parseInt((high + low)/2);
    if(arr[mid] == val){
      return mid
    } else if(arr[mid] < val){
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}

//console.log(binarySearch( [1, 3, 4, 5, 8, 9], 5))

/*
 *    Factorial
 *
 *    Given an input integer n, return the n factorial value.
 *
 *    Parameters
 *    Input: n {Integer}
 *    Output: {Integer}
 *
 *    Examples
 *    5  --> 120 (5 * 4 * 3 * 2 * 1)
 *    1 --> 1 (1)
 *    9 --> 362880 (9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)
 *
 *    Time Complexity:
 *    Auxiliary Space Complexity:
 */

function factorial(n) {
  if(n === 1){
    return 1
  } 
  return n * factorial(n-1)
}

//console.log(factorial(5))

/*
 *  First Times Last
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */

function firstTimesLast(arr) {
  let result = null;
    if (arr.length < 2) {
      return result;
    }
    result = arr[0] * arr[arr.length - 1];
    return result;
  }

//console.log(firstTimesLast( [1, 3, 4, 5, 8, 9]))

/*
 *  Most Frequent Occurrence
 *  NOTE: The string only contains letters in it
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */

function mostFrequentOccurrence(str) {
  let letters = {};

  for(let i = 0; i<str.length; i++){
    if(letters[str[i]]){
      letters[str[i]]++
    } else {
      letters[str[i]] = 1
    }
  }

  let freqency; 
  for(let key in letters){
    if( !freqency || letters[key] > freqency[1]){
      freqency = [key, letters[key]]
    }
  }

  return freqency
}

console.log(mostFrequentOccurrence("wortdletters"))


/*
 *  Print Unordered Pairs
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */

function printUnorderedPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(array[i] + "," + array[j]);
    }
  }
}

//console.log(printUnorderedPairs( [1, 3, 4, 5, 8, 9]))




/*
 *  Make Combined Matrix
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */

function makeCombinedMatrix(arr1, arr2) {
    let result = [];
  let row; 

  for(let i=0; i< arr1.length; i++){
    row = [];
    for(let j = 0; j<arr2.length; j++){
      row.push(arr1[i] + arr2[j])
    }
    result.push(row)
  }
  return result;
}

//console.log(makeCombinedMatrix([1, 3, 4, 5, 8, 9],  [5, 7, 10, 12, 14]))

