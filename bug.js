function foo(a, b) {
  if (a === null || b === null) {
    return null; // This is correct for handling null values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); //Output: null

function bar(a, b) {
  if (a == null || b == null) { //This is wrong, it will also return 0 if a or b is 0
    return 0; 
  }
  return a + b; 
}
console.log(bar(1, 2)); // Output: 3
console.log(bar(null, 2)); // Output: 0
console.log(bar(1, null)); // Output: 0
console.log(bar(0,2)); //Output: 0
console.log(bar(2,0)); //Output: 0