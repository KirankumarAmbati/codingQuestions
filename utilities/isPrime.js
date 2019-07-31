module.exports = function isPrime(number) {
    for(let n=2; n <= Math.sqrt(number); n++) {
        if(number % n === 0) {
            return false
        }
    }

    return true
}