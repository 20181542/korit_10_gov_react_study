import { useState } from "react"

function App() {

  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [outText, setOutText] = useState("");
  const [outText2, setOutText2] = useState("");

  const onChange = (e) => {
    setText (e.target.value);
  }
  const onChange2 = (e) => {
    setText2 (e.target.value);
  }

  const onChack = (e) => {
    setOutText(text);
    setOutText2(text2);
  }
  
  
  return (
    <>
      <input type="text" onChange={onChange}/>
      <input type="text" onChange={onChange2}/>
      <button onClick={onChack}>출력</button>
      <h1>내용: {outText}</h1>
      <h1>내용2: {outText2}</h1>
    </>
  )
}

export default App
