// map 메서드
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((num) => num * 2); // [2, 4, 6, 8, 10]

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (num) => num * 2); // [2, 4, 6, 8, 10]
map(['hi, hello'], (str) => parseInt(str)); // [NaN] - 'hi, hello'는 숫자로 변환할 수 없기 때문에 NaN이 반환됨

// forEach 메서드 - 배열의 각 요소에 대해 주어진 함수를 실행하는 메서드, 반환값이 없음
const arr2 = [1, 2, 3, 4, 5];

arr2.forEach((num) => console.log(num)); // 1, 2, 3, 4, 5

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (num) => {
  console.log(num.toFixed());
}); // 1, 2, 3, 4, 5

forEach(['hi, hello'], (str) => {
  console.log(str.toUpperCase());
}); // 'HI, HELLO' - 문자열을 대문자로 변환하여 출력함
