// Partial<T> - 부분적인, 일부분의, 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 유틸리티 타입입니다.

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

// Partial<Post>는 Post 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔줍니다. 즉, Partial<Post>는 title, tags, content, thumbnailURL 프로퍼티가 모두 선택적입니다.
const draft: Partial<Post> = {
  title: 'TypeScript',
  content: '초안',
};

// Required<T> - 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 유틸리티 타입입니다.

type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: 'TypeScript',
  tags: ['typescript', 'utility types'],
  content: '완성된 글',
  thumbnailURL: 'https://example.com/thumbnail.jpg',
};

// Readonly<T> - 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 바꿔주는 유틸리티 타입입니다.

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readOnlyPost: Readonly<Post> = {
  title: 'TypeScript',
  tags: ['typescript', 'utility types'],
  content: '읽기 전용 글',
};
