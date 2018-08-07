// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

let valueToConvert = process.argv[2];

const convertToRoman = num => {
  let numerals = {
    ones: { one: "i", five: "v" },
    tens: { one: "x", five: "l" },
    hundreds: { one: "c", five: "d" },
    thousands: { one: "m", five: "V" },
    ten_thousands: { one: "X", five: "L" },
    hundred_thousands: { one: "C", five: "D" },
    millions: { one: "M", five: "V" }
  };

  let places = [
    "ones",
    "tens",
    "hundreds",
    "thousands",
    "ten_thousands",
    "hundred_thousands",
    "millions"
  ];
  let getPlace = i => places[i];
  let getNext = current => {
    if (current === "millions")
      throw new Error("value must be below 10000000 (ten million)");
    return places[places.indexOf(current) + 1];
  };

  const convert = (digit, place) => {
    let one, two, three, four, five, six, seven, eight, nine, next;
    one = numerals[place].one;
    five = numerals[place].five;
    next = place === "millions" ? "n/a" : numerals[getNext(place)].one;
    const translate = digit => {
      switch (digit) {
        case "0":
          return "";
        case "1":
          return one;
        case "2":
          return one + one;
        case "3":
          return one + one + one;
        case "4":
          return one + five;
        case "5":
          return five;
        case "6":
          return five + one;
        case "7":
          return five + one + one;
        case "8":
          return five + one + one + one;
        case "9":
          return one + next;
        default:
          console.log("error in switch", digit);
      }
    };
    return translate(digit);
  };
  return num
    .toString()
    .split("")
    .reverse()
    .map((digit, index) => convert(digit, getPlace(index)))
    .reverse()
    .join("");
};

console.log(convertToRoman(valueToConvert));
