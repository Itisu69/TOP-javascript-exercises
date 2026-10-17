const fibonacci = function(count) {
    let number
    if (typeof count !== 'number') {
        number = parseInt(count);
    }
    else {
        number = count;
    }

    if (number < 0) return "OOPS";
    if (number == 0) return 0;
    if (number == 1) return 1;
    return fibonacci(number-1) + fibonacci(number-2);
};

// Do not edit below this line
module.exports = fibonacci;
