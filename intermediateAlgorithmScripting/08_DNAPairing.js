let pairElement = str =>
  str.split("").reduce((a, b) => {
    return [...a, [b, b == "A" ? "T" : b == "T" ? "A" : b == "C" ? "G" : "C"]];
  }, []);

console.log(pairElement("GCG"));
