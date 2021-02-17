exports.min = function min(array = []) {
    if (array.length > 0) {
        var num = array[0];
        for (var i = 0; i < array.length; i++) {
            if (num > array[i]) {
                num = array[i];
            }
        }
        return num;
    }
    return 0;
};

exports.max = function max(array = []) {
    if (array.length > 0) {
        var num = array[0];
        for (var i = 0; i < array.length; i++) {
            if (num < array[i]) {
                num = array[i];
            }
        }
        return num;
    }
    return 0;
};

exports.avg = function avg(array = []) {
    if (array.length > 0) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
    return 0;
};
