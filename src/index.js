
exports.min = function min (array) {
    if (array === undefined){return 0;} 
    else if (array.length == 0) {return 0}
    else {
        return Math.min.apply(null, array);
    }
}

exports.max = function max (array) {
    if (array === undefined){return 0;} 
    else if (array.length == 0) {return 0}
    else {
        return Math.max.apply(null, array);
    }
}

exports.avg = function avg (array) {
    if (array === undefined){return 0;} 
    else if (array.length == 0) {return 0}
    else {
        let sum  = array.reduce(function (prev, item){
            return prev + item;});
            return sum / array.length;
    }
}
