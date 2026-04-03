// 타입 추론
let a = 10; // TypeScript가 a의 타입을 number로 추론
let b = 'Hello'; // TypeScript가 b의 타입을 string으로 추론
let c = {
  id: 1,
  name: 'Alice',
  profile: {
    age: 30,
  },
};

let { id, name, profile } = c; // TypeScript가 id는 number, name은 string, profile은 { age: number } 타입으로 추론

let [one, two, three] = [1, 'two', true]; // TypeScript가 one은 number, two는 string, three는 boolean 타입으로 추론

// 함수의 반환값 기준으로 타입 추론이 가능, 매개변수도 기본값이 있다면 타입 추론이 가능
function func(email: string) {
  return 'Hello';
}

// 암묵적 any 타입 - 비추천
let d;
d = 10; // 다음라인에서 d의 타입이 number로 추론됨
d.toFixed(2);

d = 'Hello'; // 다음라인에서 d의 타입이 string으로 추론됨
d.toUpperCase();
// d.toFixed(2); // 오류: d는 string 타입이므로 toFixed 메서드를 사용할 수 없음

// 리터럴 타입으로 타입 추론
const num = 10;
const str = 'Hello';

// string | number를 가진 유니온 타입으로 추론
let arr = [1, 'String'];
