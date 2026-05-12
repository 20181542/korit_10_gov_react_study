import { useState } from "react";


function Hello() {
    console.log("함수호출 다시됨?")
    const text = "헬로";

    const [상태변수, 상태셋터] = useState(text);

    const textOnClick = () => {
       상태셋터(text);
       console.log(text);
    }

    
    return (
        <div>
            <button onClick={textOnClick}>클릭</button>
            <h1>{상태변수}</h1>
        </div>
    )
}

export function Hi() {
    const [con, setcon] = useState(0);
    

    const cu  = () => {
        setcon(con + 1);
    }
    const cd = () => {
        setcon(con-1);
    }
    return (
        <div>
            <button onClick={cu}>1증가</button>
            <button onClick={cd}>1감소</button>
            <h1>{con}</h1>
        </div>
        
    )
}

export function Bye() {
    return (
        <h1>바이</h1>
    )
}

export default Hello;