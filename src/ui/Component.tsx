import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  text: string;
}

export function Component(props: Props) {
  const { text } = props;
  const moreText = "More text";
  let a = 0;

  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");

  const handleOnClickConsole = () => {
    console.log("clicked");
    a = a++;
  };

  const handleOnClickState = () => setCount(count + 1);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value);

  useEffect(() => {
    console.log("MOUNT");

    return () => {
      console.log("UNMOUNT");
    };
  }, []);

  useEffect(() => {
    console.log("COUNT UPDATED");
  }, [count]);

  return (
    <div>
      <p>a: {a}</p>
      <p>text: {text}</p>
      <p>moreText: {moreText}</p>
      <p>static text</p>
      <button onClick={handleOnClickConsole}>console write</button>
      <button onClick={handleOnClickState}>change state</button>
      <input onChange={(event) => handleInput(event)} value={inputText} />
      <p>count: {count}</p>
    </div>
  );
}
