const summation: {
  (firstNumber: number, secondNumber: number): number
} = function (firstNumber: number, secondNumber: number) {
  let result = firstNumber + secondNumber
  console.log(["First Number:", firstNumber].join(" "))
  console.log(["Second Number:", secondNumber].join(" "))
  console.log(["Result:", result].join(" "))
  return result
}

interface Person {
  readonly id?: string
  readonly name?: string
  readonly role?: string
}

interface Informative extends Person {
  describe(): void
}

class Employee implements Informative {
  constructor(public id?: string, public name?: string, public role?: string) {
    this.id = id ? id : "E-01"
    this.name = id ? name : "Default Employee"
    this.role = role ? role : "Normal User"
  }

  describe() {
    console.log(["Employee ID:", this.id].join(" "))
    console.log(["Employee Name:", this.name].join(" "))
  }
}

const myEmployee = new Employee()
console.log(myEmployee.id)
console.log(myEmployee.name)
myEmployee.describe()
