abstract class Department {
  constructor(
    protected readonly id: string,
    protected name: string,
    protected employees: string[]
  ) {
    this.id = id
    this.name = name
    this.employees = employees
  }

  static createEmployee(
    firstName: string,
    secondName: string,
    dataOfBirth: number
  ) {
    return {
      firstName,
      secondName,
      dataOfBirth
    }
  }

  insertEmployee(employee: string): void {
    if (employee.length > 0) this.employees.push(employee)
    else this.employees.push("Empty Employee")
  }

  printEmployeesInformation(): void {
    console.log("Employees Number:", this.employees.length)
    console.log("Employees Members:", this.employees)
    console.log("First Employee:", this.employees[0])
    console.log("Last Employee:", this.employees[this.employees.length - 1])
  }

  abstract describe(this: Department): void
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT Department", [...admins])
    this.admins = admins
  }

  describe(this: ITDepartment): void {
    const admins = this.admins.join(" | ")
    const employees = this.employees.join(" | ")
    console.log(["IT Department ID:", this.id].join(" "))
    console.log(["IT Department Name:", this.name].join(" "))
    console.log(["IT Department Admins:", admins].join(" "))
    console.log(["IT Department Employees:", employees].join(" "))
  }
}

class AccountingDepartment extends Department {
  private recentReport: string
  private static instance: AccountingDepartment

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting Department", ["Eng. Shawqi Hatem"])
    this.reports = reports
    this.recentReport = reports[reports.length - 1]
  }

  static getInstance() {
    if (AccountingDepartment.instance) return this.instance
    this.instance = new AccountingDepartment("A-18", ["Instance Report"])
    return this.instance
  }

  get mostRecentReport() {
    if (this.recentReport) return this.recentReport
    else throw new Error("404 | Report Doesn't Exist")
  }

  set mostRecentReport(report: string) {
    if (report) this.insertReport(report)
    else throw new Error("500 | In-valid Report")
  }

  insertEmployee(employee: string): void {
    if (employee.length > 0) this.employees.push(employee)
    else this.employees.push("Empty Accounting Employee")
  }

  insertReport(report: string): void {
    if (report.length > 0) this.reports.push(report)
    else report = "Empty Accounting Report"
    this.recentReport = report
  }

  printReportsInformation() {
    for (let index = 0; index < this.reports.length; index++) {
      let counter: number | string = index + 1
      counter = counter >= 10 ? counter : "0" + counter
      console.log([counter, "Report:", this.reports[index]].join(" "))
    }
  }

  describe(this: AccountingDepartment): void {
    const reports = this.reports.join(" | ")
    const employees = this.employees.join(" | ")
    console.log(["Accounting Department ID:", this.id].join(" "))
    console.log(["Accounting Department Name:", this.name].join(" "))
    console.log(["Accounting Department Reports:", reports].join(" "))
    console.log(["Accounting Department Employees:", employees].join(" "))
  }
}

const firstEmployee = Department.createEmployee("Shawqi", "Hatem", 22082003)
const secondEmployee = Department.createEmployee("Deema", "Mohammed", 20032000)
console.log(firstEmployee, secondEmployee)

const accounting = AccountingDepartment.getInstance()
accounting.insertEmployee("Eng. Deema Mohammed")
accounting.insertEmployee("Eng. Obaida Al-Bahrain")
accounting.insertReport("TypeScript Report")
accounting.insertReport("JavaScript and TypeScript Report")

accounting.mostRecentReport = "Year Ending Report - 2021 Edition"
accounting.mostRecentReport = "Year Ending Report - 2022 Edition"
console.log(accounting.mostRecentReport)

accounting.printEmployeesInformation()
accounting.printReportsInformation()
accounting.describe()

const companyIT = new ITDepartment("IT-08", ["Eng. Shawqi Hatem"])
companyIT.insertEmployee("Eng. Salma Hatem")
companyIT.insertEmployee("Eng. Deema Mohammed")
companyIT.describe()

console.log(accounting)
console.log(companyIT)
