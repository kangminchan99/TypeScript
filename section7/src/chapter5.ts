// 프로미스 - 프로미스는 비동기 처리를 위한 객체입니다. 프로미스는 세 가지 상태를 가질 수 있습니다: 대기(pending), 이행(fulfilled), 거부(rejected). 프로미스는 비동기 작업이 성공적으로 완료되었을 때 이행되고, 실패했을 때 거부됩니다. 프로미스는 콜백 함수를 사용하여 비동기 작업의 결과를 처리할 수 있도록 합니다.

import { resolve } from 'node:dns';

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // reslove는 프로미스가 성공적으로 완료되었을 때 호출되는 함수입니다. reject는 프로미스가 실패했을 때 호출되는 함수입니다.
    resolve(20);
    reject('Error occurred');
  }, 3000);
});

promise
  .then((result) => {
    console.log(result * 10);
  })
  .catch((error) => {
    if (typeof error === 'string') {
      console.error(error);
    }
  });

// 프로미스를 반환하는 함수의 타입을 정의

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: 'Hello World',
        content: 'This is a post.',
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  console.log(post.title);
});
