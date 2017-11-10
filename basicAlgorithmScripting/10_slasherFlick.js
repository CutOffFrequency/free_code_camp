// Return the remaining elements of an array after chopping off n elements from the head.

// The head means the beginning of the array, or the zeroth index.

/* my original answer */

function slasher(arr, howMany) {
    // return arr.slice(howMany) also works
    arr.splice(0, howMany);
    return arr;
}