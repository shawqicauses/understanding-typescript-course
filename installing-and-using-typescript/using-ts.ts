const button = document.querySelector("button")! as HTMLButtonElement
const firstInput = document.getElementById("first-input")! as HTMLInputElement
const secondInput = document.getElementById("second-input")! as HTMLInputElement

function summation(firstNumber: number, secondNumber: number) {
  if (typeof firstNumber === "number" && typeof secondNumber === "number")
    return firstNumber + secondNumber
  else return Number(firstNumber) + Number(secondNumber)
}

button.addEventListener("click", function () {
  console.log(summation(Number(firstInput.value), Number(secondInput.value)))
})
