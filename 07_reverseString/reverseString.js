const reverseString = function(string) {
    let stringArray = string.split("");
    let reversedStringArray = stringArray.reverse();
    let reversedString = reversedStringArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
