// Pick<T,K> - 특정 객체 타입에서 특정 프로퍼티만 딱 골라내는 타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 제목',
  content: '옛날 컨텐츠',
};

// Omit<T,K> - 특정 객체 타입에서 특정 프로퍼티만 딱 빼주는 타입
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumbnailURL', 'title'>>
// Pick<Post, 'tags' | 'content' | 'thumbnailURL'>

const notitlePost: Omit<Post, 'title'> = {
  tags: ['typescript', 'utility types'],
  content: '새로운 컨텐츠',
  thumbnailURL: 'https://example.com/thumbnail.jpg',
};

// Record<K,V> - 특정 객체 타입에서 특정 프로퍼티의 타입을 일괄적으로 바꿔주는 타입
// type ThumbnailLegacy = {
//   large: {
//     url: string;
//   };
//   medium: {
//     url: string;
//   };
//   small: {
//     url: string;
//   };
//   watch: {
//     url: string;
//   };
// };

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  'large' | 'medium' | 'small' | 'watch',
  { url: string; size: number }
>;
