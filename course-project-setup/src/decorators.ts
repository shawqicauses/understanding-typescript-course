function Logger(loggerString: string) {
  console.log("Logging Factory")
  return function (constructor: Function) {
    console.log(loggerString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log("Template Factory")
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super()
        console.log("Rendering ...")
        const hookElement = document.getElementById(hookId)
        if (hookElement) hookElement.innerHTML = [template, this.name].join(" ")
      }
    }
  }
}

@Logger("Logging - Person")
@WithTemplate("Hi there", "message")
class Person {
  name = "Shawqi Hatem"

  constructor() {
    console.log("Creating person object ...")
  }
}

function Log(target: any, name: string | symbol) {
  console.log("Property Decorator")
  console.log(target, name)
}

function secondLog(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor/Method Decorator")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function thirdLog(target: any, name: string | symbol, position: number) {
  console.log("Parameter Decorator")
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  title: string
  private _price: number

  @secondLog
  set price(value: number) {
    if (value > 0) this._price = value
    else throw new Error("In-valid price - should be positive!")
  }

  get price() {
    return this._price
  }

  constructor(@thirdLog title: string, @thirdLog price: number) {
    this.title = title
    this._price = price
  }
}
