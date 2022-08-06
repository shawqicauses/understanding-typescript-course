enum Role {
  ADMIN,
  AUTHOR,
  READ_ONLY
}

const person: {
  name: string
  username: string
  hobbies: string[]
  role: [number, string]
} = {
  username: "@shawqicauses",
  name: "Shawqi Hatem",
  hobbies: ["Reading", "Writing"],
  role: [Role.ADMIN, "Admin".toUpperCase()]
}

console.log(person.username)
console.log(person.name)
console.log(person.hobbies)
console.log(person.role)

for (const hobby of person.hobbies) console.log(hobby)
if (person.role[0] === Role.ADMIN) console.log("Is Admin")
