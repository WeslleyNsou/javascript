function fatoerial(n){
    var fat = 1
    for(var c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatoerial(5))


// Fartial 5! 5x4 5x3 5x2 5x1 = 120