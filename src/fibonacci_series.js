'use strict';

function fibonacci_series(n) {
    
    var fibonacci_series = [0, 1];
    
    for(var i = 2; i <= n; i++) {
        fibonacci_series.push(fibonacci_series[i-1] + fibonacci_series[i-2]);
    }
    
    return fibonacci_series;
}

module.exports = fibonacci_series;
