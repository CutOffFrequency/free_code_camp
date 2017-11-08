// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120


function factorialize(num) {
    let final;
    if (num >= 0) {
        final = 1;
    } else {
        final = -1;
    }
    if (num > 0) {
        for ( let i = num; i > 1; i -= 1) {
            final = final * i;
        }
    }
    return final
}

factorialize(5);

// why am I not using recursion?

// according to these results on jsperf (https://jsperf.com/factorialize-for-loop-vs-recursion/1)
// a for loop is still faster even though js now includes TCO