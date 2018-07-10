// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array

/* my original answer */
const chunkArrayInGroups = (arr, size) => {
    // Break it up.
    let final = []

    while (arr.length > 0) {
      final.push(arr.splice(0,size))
    }
    // this also works but seems more convoluted
    // var position = 0;
    // while(position < arr.length) {
    //     group.push(arr.slice(position, position+=size));
    // }

    return final
}

console.log( chunkArrayInGroups([1,2,3,4,5,6,7,8],4))
