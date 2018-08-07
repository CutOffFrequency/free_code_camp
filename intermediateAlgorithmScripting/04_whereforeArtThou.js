// Make a function that looks through an array of objects (first argument)
// and returns an array of all objects that have matching name and value pairs
// (second argument). Each name and value pair of the source object has to be
// present in the object from the collection if it is to be included in the
// returned array.

const whatIsInAName = (collection, source) => {
  var arr = [];

  let sourceKeys = Object.keys(source);

  arr = collection.filter(el =>
    sourceKeys.every(key => el.hasOwnProperty(key) && el[key] === source[key])
  );

  return arr;
};

console.log(
  whatIsInAName([{ a: 1, b: 2 }, { a: 1, b: 3 }, { b: 3 }], { a: 1 })
);
