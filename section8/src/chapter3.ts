// 템플릿 리터럴 타입

type Color = 'red' | 'green' | 'blue';

type Animal = 'cat' | 'dog' | 'bird';

// // 매우 번거로움
// type ColoredAnimal =
//   | 'red cat'
//   | 'red dog'
//   | 'red bird'
//   | 'green cat'
//   | 'green dog'
//   | 'green bird'
//   | 'blue cat'
//   | 'blue dog'
//   | 'blue bird';

type ColoredAnimal = `${Color} ${Animal}`;

const coloredAnimal1: ColoredAnimal = 'red cat';
