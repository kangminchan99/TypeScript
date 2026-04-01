// 객체 타입간의 호환성 -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: 'tiger',
  color: 'orange',
};

let dog: Dog = {
  name: 'poodle',
  color: 'white',
  breed: 'toy',
};

animal = dog;
// dog = animal; // 오류: Animal 타입은 Dog 타입보다 프로퍼티가 적어서 할당할 수 없음(구조적 타입 시스템)

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: 'TypeScript Handbook',
  price: 33000,
  skill: 'TypeScript',
};

book = programmingBook;
// programmingBook = book; // 오류: Book 타입은 ProgrammingBook 타입보다 프로퍼티가 적어서 할당할 수 없음(구조적 타입 시스템)

// 초과 프로퍼티 검사
// 객체 리터럴이 특정 타입에 할당될 때, 그 타입에 정의되지 않은 프로퍼티가 있으면 오류가 발생
let book2: Book = {
  name: 'TypeScript Handbook',
  price: 33000,
  // skill: 'TypeScript',
};

let book3: Book = programmingBook; // 객체 리터럴이 아닌 변수에 할당할 때는 초과 프로퍼티 검사가 적용되지 않음

function func(book: Book) {}

func({
  name: 'TypeScript Handbook',
  price: 33000,
  // skill: 'TypeScript',
});

func(programmingBook);
