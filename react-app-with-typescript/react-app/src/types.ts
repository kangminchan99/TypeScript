// Todo 아이템의 타입을 정의하는 인터페이스
// TypeScript에서 객체의 구조(shape)를 미리 정의해 타입 안전성을 보장
export interface Todo {
  id: number; // 각 할 일의 고유 식별자
  content: string; // 할 일의 내용
}
