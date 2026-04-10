// 인덱스드 엑세스 타입 - 객체 타입의 프로퍼티 타입을 참조하는 방법
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

// Post['author']는 Post 타입의 author 프로퍼티의 타입을 참조하는 인덱스드 엑세스 타입입니다.
function printAuthorInfo(author: Post['author']) {
  console.log(`Author ID: ${author.id}`);
  console.log(`Author Name: ${author.name}`);
}

const post: Post = {
  title: '타입스크립트 공부하기',
  content: '인덱스드 엑세스 타입을 공부해봅시다.',
  author: {
    id: 1,
    name: '홍길동',
  },
};

printAuthorInfo(post.author);

// 배열 예제
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

const posts: PostList[number] = {
  title: '첫 번째 포스트',
  content: '첫 번째 포스트 내용입니다.',
  author: {
    id: 1,
    name: '홍길동',
  },
};

function printPostListAuthorInfo(post: PostList[number]['author']) {
  console.log(`Author ID: ${post.id}`);
  console.log(`Author Name: ${post.name}`);
}

// 튜플 예제
type Tup = [string, number, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type TupNum = Tup[number];
