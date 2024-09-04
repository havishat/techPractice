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


/*
 * ## Closest Value
 *
 * *Given a sorted bit array of integers, and a target value, find the number in the array that is closest to the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * If there are two numbers tied for the closest value, return the lowest value.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 6 --> 5`
 * `[1, 2, 3], 8 --> 3`
 * `[1, 10, 22, 59, 67, 72, 100], 70 --> 72`
 */


function closestValue(arr, target) {
    let closet = Infinity; 
    let start = 0; 
    let end = arr.length - 1;
    let value = null;
    
    while(start <= end ){
        let mid = Math.floor((start+end)/2);
        difference = Math.abs(target - arr[mid]);
        
        if(difference < closet){
            closet = difference;
            value = arr[mid];
        }
        
        if(arr[mid] < target){
            start = mid + 1;
        } else {
            end = mid -1 
        }
    }
    return value
}

console.log(closestValue([1, 10, 22, 59, 67, 72, 100], 70))

