type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  starting: Date
}

type ElevatedEmployee = Admin & Employee

const firstEmployee: ElevatedEmployee = {
  name: "Shawqi Hatem",
  privileges: ["creating-servers"],
  starting: new Date()
}

type Combinable = number | string
type Numeric = number | boolean
type Universal = Combinable & Numeric

function combining(a: number, b: number): number
function combining(a: string, b: string): string
function combining(a: string, b: number): string
function combining(a: number, b: string): string
function combining(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString()
  else return a + b
}

const result = combining(1, 4)
console.log(result)

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(employee: UnknownEmployee) {
  console.log(["Name:", employee.name].join(" "))
  if ("privileges" in employee)
    console.log(["Privileges:", employee.privileges].join(" "))
  if ("starting" in employee)
    console.log(["Starting:", employee.starting].join(" "))
}

printEmployeeInformation({ name: "Shawqi Hatem", starting: new Date() })

class Car {
  drive() {
    console.log("Driving ...")
  }
}

class Truck {
  load(amount: number) {
    console.log(["Loading ...", amount].join(" "))
  }
}

type Vehicle = Car | Truck

const firstVehicle = new Car()
const secondVehicle = new Truck()

function useVehicle(vehicle: Vehicle) {
  if (vehicle instanceof Car) vehicle.drive()
  else if (vehicle instanceof Truck) vehicle.load(20)
}

useVehicle(firstVehicle)
useVehicle(secondVehicle)

interface Bird {
  type: "bird"
  flyingSpeed: number
}

interface Horse {
  type: "horse"
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed: number
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed
      break
    case "horse":
      speed = animal.runningSpeed
      break
  }

  if (speed) console.log(["Moving at speed:", speed].join(" "))
  else console.log("No speed has been provided")
}

moveAnimal({ type: "bird", flyingSpeed: 10 })

const paragraph = <HTMLParagraphElement>document.querySelector("#message")!
const input = document.querySelector("#user-input")! as HTMLInputElement

paragraph.innerHTML = "This is a paragraph"
input.value = "This is an input"

interface ErrorContainer {
  // { email: "In-valid e-mail", username: "Must start with a character" }
  [prop: string]: string
}

const errorContainer: ErrorContainer = { email: "In-valid e-mail" }
