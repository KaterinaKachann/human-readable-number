module.exports =
function toReadable(number) {
    let ones = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    let teens = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    let tens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    let hundred = "hundred";

    let thousands = "thousands";

    let result = "";

    function handle2DigitNumber(number) {

        let result = "";

        if (number < 10) {
            result += ones[number];
        }
    
        if (number < 20 && number >= 10) {
            result += teens[number];
        }
    
        if (number >= 20 && number < 100) {
            tensIndex = Math.trunc(number / 10);
            result += tens[tensIndex];
            
            let  onesIndex = number % 10;
            if ( onesIndex > 0 && onesIndex != 0) {
                result += " " + ones[onesIndex];
            }
        }

        return result;
    }
    
    if (number <= 100) {
        result += handle2DigitNumber(number);
    }

    if (number >= 100 && number <= 999) {
        let onesIndex = Math.trunc(number / 100);
        result += ones[onesIndex] + " " + hundred;
        let  twoDigitNumber = number - onesIndex*100;
        if (twoDigitNumber != 0){
        result += " " + handle2DigitNumber(twoDigitNumber);
        }
    }
    // if (number >= 1000 && number <= 9999) {
        
    //     onesIndex = Math.trunc(number / 1000);
    //     result += ones[onesIndex] + " " + thousands + " " + ones[onesIndex] + " " + hundred + " " + tens[onesIndex] + " " + ones[onesIndex] ;
    
    // }
    return result;
}
//console.log(toReadable(0));
//console.log(toReadable(200));
//console.log(toReadable(300));
