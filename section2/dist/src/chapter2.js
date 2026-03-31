// 배열
let numArr = [1, 2, 3];
let strArr = ['Hello', 'World'];
// 제네릭 배열
let boolArr = [true, false];
// 배열에 다양한 타입이 들어갈 수 있음
let mixedArr = [1, 'Hello', 2, 'World'];
// 다차원 배열의 타입을 정의하는 방법
let multiArr = [
    [1, 2, 3],
    [4, 5, 6],
];
// 튜플
// 고정된 길이와 타입을 가지는 배열
let tuple = ['Hello', 123];
let tuple2 = ['World', 456, true];
const users = [
    [1, 'Alice'],
    [2, 'Bob'],
    [3, 'Charlie'],
    // 인덱스의 위치에 따라 값이 정해지는 경우
    // 튜플을 이용하여 값을 잘못 입력하는 것을 방지할 수 있음
    // ['David', 4]
];
export {};
