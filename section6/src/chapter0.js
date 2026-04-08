// 클래스

let studentA = {
  name: 'kim',
  age: 20,
  grade: 'A',
  study() {
    console.log('공부하기');
  },
  introduce() {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  },
};

// let studentB = {
//   name: 'lee',
//   age: 26,
//   grade: 'B',
//   study() {
//     console.log('공부하기');
//   },
//   introduce() {
//     console.log(`안녕하세요 저는 ${this.name}입니다.`);
//   },
// };

class Student {
  // 필드
  name;
  age;
  grade;

  // 생성자
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // 메서드
  study() {
    console.log('공부하기');
  }

  introduce() {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
const studentB = new Student('lee', 26, 'B');

console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student {
  // 필드
  favoriteLanguage;

  // 생성자
  constructor(name, age, grade, favoriteLanguage) {
    super(name, age, grade);
    this.favoriteLanguage = favoriteLanguage;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteLanguage}로 프로그래밍하기`);
  }
}

let studentC = new StudentDeveloper('park', 30, 'C', 'JavaScript');
console.log(studentC);
studentC.introduce();
studentC.study();
studentC.programming();
