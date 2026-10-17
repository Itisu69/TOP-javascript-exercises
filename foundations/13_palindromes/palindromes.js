const palindromes = function (string) {
  const alphaNumerics = "abcdefghijklmnopqrtuvwxyz1234567890";

//   Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
  const cleanString = string
    .toLowerCase()
    .split('')
    .filter((char) => alphaNumerics.includes(char))
    .join('');

    const stringReversed = cleanString.split('').reverse().join('');

    return stringReversed === cleanString;
};

// Do not edit below this line
module.exports = palindromes;
