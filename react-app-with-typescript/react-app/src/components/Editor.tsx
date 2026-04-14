import { useState } from 'react';
import { useTodoDispatch } from '../context/TodoContext';

// interface Props {
//   children: ReactElement;
// }

export default function Editor() {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText('');
  };

  return (
    <div>
      {/* value={text}로 제어 컴포넌트(Controlled Component) 구현 */}
      {/* → React state가 input의 값을 제어함 (단방향 데이터 흐름) */}
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>add</button>
    </div>
  );
}
