const names: Array<string> = ["Shawqi", "Hatem"]

const promise: Promise<string> = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("This is done!")
  }, 2000)
})

promise.then(function (data) {
  data.split(" ")
})

function merge<T extends object, U extends object>(
  firstObject: T,
  secondObject: U
) {
  return Object.assign(firstObject, secondObject)
}

const mergedObject = merge<
  { name: string; hobbies: Array<string> },
  { age: number }
>({ name: "Shawqi", hobbies: ["Reading", "Writing"] }, { age: 20 })

interface Length {
  length: number
}

function countAndDescribe<T extends Length>(element: T) {
  let description = "Got no value!"
  if (element.length === 1) description = ["Got 1 element"].join(" ")
  else if (element.length > 1)
    description = ["Got", element.length, "elements"].join(" ")
  return [element, description]
}

console.log(countAndDescribe("Hi there!"))
console.log(countAndDescribe(["Shawqi", "Hatem"]))
console.log(countAndDescribe([]))

function extractAndConvert<T, U extends keyof T>(object: T, key: U) {
  return ["Value", object[key]].join(" ")
}

console.log(extractAndConvert({ name: "Shawqi Hatem" }, "name"))

class DataStorage<T extends number | string> {
  private data: T[] = []

  insertItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) !== -1)
      this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const stringStorage = new DataStorage<string>()
stringStorage.insertItem("Shawqi")
stringStorage.insertItem("Hatem")
stringStorage.removeItem("Shawqi")
console.log(stringStorage)

interface CourseGoal {
  title: string
  description: string
  date: string
}

function createCourseGoal(
  title: string,
  description: string,
  date: string
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.date = date
  return courseGoal as CourseGoal
}

const something: ReadonlyArray<string> = ["Shawqi", "Hatem"]
const anotherThing: Readonly<string[]> = ["Shawqi", "Hatem"]
