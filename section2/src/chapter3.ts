// 객체
// 객체 리터럴 타입
let user: { id?: number; name: string } = {
  id: 1,
  name: 'Alice',
};

// user.id;

// user = {
//   name: 'Bob',
// };

// readonly - 객체의 프로퍼티를 읽기 전용으로 만들어줌
let config: { readonly apiKey: string } = {
  apiKey: 'MY_API_KEY',
};
