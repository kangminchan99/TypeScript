// Enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두는 방법

enum Role {
  Admin, // 0
  User, // 1,
  Guest, // 2,
}

enum Language {
  English = 'en',
  Spanish = 'es',
  French = 'fr',
}

const user1 = {
  name: 'Alice',
  role: Role.Admin,
  language: Language.English,
};

const user2 = {
  name: 'Bob',
  role: Role.User,
  languagei: Language.Spanish,
};

const user3 = {
  name: 'Charlie',
  role: Role.Guest,
  language: Language.French,
};

console.log(user1, user2, user3);
