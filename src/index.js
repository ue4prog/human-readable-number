const figure = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
};
/**
 * 
 * @param {string} value 
 */
function resolveTwoDigits(value) {
    let result = ''
    if(value[0] == 1) {
        result += figure[value.slice(0, 2)];
    } else if(value[0] > 1){
        result = result + (figure[value[0] + '0'] || '')+ ' ' + (value[1] == 0 ? '' : figure[value[1]]);
    } else if (value[1] > 0) {
        result += figure[value[1]];
    }
    return result
}
module.exports = function toReadable(number) {
    const stringified = '' + number; 
    let result = '';
    if(stringified.length > 2) {
        result = result + figure[stringified[0]] + ' hundred ';
        result += resolveTwoDigits(stringified.slice(1, 3));
    } else if (stringified.length == 2) {
        result += resolveTwoDigits(stringified);
    } else {
        result += figure[stringified[0]];
    }
    return result.trim();
}
