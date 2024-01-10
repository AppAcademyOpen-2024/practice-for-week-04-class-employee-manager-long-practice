const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, title, salary, manager, employees = []) {
    super(name, title, salary, manager);
    this.employees = employees;
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  calculateBonus(multiplier) {
    const totalSalary = this.salary + this._totalSubSalary();
    return totalSalary * multiplier;
  }

  _totalSubSalary() {
    let sum = 0;
    this.employees.forEach((e) => {
      const managers = [];
      if (e instanceof Manager && !managers.includes(e)) {
        managers.push(e);
        sum += e.salary + e._totalSubSalary();
      } else {
        sum += e.salary;
      }
    });
    return sum;
  }
}

module.exports = Manager;
