/*
Basic E-Mail Validation
Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

The string must contain an @ character.
The string must contain a . character.
The @ must have at least one character in front of it.
e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
The . and the @ must be in the appropriate places.
e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
If the string passes these tests, it's considered a valid email address.

Examples
validateEmail("@gmail.com") ➞ false

validateEmail("hello.gmail@com") ➞ false

validateEmail("gmail") ➞ false

validateEmail("hello@gmail") ➞ false

validateEmail("hello@edabit.com") ➞ true
Notes
Check the Tests tab to see exactly what's being evaluated.
You can solve this challenge with RegEx, but it's intended to be solved with logic.
Solutions using RegEx will be accepted but frowned upon :(
 */

function validateEmail(email) {
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email)
}

console.log(validateEmail("@gmail.com")); // false

console.log(validateEmail("hello.gmail@com")); // false

console.log(validateEmail("gmail")); // false

console.log(validateEmail("hello@gmail")); // false

console.log(validateEmail("hello@edabit.com")); // true

console.log(validateEmail("imroz191998@edabit.com")); // true

console.log(validateEmail("imroz.tops@gmail.com")); // true

console.log(validateEmail("imroz.khan@buisness.microsoft.com")); // true
