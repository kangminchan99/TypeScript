// 제네릭 클래스
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.push(4);
numberList.print(); // [1, 2, 3, 4]
numberList.pop();
numberList.print(); // [1, 2, 3]

const stringList = new List(['a', 'b', 'c']);
stringList.push('d');
stringList.print(); // ['a', 'b', 'c', 'd']
stringList.pop();
stringList.print(); // ['a', 'b', 'c']
