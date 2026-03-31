// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  location: string;
};

let user: User = {
  id: 1,
  name: 'Alice',
  nickname: 'Ally',
  birth: '1990-01-01',
  location: 'Seoul',
};

let user2: User = {
  id: 2,
  name: 'Minchan',
  nickname: 'Min',
  birth: '1992-05-15',
  location: 'Busan',
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  KR: 'South Korea',
  US: 'United States',
  JP: 'Japan',
};

type CountryNumberCodes = {
  [key: string]: number;
  // 특정 키가 반드시 존재하도록 명시할 수도 있음
  KR: number;
};

let countryNumberAndStringCodes: CountryNumberCodes = {
  KR: 410,
  US: 840,
  JP: 392,
};
