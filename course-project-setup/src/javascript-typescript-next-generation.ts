const authorName = "Shawqi Hatem"
const authorAge = 20
let somethingChangeable = 2000
somethingChangeable = 2002

type SummationNumbersFunction = (
  firstNumber: number,
  secondNumber: number
) => number

const summationThenPrint: SummationNumbersFunction = function (
  firstNumber: number,
  secondNumber: number
) {
  const result = firstNumber + secondNumber
  console.log(["First number:", firstNumber].join(" "))
  console.log(["Second number:", secondNumber].join(" "))
  console.log(["Result is:", result].join(" "))
  return result
}

const summationInArrowFunction: (
  ...numbers: [number, number, number, number]
) => number = (...numbers: number[]) => {
  const callback: SummationNumbersFunction = (
    currentResult: number,
    currentValue: number
  ) => currentResult + currentValue
  const result = numbers.reduce(callback, 0)
  console.log(result)
  return result
}

summationThenPrint(20, 8)
summationInArrowFunction(10, 20, 30, 40)

const hobbies = ["Imagining", "Reading", "Writing"]
const activeHobbies = ["Designing", "Developing"]
activeHobbies.push(...hobbies)
console.log(hobbies, activeHobbies)

const [firstHobby, secondHobby, ...remainingHobbies] = hobbies
console.log(firstHobby, secondHobby, remainingHobbies)

const author: {
  firstName: string
  secondName: string
  fullName: string
} = {
  firstName: "Shawqi",
  secondName: "Hatem",
  fullName: "Shawqi Hatem"
}

const copiedAuthor = { ...author }
console.log(author, copiedAuthor)

const { firstName, secondName, fullName } = author
console.log(firstName, secondName, fullName)
