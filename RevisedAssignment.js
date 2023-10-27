//This is for handling "Prompt is not defined" error
const prompt = require('prompt-sync')()

/**Function which
 * Checks the input number for various conditions and performs necessary actions
 * Stops the execution if the input number is not ODD
 * @returns {void}
 */
function checkInputNumber() {
    let input = prompt("Enter a number:")

    if (input === null) {
        console.log("No input is provided")
        return
    }

    input = Number(input)

    if (input < 0) {
        console.log("Enter a non-negative number")
    } else if (Number.isNaN(input)) {
        console.log("Enter a valid number not a string")
    } else if (input % 1 !== 0) {
        console.log("Enter a whole number.")
    } else if (input.toString().length === 1) {
        console.log("Enter a number with more than one digit")
    } else {
        const isOddNumber = checkConsecutiveDigits(input)
        if (!isOddNumber) {
            console.log("It is not an ODD number")
            return
        }
        countOddAndPrimeNumbers()
    }
}

/**Function which
 * Checks if each pair of consecutive digits of the input number has a difference of one
 * @param {number} input - The input number to be checked
 * @returns {boolean} - True if the input number is an odd number, otherwise false
 */
function checkConsecutiveDigits(input) {
    const inputStr = input.toString()
    for (let i = 0; i < inputStr.length - 1; i++) {
        const currentDigit = parseInt(inputStr[i])
        const nextDigit = parseInt(inputStr[i + 1])
        if (Math.abs(currentDigit - nextDigit) !== 1) {
            return false
        }
    }
    return true
}

/**Function which
 * Checks if a number is prime
 * @param {number} num - The number to be checked for primality
 * @returns {boolean} - True if the number is prime, otherwise false
 */
function checkIfPrime(num) {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

/**Function which
 * Counts the number of odd and prime numbers between 1 and 10,000,000
 * @returns {void}
 */
function countOddAndPrimeNumbers() {
    let oddPrimeCount = 0
    for (let i = 1; i <= 10000000; i++) {
        if (checkConsecutiveDigits(i) && checkIfPrime(i)) {
            oddPrimeCount++
        }
    }
    process.stdout.write("The count of numbers which are both ODD and prime")
    process.stdout.write(" between 1 and 10,000,000 is: " + oddPrimeCount)
}

// Call the main function to check the input number and perform the necessary checks
checkInputNumber()
