function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

for (let num = 5; num <= 19; num++) {
  if (isEven(num)) {
    console.log(`The exponential of ${num} is ${exponential(num)}`)
  }
}

