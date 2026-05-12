import { useEffect, useState } from 'react'


function App() {
  // const [data, setData] = useState([1,2,3,4,5,5]);
  const [currenttId, setCurrentId] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);



  //비동기적
  const handleAddClick = () => {
    setCurrentId(currenttId + 1);
    
  }
  useEffect(() => {
    console.log("유즈이펙트 호출")
    if(currenttId !== 0){
    setData([...data,{id: currenttId, num: inputValue}]);
    }
  }, [currenttId]);

  console.log(currenttId);
  console.log(data);

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleAddClick}>추가</button>
      <ul>
        {data.map(d => <li key={d.id}>{d.num}</li>)}
      </ul>
    </>
  )
}

export default App
