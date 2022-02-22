// import Welcome from "./components/Welcome"
// import Add from "./components/Add"

//props는 Welcome username={"홍길동"} 처럼 컴포넌트에 뭔가를 넣어서 출력할때 사용


import {useState} from "react"; //state hook을 가져옴(값이 변경되었을때 리렌더링 하려고)
import HeaderWhite from "./components/HeaderWhite";
import ListComponents from "./components/ListComponents";

function App() {
  let username = "unknown"
  let [usernameWithState, setUsernameWithState] = useState("초기값");


  const handleInputChange = (e) => {
    setUsernameWithState(e.target.value);
  };



  return (
    <div>
      <HeaderWhite title="메인"></HeaderWhite>
      <ListComponents></ListComponents>
      <input onChange={handleInputChange}></input>
      <p>
        입력된 메시지: {usernameWithState}
      </p>
      
    </div>
  );
}

export default App;
