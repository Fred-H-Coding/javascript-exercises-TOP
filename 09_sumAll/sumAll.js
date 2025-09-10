const sumAll = function(x,y) {
    let sumSpread = 0;
    if (Number.isInteger(x) == false || Number.isInteger(y) == false || x < 0 || y < 0) {
    return 'ERROR';
    }
    if (y >= x) {
        for (let i = x; i <= y; i++) {
            sumSpread += i;
        }

    }
    else {
        for (let i = y; i <= x; i++) {
            sumSpread += i;
        }
    }
    return sumSpread;
};


// Do not edit below this line
module.exports = sumAll;
