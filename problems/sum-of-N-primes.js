// Problem Statement: To find out sum of *n* prime numbers.

var isPrime = require('../utilities/isPrime')

function sumOfNPrimes(number) {
    let count = 0, sum = 0

    for(let i=2; ;i++) {

        if(isPrime(i)) {
            sum += i
            count++
        }

        if(count >= number) {
            return sum
        }
    }
}

console.log(sumOfNPrimes(10))