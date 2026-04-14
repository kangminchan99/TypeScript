import React, { useContext } from 'react';
import type { Todo } from '../types';

// Context를 별도 파일로 분리하는 이유:
// Vite의 Fast Refresh(HMR)는 컴포넌트만 export하는 파일에서만 동작
// 컴포넌트와 Context를 같은 파일에서 export하면 Fast Refresh가 꺼짐

// Todo 목록 상태를 전달하는 Context
export const TodoStateContext = React.createContext<Todo[] | null>(null);

// Todo 추가/삭제 함수를 전달하는 Context
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

// Context를 편하게 사용하기 위한 커스텀 훅
// Provider 밖에서 사용하면 에러를 던져 실수를 방지
export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('TodoDispatchContext is not provided');
  return dispatch;
}
