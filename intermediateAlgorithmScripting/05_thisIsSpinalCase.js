const spinalCase = str =>
  str.split("").reduce((a, b, c, d) => {
    return (
      a +
      (c == 0
        ? b.toLowerCase()
        : b.replace(/[_\W]/, "-") == "-"
          ? "-"
          : b == b.toUpperCase()
            ? d[c - 1].replace(/[_\W]/, "-") != "-"
              ? "-" + b.toLowerCase()
              : b.toLowerCase()
            : b)
    );
  }, "");

console.log(spinalCase("ThisIs_Spinal Tap"));
