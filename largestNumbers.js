// Return Largest Numbers in Arrays
// Return an array consisting of the largest number
// from each provided sub-array, for simplicity, the provided
// array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop
// and access each member with array syntax array[i]

// function largestOfFour(arr) {
//   const maxes = [];
//    for ( let i=0; i<arr.length; i++) {
//      let tempMax = arr[i][0];
//      //need nested loop here to find max number in each array
//      for (let j=0; j<arr[i].length; j++) {
//        let currentElement = arr[i][j];
//        if (currentElement >= tempMax) {
//          tempMax = currentElement;
//        }
//      }
//      maxes.push(tempMax);
//    }
//    return maxes;
//     // console.log('maxes');
// }
//
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


function findMax (arr) {
  let max = arr[0];
  for (let i=0; i<arr.length; i++){
    if (arr[i] > max) max = arr[i]
  }
  return max;
  // console.log('max');
}

function largestOfFour (arr) {
   const maxes = [];
   for ( let i=0; i<arr.length; i++) {
     let innerMax = findMax(arr[i]);
     maxes.push(innerMax);
   }
   return maxes;
 }


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


//[5, 27, 39, 1001]
//
// function largestOfFour(arr) {
//   let maxes = [0, 0, 0, 0];
//    for ( let i=0; i<arr.length; i++) {
//      for (let j=0; j<arr[i].length; j++) {
//        let currentElement = arr[i][j];
//        if (currentElement >= maxes[i]) {
//          maxes = currentElement;
//        }
//      }
//    }
//    return maxes;
//     console.log('maxes');
// }
//
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//[5, 27, 39, 1001]
