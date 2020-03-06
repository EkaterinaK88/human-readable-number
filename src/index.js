module.exports = function toReadable (number) {
  let numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero',
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
    100: 'hundred',
  }
  let res = [];
  if (number === 0) {res.push(numbers[0]);}
  let arr = String(number).split('');
  if (number % 100 < 20 || (number % 100) % 10 === 0) {
    if (number % 100 === 0) {
      res = res;
    } else {
    res.unshift(numbers[number % 100]);
    }
    arr.pop();
    arr.pop();
    number = Math.floor(number / 100);
  } else {
  res.unshift(numbers[number % 10]);
  arr.pop();
  number = Math.floor(number / 10);
  res.unshift(numbers[(number % 10)*10]);
  arr.pop();
  number = Math.floor(number / 10);
  }
  if (number === 0) {
    res = res;
  } else {
  res.unshift(numbers[number] + ' ' + numbers[100]);
  }
  
  return res.join(' ');  
}
