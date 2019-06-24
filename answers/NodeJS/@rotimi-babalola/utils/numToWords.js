class IntToEnglish {
  // based on https://stackoverflow.com/questions/3299619/algorithm-that-converts-numeric-amount-into-english-words/3299672#3299672
  constructor() {
    this.to19 = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ];

    this.tens = [
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety',
    ];

    this.denom = [
      '',
      'thousand',
      'million',
      'billion',
      'trillion',
      'quadrillion',
      'quintillion',
      'sextillion',
      'septillion',
      'octillion',
      'nonillion',
      'decillion',
      'undecillion',
      'duodecillion',
      'tredecillion',
      'quattuordecillion',
      'sexdecillion',
      'septendecillion',
      'octodecillion',
      'novemdecillion',
      'vigintillion',
    ];
  }

  numToWords(amount) {
    const intAmount = parseInt(amount, 10);
    return this.englishNumber(intAmount);
  }

  convertNN(value) {
    if (value < 20) {
      return this.to19[value];
    }
    for (let index = 0; index < this.tens.length; index++) {
      const dcap = this.tens[index];
      const dval = 20 + 10 * index;
      if (dval + 10 > value) {
        if (value % 10 !== 0) {
          const remainder = this.to19[value % 10];
          return `${dcap}-${remainder}`;
        }
        return dcap;
      }
    }
    throw Error('Should never get here, less than 100 failure');
  }

  convertNNN(value) {
    let word = '';
    const rem = parseInt(value / 100, 10);
    const mod = value % 100;
    if (rem > 0) {
      const b = this.to19[rem];
      word = `${b} hundred`;
      if (mod > 0) {
        word = `${word} and `;
      }
    }
    if (mod > 0) {
      word = `${word}${this.convertNN(mod)}`;
    }
    return word;
  }

  // eslint-disable-next-line consistent-return
  englishNumber(value) {
    if (value < 100) {
      return this.convertNN(value);
    }

    if (value < 1000) {
      return this.convertNNN(value);
    }

    for (let index = 0; index < this.denom.length; index++) {
      const didx = index - 1;
      const dval = Math.pow(1000, index);
      if (dval > value) {
        const mod = Math.pow(1000, didx);
        const l = parseInt(value / mod, 10);
        const r = value - l * mod;
        let ret = `${this.convertNNN(l)} ${this.denom[didx]}`;
        if (r > 0) {
          const separator = r < 1000 ? ' and' : ',';
          ret = `${ret}${separator} ${this.englishNumber(r)}`;
        }
        return ret;
      }
    }
  }
}

module.exports = IntToEnglish;
