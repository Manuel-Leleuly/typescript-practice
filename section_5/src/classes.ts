abstract class Department {
  static fiscalYear = 2020;
  // private id: string
  // private name: string;
  protected employees: string[] = [];

  constructor(public readonly id: string, public name: string) {
    // this.id = id
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(): void {
    console.log("IT Department - ID: ", this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass in a valid value!");
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "IT");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe(this: Department): void {
    console.log("Accounting Department - ID: " + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  getReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Manuel");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Manuel"]);

it.addEmployee("Manuel");
it.addEmployee("Theodore");

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log({ accounting, accounting2 });

accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");
// console.log(accounting.mostRecentReport);

accounting.describe();

accounting.getReports();

// const accountingCopy = { name: "s", describe: accounting.describe };

// accountingCopy.describe();
