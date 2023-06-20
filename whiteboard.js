assert=require('assert');

// Problem: Find Missing Number
// Write a function
// that takes in an array of distinct integers from 1 to n,
// where n is the length of the array plus one. 
// The array is missing one number from the sequence.
// The function should return the missing number.
//=====================================
// Write your function named "solution" here:

function solution(arr){
    let arrSet = new Set(arr) // O(n)
    for (let i = 1; i <= arr.length + 1; i++){ // O(n)
        if (!arrSet.has(i)){ // O(1)
            return i // O(1)
        }
    }
}


//=====================================
  try{

    assert(solution([1, 2, 4, 6, 3, 7, 8]) === 5);

    assert(solution([2, 3, 1, 5]) === 4);

    assert(solution([9, 8, 7, 5, 4, 3, 2, 1]) === 6);

    assert(solution([1, 3, 4, 5]) === 2);

    assert(solution([6, 5, 4, 3, 2]) === 1);

    assert(solution([1, 2, 3, 4, 5, 6]) === 7);

    assert(solution([1]) === 2);

    assert(solution([2]) === 1);

    console.log("PASSED")
}catch{
    console.log("FAILED")
}