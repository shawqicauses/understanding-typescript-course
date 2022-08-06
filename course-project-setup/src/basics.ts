function summation(
  firstNumber: number,
  secondNumber: number,
  printResult: boolean,
  printPhrase: string
) {
  // if (typeof firstNumber !== "number" || typeof secondNumber !== "number")
  // throw new Error("In-correct inputs")
  if (printResult) {
    console.log([printPhrase, firstNumber + secondNumber].join(" "))
    return undefined
  } else return firstNumber + secondNumber
}

// let someNumber: number 👍🏻 Good practice
// let someNumber: number = 80 👎🏻 Bad practice
// let someString = "Hi @shawqicauses"
// someString = 2000 // Error: number is not assignable to type string

const firstNumber = 8
const secondNumber = 20
const printResult = true
const printPhrase = "Result is:"
summation(Number(firstNumber), Number(secondNumber), printResult, printPhrase)
