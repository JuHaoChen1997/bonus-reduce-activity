# Reduce

The accumulator is such an important and common pattern that the JavaScript language provides built in support for implementing this pattern using the method `Array.prototype.reduce()`.

This method is an example of a higher order function: one of it's parameters is a function itself. So what does this function do?

# Reduce: Function Signature

## Arguments

`Array.prototype.reduce()` accepts two arguments:

1. `reducer` which is itself a function. This function contains the "accumulation logic", the stuff we would normally put inside the body of a for loop when we use the accumulator pattern.
2. `initialValue` which is the initial value of the accumulator.

Before we get into more detail about reducer functions, let's take a look at two examples:

# Examples

Here's some code that adds up all the numbers in an array using the accumulator pattern:

```js
function sum(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i += 1) {
    total += nums[i];
  }
  return total;
}

sum([1, 2, 8]); // => 11
```

Here is that same logic, re-written to use `.reduce()`:

```js
function sum(nums) {
  function reducer(total, nextNum) {
    return total + nextNum;
  }
  return nums.reduce(reducer, 0);
}

sum([1, 2, 8]); // => 11
```

Take a moment to study each example, considering the following questions:

- How are these examples similar?
- How are they different?
- What are the parameters of the reducer function?
- What does the reducer function return?

After you've thought about these questions on your own, we're ready to talk more about reducer functions.

## Reducer Functions

The goal of a reducer function is to take in the current value of the accumulator and the next item in an array, and return the updated value of the accumulator. Inside the `.reduce()` method, the reducer function will be called once for each element inside the array.

A reducer function accepts two arguments:

1. `accumulator` (We called it `total` in the example above) - the current value of the accumlator.
2. `currentValue` (We called it `nextNum` in the example above) - a single value in the array.

A reducer function returns:

1. The updated value of the accumulator

Let's revisit the example from above:

```js
function sum(nums) {
  function reducer(total, nextNum) {
    return total + nextNum;
  }
  return nums.reduce(reducer, 0);
}

sum([1, 2, 8]); // => 11
```

When `.reduce()` is called on the array `[1,2,8]`, the reducer will be invoked three times, once for each element in the array.

The first time the reducer is called, it will be passed the `initialValue` we gave to `.reduce()` as well as the first element inside the nums array, like this:

```js
reducer(0, 1); // => 1
```

Since the reducer returned `1`, the next time it is called, the value of the accumulator will be `1`:

```js
reducer(1, 2); // => 3
```

Since the reducer returned `3`, the last time it is called, the value of the accumulator will be `3`:

```js
reducer(3, 8); // => 11
```

Now that the reducer has been called once for each value in the array, `.reduce()` will return the final value of the accumulator, `11`. _Note: you don't have to invoke the reducer function yourself, we pass it into the `.reduce()` method which will take care of this for us_.

# Practice

That was a brief introduction. Reading is a great way to prime yourself on a new topic, but the only way to really learn is to try using `.reduce()` yourself! To practice, please:

1. Review the examples and problems in `practice.js`. Solve each problem using reduce!
2. Revisit your midmodule assessment. Completing each of these problems using `.reduce()`.

# MDN Documentation

For more details and examples, check out the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)!
