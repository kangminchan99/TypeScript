import { useTodoDispatch } from '../context/TodoContext';
import type { Todo } from '../types';

type Props = Todo;

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();
  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };
  return (
    <div>
      {props.id}번 - {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
