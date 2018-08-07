const convertHTML = str =>
  str.split("").reduce((a, b) => {
    return (
      a +
      b
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
        .replace("'", "&apos;")
    );
  }, "");

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
