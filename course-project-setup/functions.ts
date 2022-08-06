function summationThenHandle(
  firstNumber: number,
  secondNumber: number,
  callback: (number: number) => void
): void {
  const result = firstNumber + secondNumber
  callback(result)
}

let combineValues: (
  firstNumber: number,
  secondNumber: number,
  callback: (number: number) => void
) => void

combineValues = summationThenHandle
summationThenHandle(18, 20, number => console.log(number))
