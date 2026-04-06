// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법을 말한다.

type Person = {
  name: string;
  age: number;
};

// value => number: toFixed
// value => string: toUpperCase
// value => Date: getTime
// value => Person: name은 age살입니다.
function func(value: number | string | Date | null | Person) {
  // value;
  // value.toUpperCase(); // 오류: value는 number 또는 string 타입이므로 toFixed 메서드를 사용할 수 없음
  // value.toFixed(2);

  // type guard - 특정 조건을 통해 타입을 좁히는 방법
  if (typeof value === 'number') {
    return value.toFixed(2);
  } else if (typeof value === 'string') {
    return value.toUpperCase();
    // instanceof 연산자 - 객체가 특정 클래스의 인스턴스인지 확인하는 방법
  } else if (value instanceof Date) {
    return value.getTime();
    // in 연산자 - 객체에 특정 프로퍼티가 있는지 확인하는 방법
  } else if (value && 'age' in value) {
    return `${value.name}은 ${value.age}살입니다.`;
  }
}
