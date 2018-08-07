// Return the remaining elements of an array after chopping off n elements from the head.

// The head means the beginning of the array, or the zeroth index.

/* my original answer */
const slasher = (arr, howMany) => arr.splice(0, howMany);

slasher([0, 1, 2], 1);
