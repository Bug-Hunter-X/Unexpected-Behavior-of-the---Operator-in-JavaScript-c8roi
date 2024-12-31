function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    console.error("Operands must be numbers");
    return NaN; // Or handle the error in a more appropriate way
  }
}
console.log(foo(1, 2)); // 3
console.log(foo(1, "2")); // Error: Operands must be numbers
console.log(foo([1, 2], [3, 4])); // Error: Operands must be numbers
console.log(foo({ a: 1 }, { b: 2 })); // Error: Operands must be numbers