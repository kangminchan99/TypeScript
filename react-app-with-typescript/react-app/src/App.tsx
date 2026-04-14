import { useEffect, useReducer, useRef } from 'react';
import './App.css';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';
import type { Todo } from './types';

// =====================================================
// 🔍 useState vs useReducer 비교
// =====================================================
//
// ┌──────────────┬──────────────────────────────────────────────────┐
// │              │  useState                                        │
// ├──────────────┼──────────────────────────────────────────────────┤
// │ 형태         │ const [state, setState] = useState(초기값)       │
// │ 상태 변경    │ setState(새로운값) 직접 호출                      │
// │ 적합한 경우  │ 단순한 상태 (숫자, 문자열, 토글 등)               │
// │ 장점         │ 간단하고 직관적                                   │
// │ 단점         │ 복잡한 상태 로직이 컴포넌트 안에 흩어짐            │
// └──────────────┴──────────────────────────────────────────────────┘
//
// ┌──────────────┬──────────────────────────────────────────────────┐
// │              │  useReducer                                      │
// ├──────────────┼──────────────────────────────────────────────────┤
// │ 형태         │ const [state, dispatch] = useReducer(reducer, 초기값) │
// │ 상태 변경    │ dispatch({ type: 'ACTION', payload: 데이터 })    │
// │ 적합한 경우  │ 복잡한 상태, 여러 액션이 있는 경우                 │
// │ 장점         │ 상태 변경 로직을 reducer 함수로 분리 → 관리 용이  │
// │ 단점         │ 코드량이 많아짐 (Action 타입, reducer 함수 등)    │
// └──────────────┴──────────────────────────────────────────────────┘
//
// 💡 핵심 차이:
//   useState  → "새 값을 직접 전달" (무엇으로 바꿀지)
//   useReducer → "어떤 동작(action)을 할지 전달" (무엇을 할지)
//
// 예시 비교:
//   useState:    setTodos([...todos, newTodo])           ← 직접 새 배열을 만들어 전달
//   useReducer:  dispatch({ type: 'ADD_TODO', payload }) ← "추가해"라는 명령만 전달
// =====================================================

// Action 타입 정의 (유니온 타입)
// useReducer에서 dispatch할 수 있는 액션의 종류를 미리 정의
// TypeScript의 유니온 타입( | )으로 허용되는 액션만 사용 가능하게 제한
type Action =
  | {
      type: 'ADD_TODO'; // 할 일 추가 액션
      payload: Todo; // 추가할 Todo 데이터
    }
  | {
      type: 'DELETE_TODO'; // 할 일 삭제 액션
      payload: {
        id: number; // 삭제할 Todo의 id
      };
    };

// reducer 함수: 현재 상태(state)와 액션(action)을 받아 새로운 상태를 반환
// - 컴포넌트 밖에 정의 → 상태 변경 로직이 컴포넌트와 분리되어 관리가 쉬움
// - 순수 함수: 같은 입력이면 항상 같은 출력 (부수 효과 없음)
function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]; // 기존 배열 + 새 아이템
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id); // 해당 id 제외
    default:
      return state; // 알 수 없는 액션이면 기존 상태 그대로 반환
  }
}

function App() {
  // [useState 방식] - 주석 처리됨
  // const [todos, setTodos] = useState<Todo[]>([]);
  // → setTodos()에 새로운 배열을 직접 전달하여 상태 변경

  // [useReducer 방식] - 현재 사용 중
  // → dispatch()로 액션 객체를 전달하면, reducer 함수가 새 상태를 계산
  // → 첫 번째 인자: reducer 함수, 두 번째 인자: 초기값([])
  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    // [useState 방식] - 직접 새 배열을 만들어 전달
    // setTodos([
    //   ...todos,
    //   {
    //     id: idRef.current++,
    //     content: text,
    //   },
    // ]);

    // [useReducer 방식] - "ADD_TODO 해줘"라는 명령(액션)만 전달
    // → reducer 함수가 이 액션을 받아서 실제 상태 변경을 처리
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickDelete = (id: number) => {
    // [useState 방식] - 직접 filter로 새 배열 생성
    // setTodos(todos.filter((todo) => todo.id !== id));

    // [useReducer 방식] - "DELETE_TODO 해줘"라는 명령만 전달
    dispatch({
      type: 'DELETE_TODO',
      payload: {
        id,
      },
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>TodoList</h1>
      {/* Editor 컴포넌트에 onClickAdd 함수를 props로 전달 */}
      {/* children으로 <div>child</div>를 전달 (ReactElement 타입) */}
      <Editor onClickAdd={onClickAdd}>
        <div>child</div>
      </Editor>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onClickDelete={onClickDelete}
          ></TodoItem>
        ))}
      </div>
    </div>
  );
}

export default App;
