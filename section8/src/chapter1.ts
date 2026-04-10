// keyof 연산자
// interface Person {
//   name: string;
//   age: number;
//   city: string;
// }

type Person = typeof person; // Person 타입을 person 객체의 타입으로 정의합니다.

// keyof Person은 Person 타입의 모든 프로퍼티 키를 유니온 타입으로 반환합니다.
type PersonKeys = keyof Person; // 'name' | 'age' | 'city'
function getProperty(person: Person, key: PersonKeys) {
  return person[key];
}

const person = {
  name: '홍길동',
  age: 30,
  city: '서울',
};

getProperty(person, 'name');
getProperty(person, 'age');
getProperty(person, 'city');
