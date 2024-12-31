# Unexpected Behavior of the + Operator in JavaScript
This repository demonstrates an uncommon JavaScript bug related to the unexpected behavior of the + operator when used with mixed data types.  The + operator in JavaScript will perform both numerical addition and string concatenation depending on the operands. This can lead to unexpected results when working with numbers and strings or objects and arrays. The solution demonstrates how to use type checking or other methods to ensure the expected behavior when performing addition.

## Bug
The bug lies in the implicit type coercion of the + operator.  When one of the operands is a string, the other operand is automatically converted to a string, and the concatenation operation takes place instead of addition. This also applies to objects and arrays, they will be converted to strings before being concatenated.

## Solution
The solution addresses the problem by explicitly checking the types of the operands before performing the addition.  If both operands are numbers, then numerical addition is performed; otherwise, an error or alternative behavior is provided to prevent unintended concatenation.