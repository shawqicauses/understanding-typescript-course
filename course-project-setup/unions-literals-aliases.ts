type Combinable = number | string
type Conversion = "as-number" | "as-string"

function combine(
  firstInput: Combinable,
  secondInput: Combinable,
  resultConversion: Conversion
) {
  let result: Combinable
  let isNumbers =
    typeof firstInput === "number" && typeof secondInput === "number"
  if (isNumbers || resultConversion === "as-number")
    result = Number(firstInput) + Number(secondInput)
  else result = firstInput.toString() + secondInput.toString()
  return result
}

const combinedAges = combine("8", "20", "as-number")
const combinedNames = combine("@shawqi", "causes", "as-string")
console.log(combinedAges, combinedNames)
