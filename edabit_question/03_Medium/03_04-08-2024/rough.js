// /*-----------------------------------------------------------------------
// Regular expressions (regex) are powerful tools for pattern matching and text manipulation. Below are the rules and common usage patterns of regex, with JavaScript examples.

// ### Basic Syntax

// 1. Literals:
//    - Match exact characters.
// ############javascript###########################################*/

// let regex = /hello/;
// console.log(regex.test("hello world")); // true

// /*-----------------------------------------------------------------------

// 2. Metacharacters:
//    - Special characters with unique meanings.
//      - `.`: Any character except newline.
//      - `\d`: Any digit (0-9).
//      - `\D`: Any non-digit.
//      - `\w`: Any word character (alphanumeric + underscore).
//      - `\W`: Any non-word character.
//      - `\s`: Any whitespace character.
//      - `\S`: Any non-whitespace character.
// ############javascript###########################################*/

// let regex = /\d/;
// console.log(regex.test("123")); // true

// /*-----------------------------------------------------------------------

// 3. Anchors:
//    - Assert position in the string.
//      - `^`: Start of the string.
//      - `$`: End of the string.
// ############javascript###########################################*/

// let regex = /^hello/;
// console.log(regex.test("hello world")); // true
// console.log(regex.test("world hello")); // false

// let regex2 = /hello$/;
// console.log(regex2.test("hello world")); // false
// console.log(regex2.test("world hello")); // true

// /*-----------------------------------------------------------------------

// 4. Character Classes:
//    - Define a set of characters.
//      - `[abc]`: Match any character in the set.
//      - `[^abc]`: Match any character not in the set.
// ############javascript###########################################*/

// let regex = /[aeiou]/;
// console.log(regex.test("hello")); // true


// const regex1 = /[abc]/;

// console.log(regex1.test("apple"));  // true, because 'a' is in the set
// console.log(regex1.test("banana")); // true, because 'a' and 'b' are in the set
// console.log(regex1.test("cherry")); // true, because 'c' is in the set
// console.log(regex1.test("dog"));    // false, because neither 'a', 'b', nor 'c' is in the string


// const regex2 = /[^abc]/;

// console.log(regex2.test("apple"));  // true, because characters like 'p' and 'l' are not in the set
// console.log(regex2.test("banana")); // true, because characters like 'n' are not in the set
// console.log(regex2.test("cherry")); // true, because characters like 'h', 'e', 'r', and 'y' are not in the set
// console.log(regex2.test("abc"));    // false, because all characters are 'a', 'b', or 'c'


// /*-----------------------------------------------------------------------

// 5. Quantifiers:
//    - Specify the number of occurrences.
//      - `*`: 0 or more.
//      - `+`: 1 or more.
//      - `?`: 0 or 1.
//      - `{n}`: Exactly n.
//      - `{n,}`: n or more.
//      - `{n,m}`: Between n and m.
// ############javascript###########################################*/

// let regex = /a{2,4}/;
// console.log(regex.test("aaa")); // true

// /*-----------------------------------------------------------------------

// 6. Grouping and Alternation:
//    - Grouping: `()`.
//    - Alternation: `|` (OR operator).
// ############javascript###########################################*/

// let regex = /(cat|dog)/;
// console.log(regex.test("I have a cat")); // true
// console.log(regex.test("I have a dog")); // true

// /*-----------------------------------------------------------------------

// 7. Escape Sequences:
//    - `\`: Escape a metacharacter.
// ############javascript###########################################*/

// let regex = /\./;
// console.log(regex.test("3.14")); // true

// /*-----------------------------------------------------------------------

// ### Examples of Usage

// 1. Email Validation:
// ############javascript###########################################*/

// let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// console.log(regex.test("test@example.com")); // true

// /*-----------------------------------------------------------------------

// 2. Phone Number Validation:
// ############javascript###########################################*/

// let regex = /^\d{3}-\d{3}-\d{4}$/;
// console.log(regex.test("123-456-7890")); // true

// /*-----------------------------------------------------------------------

// 3. URL Validation:
// ############javascript###########################################*/

