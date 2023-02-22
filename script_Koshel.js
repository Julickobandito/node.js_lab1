// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


let arr = [1,3,5,6];
let sum=sumArray(arr);
console.log(sum);
function sumArray(array) {
  if((Array.isArray(arr) && !arr.length) || !Array.isArray(arr) || arr.length==1)
  {
    return 0;
  }
  else
  {
    let sum = 0;
    let max = Math.max(...array);
    let min = Math.min(...array);
    for (let i = 0; i < arr.length; i++)
    {
      sum+=arr[i];
    }
    sum=sum-min-max;
    return sum;
  }
}



// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string


let str = "637216052550356822156";
console.log(str);
fakeBin(str);
function fakeBin(str)
{
  let str2 = "";
  for (let i = 0; i < str.length; i++)
    {
      if(str[i]<5)
      {
        str2+="0"
      }
      else
      {
        str2+="1"
      }
    }
  console.log(str2);
}