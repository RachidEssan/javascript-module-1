// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

function multiply(number) {
    return number * 100
}

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var numbersMultipliedBy100 = numbers.map(multiply)

var numbersMultipliedBy100 = numbers.map(
    function multiply(number) {
        return number * 100;
    }
)

var numbersMultipliedBy100 = numbers.map(number => {
    return number * 100;
})

var numbersMultipliedBy100 = numbers.map(number => number * 100)

console.log(numbersMultipliedBy100)