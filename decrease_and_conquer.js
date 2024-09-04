/*
 * Number of Ones
 *
 * *Given a sorted bit array (values of either 0 or 1), determine the number of 1's in the array.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Output: {Integer}
 *
 * **Constraints**
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] --> 8`
 * `[0, 0, 0] --> 0`
 * `[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1] --> 7`
 */


function numberOfOnes(arr) {
  // YOUR WORK HERE
  let count = 0;
  let i = arr.length - 1
  while(arr[i] > 0){
      if(arr[i] === 1){
          count++
          i--
      }
  }
  return count
}

console.log(numberOfOnes([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]))

function numberOfOnes(arr) {
  let start = 0;
  let end = arr.length;
  let midpoint;
  while (start < end) {
    midpoint = parseInt(start + parseInt((end - start) / 2));
    if (arr[midpoint] === 0) {
      start = midpoint + 1;
    } else {
      end = midpoint;
    }
  }
  return arr.length - start;
}
