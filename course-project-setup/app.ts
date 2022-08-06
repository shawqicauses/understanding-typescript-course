let userInput: unknown
let userName: string

userInput = 8
userInput = "@shawqicauses"
if (typeof userInput === "string") userName = userInput

function generateError(message: string, code: number): never {
  let error: { message: string; code: number }
  error = { message: message || "Default error message", code: code || 500 }
  throw error
}

generateError("An error occurred", 500)
