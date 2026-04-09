// 제네릭 인터페이스 - 인터페이스에 제네릭 타입 매개변수 사용하기
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: 'age',
  value: 30,
};

console.log(keyPair.key); // "age"

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['hello', 'world'],
};

// 인덱스 시그니처 - 객체의 프로퍼티 이름과 타입을 동적으로 정의할 수 있는 기능
interface NumberMap {
  [key: string]: number;
}

let numMap: NumberMap = {
  a: 1,
  b: 2,
  c: 3,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  a: 'hello',
  b: 'world',
};

console.log(Object.keys(stringMap)); // ["a", "b"]

let booleanMap: Map<boolean> = {
  a: true,
  b: false,
};

// 제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: 'value',
};

// 제네릭 인터페이스의 활용 예시
// ex) 유저 관리 프로그램
// -> 유저 구분: 학생 유저 / 개발자 유저

interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  console.log(`${user.name} goes to ${user.profile.school}.`);
}

// goToSchool(developerUser); // 에러 발생 - developerUser는 User<Developer> 타입이므로 User<Student> 타입과 호환되지 않음

const developerUser: User<Developer> = {
  name: 'John',
  profile: {
    type: 'developer',
    skill: 'TypeScript',
  },
};

const studentUser: User<Student> = {
  name: 'Jane',
  profile: {
    type: 'student',
    school: 'ABC University',
  },
};
