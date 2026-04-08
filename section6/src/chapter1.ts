// 타입 스크립트의 클래스
const employee = {
  name: 'John Doe',
  position: 'Software Engineer',
  salary: 80000,
  work() {
    console.log(`${this.name} is working as a ${this.position}.`);
  },
};

class Employee {
  // 필드
  name: string;
  position: string;
  salary: number;

  // 생성자
  constructor(name: string, position: string, salary: number) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  // 메서드
  work() {
    console.log(`${this.name} is working as a ${this.position}.`);
  }
}

const employee1 = new Employee('John Doe', 'Software Engineer', 80000);
console.log(employee1);
employee1.work();

// 타입으로도 활용가능
const employee2: Employee = {
  name: 'Jane Smith',
  position: 'Product Manager',
  salary: 90000,
  work() {
    console.log(`${this.name} is working as a ${this.position}.`);
  },
};

class ExecutiveOfficer extends Employee {
  // 추가 필드
  department: string;

  // 생성자
  constructor(
    name: string,
    position: string,
    salary: number,
    department: string,
  ) {
    super(name, position, salary); // 부모 클래스의 생성자 호출
    this.department = department;
  }
}
