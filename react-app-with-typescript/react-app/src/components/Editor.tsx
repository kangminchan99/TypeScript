import { useState, type ReactElement } from 'react';

interface Props {
  onClickAdd: (text: string) => void;
  children: ReactElement;
}

export default function Editor(props: Props) {
  const [text, setText] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    props.onClickAdd(text);
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
