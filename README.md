# JavaScript Loose Equality (==) vs. Strict Equality (===)

This repository demonstrates a common error in JavaScript related to the misuse of equality operators.  The loose equality operator (`==`) performs type coercion before comparison, while the strict equality operator (`===`) does not. This difference can lead to unexpected behavior, especially when dealing with `null` or `undefined` values or when comparing values of different types.

The `bug.js` file contains code that uses the loose equality operator incorrectly, leading to unintended results.  The `bugSolution.js` file provides a corrected version using the strict equality operator to avoid these issues.

**Key takeaway:** Always use the strict equality operator (`===`) unless you have a specific reason to use loose equality.  Strict equality prevents unexpected type coercion and improves code clarity and reliability.