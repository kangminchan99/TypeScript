// 사용자 정의 타입가드

type Dog = {
  name: string;
  woof: boolean;
};

type Cat = {
  name: string;
  meow: boolean;
};

type Pet = Dog | Cat;

// pet이 Dog 타입인지 확인하는 사용자 정의 타입가드
function isDog(pet: Pet): pet is Dog {
  return (pet as Dog).woof !== undefined;
}

function isCat(pet: Pet): pet is Cat {
  return (pet as Cat).meow !== undefined;
}

function warning(pet: Pet) {
  if (isDog(pet)) {
    // (parameter) pet: Dog
    pet;
    console.log('멍멍');
  } else {
    // (parameter) pet: Cat
    pet;
    console.log('야옹');
  }
}
