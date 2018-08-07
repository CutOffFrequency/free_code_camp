let orbitalPeriod = arr => {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.reduce((a, b) => {
    return a.concat([
      {
        name: b.name,
        orbitalPeriod: Math.round(
          2 * Math.PI * Math.sqrt((earthRadius + b.avgAlt) ** 3 / GM)
        )
      }
    ]);
  }, []);
};

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
