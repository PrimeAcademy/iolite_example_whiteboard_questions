// How to whiteboard!

// break down the problem
// write a little code
// test code
// repeat

// ============================================================================

// 1) reverse a string!

// examples
// "cat"  -> "tac"
// "hello world" -> "dlrow olleh"

let myString = "cat"

function reverseString(normalString) {
    // Look over incoming string, in reverse
    // For each letter in the reverse loop, concatenated into new string
    // return that new string as the result of this function

    // Accumulator for return string
    let reverseString = ""

    // Loop, starting at the end, going to the front
    for (let i = (normalString.length - 1); i >= 0; i--) {
        console.log(normalString[i])
        // Concatenate the current letter into reverseString
        reverseString = reverseString + normalString[i]
    }

    return reverseString
};

//Test 1
let result = reverseString(myString)
console.log("result, expecting \"tac\" =>>", result)

//Test 2
let helloWorld = "hello world"
let result2 = reverseString(helloWorld)
console.log("result, expecting \"dlrow olleh\" =>>", result2)

// ============================================================================

// 2) Write a function that takes in array,
// and returns the sum of all the even numbers in that array!

// examples
// [0, 1, 2, 3, 4, 5]  -> 6
// [16, 17, 14, 2, 19, 47, 9, 3, 7, 92] -> 124
