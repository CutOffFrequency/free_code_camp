// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    let numerals = {
        ones: { one: "I", five: "V" },
        tens: { one: "X", five: "L" },
        hundreds: { one: "C", five: "D" },
        thousands: { one: "M", five: "V" },
    }
    numerals.ten_thousands = numerals.tens
    numerals.hundred_thousands = numerals.hundreds
    numerals.millions = numerals.thousands

    let convert = (digit, place) => {
        let one, two, three, four, five, six, seven, eight, nine, next;
        let getNext = {
            ones: "tens",
            tens: "hundreds",
            hundreds: "thousands",
            thousands: "ten_thousands",
            ten_thousands: "hundred_thousands",
            hundred_thousands: "millions",
        }
        one = numerals[place].one;
        five = numerals[place].five;
        next = numerals[ getNext[place] ].one
        let getSwitch = (digit) => {
            switch(digit) {
                case '0':
                    return "";
                case '1':
                    return one
                case '2':
                    return one + one
                case '3':
                    return one + one + one
                case '4':
                    return one + five
                case '5':
                    return five
                case '6':
                    return five + one
                case '7':
                    return five + one + one
                case '8':
                    return five + one + one + one
                case '9':
                    return one + next
                default:
                    console.log("error in switch", digit)
            }
        }
        return getSwitch(digit);
    }
    let getPlace = (i) => {
        let places = ["thousands","hundreds","tens","ones"].reverse()
        return places[i]
    }
    return num.toString().split('').reverse().map((digit, index)=>convert(digit, getPlace(index))).reverse().join('')
}

console.log( convertToRoman(36) )