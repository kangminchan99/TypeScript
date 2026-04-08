// 접근 제어자(Access Modifiers)
// => public, private, protected
class Employee {
  // 필드 - default로 public으로 설정됨
  private name: string;
  protected position: string;
  salary: number;

  // 생성자 - 생성자에 접급 제어자를 사용하려면 필드를 지워줘야한다.
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

  // 메서드
  func() {
    // this.name; // 오류: 'name'은 private이므로 파생 클래스에서도 접근 불가.
    this.position; // protected는 파생 클래스에서 접근 가능
  }
}

const employee = new Employee('John Doe', 'Software Engineer', 80000);
// employee.name = 'Jane Smith'; // 오류: 'name'은 private이므로 클래스 외부에서 접근할 수 없습니다.
employee.salary = 30000;
// employee.position = 'Product Manager'; // 오류: 'position'은 protected이므로 클래스 외부에서 접근할 수 없습니다.
console.log(employee);
