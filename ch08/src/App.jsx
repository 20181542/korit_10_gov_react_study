import { useState } from 'react'


function App() {
  const initUser = {
    username: "",
    email: "",
    password: "",
    phone: "",
  }
  const [users, setUsers] = useState(initUser);

  const handleChange = (e) => {
    const {name, value} = e.target;
    const newInputvalues = {
      ...users,
      [name]: value,
    }
    setUsers(newInputvalues)
  }

  const handleClick = (e) => {
    console.log(users)
    
  }
  

  return (
    <>
      <div>
        <div>
            <label htmlFor="">사용자이름</label>
            <input type="text" id='username' name='username' value={users.username} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="">이메일</label>
            <input type="text" id='email' name='email' value={users.email} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="">비밀번호</label>
            <input type="text" id='password' name='password' value={users.password} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="">폰번호</label>
            <input type="text" id='phone' name='phone' value={users.phone} onChange={handleChange}/>
        </div>
        <button onClick={handleClick}>회원가입</button>
        
        
      </div>
    </>
  )
}

export default App
