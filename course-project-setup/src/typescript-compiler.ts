const button = document.querySelector("button")! as HTMLButtonElement

function buttonClickHandler(message: string) {
  console.log("Button clicked successfully")
  console.log(["Handler message:", message].join(" "))
}

const message = "Have been called using bind method"
button.addEventListener("click", buttonClickHandler.bind(null, message))
