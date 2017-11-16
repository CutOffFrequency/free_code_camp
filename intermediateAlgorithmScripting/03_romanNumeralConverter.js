// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    let numerals = {
        ones: { one: "I", five: "V" },
        tens: { one: "X", five: "L" },
        hundreds: { one: "C", five: "D" },
        thousands: { one: "I", five: "'V'" }
    }

    let convert = (digit, place) => {
        let one, two, three, four, five, six, seven, eight, nine, next;
        let getNext = {
            ones: "tens",
            tens: "hundreds",
            hundreds: "thousands"
        }
        one = numerals.place.one;
        two = one + one;
        three = two + one;
        five = numerals.place.five;
        four = one + five;
        six = five + one;
        seven = five + two;
        eight = five + three;
        next = numerals.[getNext[place]].one
        nine = one + next;
        let getSwitch = (digit) => {
            switch(digit) {
                case 0:
                    return "";
                case 1:
                    return one;
                case 2: 
                    return two;
                case 3:
                    return three;
                case 4: 
                    return four;
                case 5:
                    return five;
                case 6:
                    return six;
                case 7: 
                    return seven;
                case 8:
                    return eight;
                case 9:
                    return nine;
                default:
                    alert("error in switch")
            }
        }
        return getSwitch(digit);
    }
 return num;
}




convertToRoman(36);