// let regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
// console.log(regex.test("https://www.example.com")); // true

// /*-----------------------------------------------------------------------

// 4. Password Strength (at least one digit, one lowercase, one uppercase, one special character, and minimum 8 characters):
// ############javascript###########################################*/

// let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.{8,})/;
// console.log(regex.test("Password1!")); // true

// /*-----------------------------------------------------------------------

// 5. Extracting Numbers from a String:
// ############javascript###########################################*/

// let str = "There are 12 apples and 24 oranges";
// let regex = /\d+/g;
// let matches = str.match(regex);
// console.log(matches); // ["12", "24"]

// /*-----------------------------------------------------------------------

// ### Using Regex in JavaScript

// - Creating a Regex Object:
//############javascript###########################################*/

// let regex = new RegExp("pattern", "flags");

// /*-----------------------------------------------------------------------

// - Methods:
//   - `test()`: Tests for a match in a string. Returns true or false.
//  ############javascript###########################################*/

// let regex = /hello/;
// console.log(regex.test("hello world")); // true

// /*-----------------------------------------------------------------------
//   - `exec()`: Executes a search for a match in a string. Returns an array of matches.
//  ############javascript###########################################*/

// let regex = /(\d+)/;
// let result = regex.exec("There are 123 apples");
// console.log(result); // ["123", "123"]

// /*-----------------------------------------------------------------------

// - String Methods with Regex:
//   - `match()`: Matches a string against a regex.
//  ############javascript###########################################*/

// let str = "The rain in Spain stays mainly in the plain";
// let regex = /ain/g;
// console.log(str.match(regex)); // ["ain", "ain", "ain"]

// /*-----------------------------------------------------------------------
//   - `replace()`: Replaces part of a string with another string using regex.
//  ############javascript###########################################*/

// let str = "hello world";
// let regex = /world/;
// console.log(str.replace(regex, "there")); // "hello there"

// /*-----------------------------------------------------------------------
//   - `search()`: Searches for a match in a string and returns the index of the match.
//  ############javascript###########################################*/

// let str = "The quick brown fox";
// let regex = /quick/;
// console.log(str.search(regex)); // 4

// /*-----------------------------------------------------------------------
//   - `split()`: Splits a string into an array of substrings using regex.
//  ############javascript###########################################*/

// let str = "1,2,3,4,5";
// let regex = /,/;
// console.log(str.split(regex)); // ["1", "2", "3", "4", "5"]

// /*-----------------------------------------------------------------------

// ### Advanced Patterns

// 1. Lookahead and Lookbehind:
//    - Positive Lookahead (`?=`): Assert that what follows the current position in the string matches the pattern.
//   ############javascript###########################################*/

// let regex = /foo(?=bar)/;
// console.log("foobar".match(regex)); // ["foo"]

// /*-----------------------------------------------------------------------
//    - Negative Lookahead (`?!`): Assert that what follows the current position in the string does not match the pattern.
//   ############javascript###########################################*/

// let regex = /foo(?!bar)/;
// console.log("foobaz".match(regex)); // ["foo"]

// /*-----------------------------------------------------------------------
//    - Positive Lookbehind (`?<=`): Assert that what precedes the current position in the string matches the pattern.
//   ############javascript###########################################*/

// let regex = /(?<=foo)bar/;
// console.log("foobar".match(regex)); // ["bar"]

// /*-----------------------------------------------------------------------
//    - Negative Lookbehind (`?<!`): Assert that what precedes the current position in the string does not match the pattern.
//   ############javascript###########################################*/

// let regex = /(?<!foo)bar/;
// console.log("bazbar".match(regex)); // ["bar"]

// /*-----------------------------------------------------------------------

// 2. Non-Capturing Groups:
//    - `(?:...)`: Group but do not capture.
// ############javascript###########################################*/

// let regex = /(?:foo|bar)/;
// console.log(regex.test("foo")); // true
// console.log(regex.test("bar")); // true

// /*-----------------------------------------------------------------------

// These are some foundational rules and examples of regex in JavaScript. Understanding these will allow you to create powerful and efficient patterns for various text processing tasks.

// */
