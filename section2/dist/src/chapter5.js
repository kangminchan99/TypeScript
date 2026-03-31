// Enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두는 방법
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["English"] = "en";
    Language["Spanish"] = "es";
    Language["French"] = "fr";
})(Language || (Language = {}));
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
export {};
