// AutoBind Decorator
function autoBind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const methodOriginal = descriptor.value
  const descriptorAdjusted: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFunction = methodOriginal.bind(this)
      return boundFunction
    }
  }

  return descriptorAdjusted
}

class ProjectForm {
  appElement: HTMLDivElement
  templateElement: HTMLTemplateElement
  element: HTMLFormElement
  nameInputElement: HTMLInputElement
  descriptionInputElement: HTMLInputElement

  constructor() {
    this.appElement = document.getElementById("app") as HTMLDivElement
    this.templateElement = document.getElementById(
      "project-form"
    )! as HTMLTemplateElement

    const nodeImported = document.importNode(this.templateElement.content, true)
    this.element = nodeImported.firstElementChild as HTMLFormElement

    this.nameInputElement = this.element.querySelector(
      "#project-name-input"
    ) as HTMLInputElement

    this.descriptionInputElement = this.element.querySelector(
      "#project-description-input"
    ) as HTMLInputElement

    this.configure()
    this.attach()
  }

  @autoBind
  private submit(event: Event) {
    event.preventDefault()
    console.log(this.nameInputElement)
  }

  private configure() {
    this.element.addEventListener("submit", this.submit)
    this.nameInputElement.value = "Project Name"
    this.descriptionInputElement.value = "Project Description"
  }

  private attach() {
    this.appElement.insertAdjacentElement("afterbegin", this.element)
  }
}

const projectForm = new ProjectForm()
