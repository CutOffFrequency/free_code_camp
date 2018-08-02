let myReplace = (str, before, after) =>
  str.replace(
    before,
    before.charAt(0) == before.charAt(0).toUpperCase()
      ? after.replace(/^\w/, c => c.toUpperCase())
      : after
  );

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
