// 맵드 타입 - 객체의 키를 다른 키로 매핑하는 타입, 인터페이스에서 사용 불가하고 타입 별칭에서만 사용 가능합니다.

interface User {
  id: number;
  name: string;
  email: string;
}

// PartialUser 타입은 User 타입의 모든 프로퍼티를 선택적으로 만드는 맵드 타입입니다.
type PartialUser = {
  [K in keyof User]?: User[K];
};

type BooleanUser = {
  [K in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ...기능
  return {
    id: 1,
    name: '홍길동',
    email: 'kangminchan99@gmail.com',
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ...기능
}

updateUser({
  // id: 1,
  name: '강민찬',
  // email: 'kangminchan99@gmail.com',
});
