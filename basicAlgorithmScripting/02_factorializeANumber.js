// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120


const factorialize = num => {
    let final = num >= 0 ? 1 : -1
    if (num > 0) {
        for ( let i = num; i > 1; i -= 1) {
            final = final * i
        }
    }
    return final
}

console.log( factorialize(5) )

// why am I not using recursion?

// a for loop is still faster according to these results on jsperf
// https://jsperf.com/factorialize-for-loop-vs-recursion/1
